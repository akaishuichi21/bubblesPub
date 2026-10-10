import * as THREE from 'three';
import { stepSpring, partitionPlane } from './bubble-physics.js';

// Geometry is a deforming sphere. Flattening its Z axis and applying a
// superellipse exponent gives posts and replies their soft pillow silhouettes.
const vertexShader = `
uniform float uTime;
uniform float uRound;
uniform float uImpulse;
uniform float uPress;
uniform float uPop;
uniform float uTension;
uniform vec2 uTouch;
uniform vec2 uPointer;
uniform float uHover;
uniform vec2 uDrag;
uniform vec4 uContactPlanes[15];
uniform int uPlaneCount;

uniform float uSeed;
varying vec3 vWorld;
varying vec3 vLocal;
varying vec3 vSurfaceDirection;
varying vec3 vSmoothNormal;
varying float vContactFilm;
void main() {
 vec3 p = position;
 vec3 n = normal;
 if(uRound < 0.5) {
   vec2 derivative = 0.55 * pow(max(abs(p.xy), vec2(0.0001)), vec2(-0.45));
   n.xy /= derivative;
   n.z /= 0.36;
   p.xy = sign(p.xy) * pow(abs(p.xy), vec2(0.55));
   p.z *= 0.36;
 }
 float wave = sin(p.y * 4.4 + uTime * 1.3 + uSeed) * sin(p.x * 3.2 - uTime * 0.9 + uSeed);
 float amount = 0.025;
 p *= 1.0 + wave * amount;
 vec2 delta=p.xy-uTouch;
 float touchFalloff=exp(-dot(delta,delta)*7.0);
 float dent=uPress*0.32+uImpulse*0.4;
 p.z-=dent*touchFalloff;
 p.xy+=delta*dent*touchFalloff*0.15;
 p.xy-=uTouch*dent*touchFalloff*0.36;
 float motion=length(uDrag);
 if(motion>0.001){vec2 axis=uDrag/motion;vec2 across=vec2(-axis.y,axis.x);p.xy+=axis*dot(p.xy,axis)*motion*0.34-across*dot(p.xy,across)*motion*0.16;}
 n.xy+=delta*dent*touchFalloff*2.5;
 vec2 touchXY=uTouch/max(1.0,length(uTouch));
 vec3 touchAxis=normalize(vec3(touchXY,sqrt(max(0.02,1.0-dot(touchXY,touchXY)))));
 vec3 surfaceAxis=normalize(position);
 float alignment=dot(surfaceAxis,touchAxis);
 float surfaceMode=3.0*alignment*alignment-1.0;
 p*=1.0+uImpulse*surfaceMode*0.28;
 n-=6.0*alignment*(touchAxis-alignment*surfaceAxis)*uImpulse*0.20;
 vec2 hoverDelta=p.xy-uPointer;
 float fingerFalloff=exp(-dot(hoverDelta,hoverDelta)*9.0)*uHover;
 p.z-=fingerFalloff*0.10;
 p.xy-=uPointer*fingerFalloff*0.035;
 n.xy+=hoverDelta*fingerFalloff*0.8;
 float strain=uTension*uTension;
  float earlyWarning=smoothstep(0.08,0.25,uTension);
 float warningSwell=earlyWarning*(0.026+sin(uTension*22.0)*0.009);
 p.xy*=1.0+warningSwell;
 p.z+=strain*(1.0-touchFalloff)*0.10;
 p.xy-=uTouch*strain*touchFalloff*0.04;
 float nearRupture=smoothstep(0.18,0.75,uTension);
 p*=1.0+sin(uTime*(18.0+uTension*12.0)+uSeed+p.y*7.0)*nearRupture*0.008;
 vContactFilm=0.0;
 // Apply the contact constraint AFTER movement and wobble, keeping the shared
 // film still. Smooth the transition instead of using a hard vertex clamp.
 p*=1.0-uPop*0.12;
 vLocal = p;
 vSurfaceDirection = position;
 vSmoothNormal = normalize(normalMatrix * n);
 vec4 wp = modelMatrix * vec4(p, 1.0);
 // Every neighbour supplies the same world-space partition to both films.
 for(int i=0;i<15;i++){if(i>=uPlaneCount)break;vec4 filmPlane=uContactPlanes[i];float distance=dot(wp.xy,filmPlane.xy)-filmPlane.z;float blend=smoothstep(-8.0,1.0,distance);vContactFilm=max(vContactFilm,blend);vSmoothNormal=normalize(mix(vSmoothNormal,vec3(filmPlane.xy,0.1),blend*.85));}
 vWorld = wp.xyz;
 gl_Position = projectionMatrix * viewMatrix * wp;
}`;
const fragmentShader = `
uniform sampler2D uEnvironment;
uniform sampler2D uPhoto;
uniform float uHasPhoto;
uniform float uPost;
uniform float uTime;
uniform float uSeed;
uniform float uRound;
uniform vec2 uScreen;
uniform vec4 uWorldViewport;
uniform vec2 uEnvSize;
uniform vec2 uEnvironmentAnchor;

uniform vec2 uPhotoSize;
uniform vec4 uClip;
uniform vec4 uContactPlanes[15];
uniform int uPlaneCount;
uniform vec2 uPointer;
uniform float uPop;
uniform float uTension;
uniform float uHover;
varying vec3 vWorld;
varying vec3 vLocal;
varying vec3 vSurfaceDirection;
varying vec3 vSmoothNormal;
varying float vContactFilm;
vec2 cover(vec2 uv, vec2 size, float targetAspect) {
 float a = size.x / max(1.0, size.y);
 if(a > targetAspect) uv.x = (uv.x - 0.5) * targetAspect / a + 0.5;
 else uv.y = (uv.y - 0.5) * a / targetAspect + 0.5;
 return uv;
}
void main() {
 if(gl_FragCoord.x < uClip.x || gl_FragCoord.y < uClip.y || gl_FragCoord.x > uClip.z || gl_FragCoord.y > uClip.w) discard;
  float contactCoverage=1.0;
 for(int i=0;i<15;i++){if(i>=uPlaneCount)break;float contactDistance=dot(vWorld.xy,uContactPlanes[i].xy)-uContactPlanes[i].z;float edgeWidth=max(fwidth(contactDistance),0.2);if(contactDistance>edgeWidth*0.6)discard;contactCoverage=min(contactCoverage,1.0-smoothstep(-edgeWidth*0.4,edgeWidth*0.6,contactDistance));}
 vec3 normal = normalize(vSmoothNormal);
 if(normal.z < 0.0) normal = -normal;
 float facing = clamp(normal.z, 0.0, 1.0);
 float fresnel = pow(1.0 - facing, mix(1.8,1.35,uPost));
 vec3 reflected = reflect(vec3(0.0, 0.0, -1.0), normal);
 // Sample scenery around this bubble's location. The reflection ray bends
 // that window across the film; it never wraps unrelated image edges.
 vec3 ray=normalize(reflected);
 vec2 curvature=ray.xy/(1.0+abs(ray.z));
 vec2 environmentUV=cover(uEnvironmentAnchor+curvature*vec2(0.28,0.24),uEnvSize,uWorldViewport.z/max(1.0,uWorldViewport.w));
 environmentUV=clamp(environmentUV,vec2(0.001),vec2(0.999));
 vec3 environment=texture2D(uEnvironment,environmentUV).rgb; float thickness = 460.0 + 95.0 * sin(vLocal.y * 3.0 + uTime * 0.18 + uSeed) + 48.0 * vLocal.x;
 vec3 wavelengths = vec3(650.0, 510.0, 475.0);
 vec3 film = 0.5 + 0.5 * cos(6.283185 * 2.0 * 1.33 * thickness * max(0.15, facing) / wavelengths);

 // Illumination comes from the sampled scenery, without fixed white lights.
 float environmentLuminance=dot(environment,vec3(0.2126,0.7152,0.0722));
 float sceneryLight=smoothstep(0.025,0.60,environmentLuminance);
 film=environment*0.90+film*0.035*sceneryLight;
 vec3 color=environment*mix(1.05,1.12,uPost)+film*fresnel*(0.10+0.18*sceneryLight);
 float alpha=mix(0.30,0.46,uPost)+fresnel*mix(0.42,0.60,sceneryLight);
 // Probe scenery in the outward edge direction as well as the reflected ray.
 // A flat background has no rear hemisphere; this keeps its bright sources
 // directional at grazing angles rather than collapsing every rim to center.
 float grazing=pow(1.0-facing,3.0);
 vec2 outward=normal.xy/max(0.001,length(normal.xy));
 vec2 lightOffset=mix(curvature*vec2(0.28,0.24),outward*vec2(0.46,0.40),grazing);
 vec2 lightUV=cover(uEnvironmentAnchor+lightOffset,uEnvSize,uWorldViewport.z/max(1.0,uWorldViewport.w));
 vec2 blurStep=vec2(0.018);
 vec3 sharpLight=texture2D(uEnvironment,clamp(lightUV,0.001,0.999)).rgb;
 vec3 softLight=sharpLight*0.36;
 softLight+=texture2D(uEnvironment,clamp(lightUV+vec2(blurStep.x,0.0),0.001,0.999)).rgb*0.16;
 softLight+=texture2D(uEnvironment,clamp(lightUV-vec2(blurStep.x,0.0),0.001,0.999)).rgb*0.16;
 softLight+=texture2D(uEnvironment,clamp(lightUV+vec2(0.0,blurStep.y),0.001,0.999)).rgb*0.16;
 softLight+=texture2D(uEnvironment,clamp(lightUV-vec2(0.0,blurStep.y),0.001,0.999)).rgb*0.16;
 float broadBrightness=dot(softLight,vec3(0.2126,0.7152,0.0722));
 float sharpBrightness=dot(sharpLight,vec3(0.2126,0.7152,0.0722));
 float broadSource=smoothstep(0.025,0.42,broadBrightness);
 float sharpSource=smoothstep(0.06,0.65,sharpBrightness);
 vec3 rimReflection=(softLight*broadSource*1.7+sharpLight*sharpSource*0.75)*grazing;
 float rimCoverage=grazing*clamp(broadSource*0.28+sharpSource*0.16,0.0,0.44);
 if(uHasPhoto > 0.5) {
   // Fit a memory across the visible hemisphere using spherical coordinates.
   // Features compress toward the sides because the texture follows the film.
   vec3 surface=normalize(vSurfaceDirection);
   // A continuous disk-to-square map keeps the image center at natural scale.
   // All four image edges reach the film rim, instead of enlarging the center
   // through angular projection or revealing an inset rectangular panel.
   vec2 disk=surface.xy;
   float difference=disk.x*disk.x-disk.y*disk.y;
   vec2 square=0.5*vec2(
     sqrt(max(0.0,2.0+difference+2.82842712475*disk.x))-sqrt(max(0.0,2.0+difference-2.82842712475*disk.x)),
     sqrt(max(0.0,2.0-difference+2.82842712475*disk.y))-sqrt(max(0.0,2.0-difference-2.82842712475*disk.y)));
   vec2 uv=square*0.5+0.5;
   // Map the complete photo edge-to-edge onto the hemisphere, without a cover crop.
   vec3 photo = texture2D(uPhoto, clamp(uv,0.0,1.0)).rgb;
   // Broad local scenery supplies ambient lighting, independently of the
   // detailed curved reflection. This avoids tint flicker from tiny stars.
   vec2 ambientUV=cover(uEnvironmentAnchor,uEnvSize,uWorldViewport.z/max(1.0,uWorldViewport.w));
   vec2 ambientStep=vec2(0.065);
   vec3 ambient=texture2D(uEnvironment,clamp(ambientUV,0.001,0.999)).rgb*0.40;
   ambient+=texture2D(uEnvironment,clamp(ambientUV+vec2(ambientStep.x,0.0),0.001,0.999)).rgb*0.15;
   ambient+=texture2D(uEnvironment,clamp(ambientUV-vec2(ambientStep.x,0.0),0.001,0.999)).rgb*0.15;
   ambient+=texture2D(uEnvironment,clamp(ambientUV+vec2(0.0,ambientStep.y),0.001,0.999)).rgb*0.15;
   ambient+=texture2D(uEnvironment,clamp(ambientUV-vec2(0.0,ambientStep.y),0.001,0.999)).rgb*0.15;
   float ambientLuminance=dot(ambient,vec3(0.2126,0.7152,0.0722));
   float ambientDaylight=smoothstep(0.015,0.40,ambientLuminance);
   vec3 lightTint=clamp((ambient+vec3(0.035))/(ambientLuminance+0.035),vec3(0.60),vec3(1.35));
   float edgeLighting=pow(1.0-facing,1.4);
   photo*=mix(vec3(1.0),lightTint,0.30+edgeLighting*0.20);
   photo*=mix(0.72,1.04,ambientDaylight)*(0.96+0.04*facing);
   float litLuminance=dot(photo,vec3(0.2126,0.7152,0.0722));
   photo=mix(vec3(litLuminance),photo,mix(0.90,1.0,ambientDaylight));
   // Protect the image center; let local scenery define the curved outer film.
   float memoryEnvelope=1.0-smoothstep(0.78,0.985,length(surface.xy));
   float photoLuminance=dot(photo,vec3(0.2126,0.7152,0.0722));
   float imagePriority=0.87+0.06*smoothstep(0.05,0.65,photoLuminance)-0.025*sceneryLight;
   float memoryWeight=imagePriority*memoryEnvelope*(1.0-0.14*edgeLighting);
   color=mix(color,photo,memoryWeight);
   alpha=mix(alpha,0.84,memoryEnvelope);
 }
 // Add the world reflection over the memory, restricted to grazing film.
 color+=rimReflection;
 alpha+=rimCoverage*(1.0-alpha);
 alpha*=1.0-uTension*0.28*(1.0-fresnel);
 color+=vec3(0.08,0.085,0.10)*fresnel*uTension;
 alpha*=mix(1.0,0.82,vContactFilm)*contactCoverage;
 if(uPop>0.0)alpha*=pow(1.0-uPop,2.0);
 gl_FragColor = vec4(color, clamp(alpha,0.0,0.96));
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
}`;

export function createBubbleRenderer({ scope, container, getEnvironment, dialog = false, memoryOnly = false }) {
 if(!dialog)document.body.classList.remove('webgl-fallback');
 let renderer;
 try { renderer = new THREE.WebGLRenderer({ alpha:true, antialias:true, powerPreference:'low-power' }); }
 catch { document.body.classList.add('webgl-fallback'); return { dispose(){} }; }
 renderer.debug.onShaderError=(gl,program,vertex,fragment)=>{document.body.classList.add('webgl-fallback');console.error('Bubble shader failed to compile',gl.getShaderInfoLog(vertex),gl.getShaderInfoLog(fragment));};
 renderer.setClearColor(0,0); renderer.setPixelRatio(Math.min(devicePixelRatio,2));
 renderer.domElement.className=memoryOnly?'bubble-canvas memory-canvas':'bubble-canvas';renderer.domElement.setAttribute('aria-hidden','true');
 container.prepend(renderer.domElement);
 const scene=new THREE.Scene(), camera=new THREE.OrthographicCamera();camera.position.z=1000;camera.near=0.1;camera.far=2000;
 const geometry=new THREE.SphereGeometry(1,112,80), loader=new THREE.TextureLoader(), textures=new Map(), records=new Map();
 const blank=new THREE.DataTexture(new Uint8Array([100,110,150,255]),1,1);blank.needsUpdate=true;
 let videoTexture=null, videoElement=null, frame=0, last=performance.now(), stopped=false;
 const getTexture=url=>{ if(!url)return blank; if(!textures.has(url)){const t=loader.load(url);t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=Math.min(8,renderer.capabilities.getMaxAnisotropy());textures.set(url,t);}return textures.get(url); };
 function material(round,seed,post){return new THREE.ShaderMaterial({vertexShader,fragmentShader,transparent:true,depthWrite:false,side:THREE.FrontSide,uniforms:{uTime:{value:0},uRound:{value:round?1:0},uSeed:{value:seed},uImpulse:{value:0},uPress:{value:0},uPop:{value:0},uTension:{value:0},uTouch:{value:new THREE.Vector2()},uDrag:{value:new THREE.Vector2()},uContactPlanes:{value:Array.from({length:15},()=>new THREE.Vector4())},uPlaneCount:{value:0},uEnvironment:{value:blank},uPhoto:{value:blank},uHasPhoto:{value:0},uPost:{value:post?1:0},uScreen:{value:new THREE.Vector2()},uWorldViewport:{value:new THREE.Vector4()},uEnvSize:{value:new THREE.Vector2(1,1)},uEnvironmentAnchor:{value:new THREE.Vector2(.5,.5)},uPhotoSize:{value:new THREE.Vector2(1,1)},uClip:{value:new THREE.Vector4()},uPointer:{value:new THREE.Vector2(3,3)},uHover:{value:0}}});}
 const selector=memoryOnly?'.user-orb':dialog?'.message':'.memory-bubble, .reply-glass, .reply-form, .filter, .header-tools .round, .chip, .world-nav, footer button';
 function scan(){const nodes=new Set(scope.querySelectorAll(selector));for(const [node,r] of records)if(!nodes.has(node)){scene.remove(r.mesh);r.mesh.material.dispose();records.delete(node);}for(const node of nodes)if(!records.has(node)){const mat=material(node.classList.contains('user-orb')||node.classList.contains('round')||node.classList.contains('world-nav'),Math.random()*6,node.classList.contains('memory-bubble'));const mesh=new THREE.Mesh(geometry,mat);mesh.frustumCulled=false;const state={displacement:0,velocity:0};records.set(node,{mesh,state,growing:node.classList.contains('growing')});scene.add(mesh);} }
 const observer=new MutationObserver(scan);observer.observe(scope,{childList:true,subtree:true});scan();
 let pointer={x:-10000,y:-10000};const move=e=>{pointer.x=e.clientX;pointer.y=e.clientY;};const leave=()=>{pointer.x=pointer.y=-10000;};scope.addEventListener('pointermove',move);scope.addEventListener('pointerleave',leave);
 const impulse=e=>{const node=e.target.closest(selector);const r=records.get(node);if(r){const rect=node.getBoundingClientRect();r.mesh.material.uniforms.uTouch.value.set((e.clientX-rect.left)/rect.width*2-1,1-(e.clientY-rect.top)/rect.height*2);r.state.velocity=2.8;r.held=true;r.pressStarted=performance.now();}};scope.addEventListener('pointerdown',impulse);const release=()=>{for(const r of records.values()){if(r.held)r.state.velocity+=performance.now()-(r.pressStarted||0)<250?1.1:-.8*(r.pressDepth||0);r.held=false;}};scope.addEventListener('pointerup',release);scope.addEventListener('pointercancel',release);scope.addEventListener('lostpointercapture',release);window.addEventListener('blur',release);
 renderer.domElement.addEventListener('webglcontextlost',e=>{e.preventDefault();document.body.classList.add('webgl-fallback');});
 function animate(now){if(stopped)return;frame=requestAnimationFrame(animate);const env=getEnvironment();const dt=Math.min((now-last)/1000,1/30);last=now;
 if(dialog&&!scope.open)return;
 const bounds=dialog?container.getBoundingClientRect():{left:0,top:0,width:innerWidth,height:innerHeight};const w=Math.max(1,bounds.width),h=Math.max(1,bounds.height);
 if(renderer.domElement.width!==Math.round(w*renderer.getPixelRatio())||renderer.domElement.height!==Math.round(h*renderer.getPixelRatio())){renderer.setSize(w,h,false);camera.left=0;camera.right=w;camera.top=h;camera.bottom=0;camera.updateProjectionMatrix();}
 let texture=getTexture(env.background);
 if(env.video&&env.video!==videoElement){videoTexture?.dispose();videoElement=env.video;videoTexture=new THREE.VideoTexture(videoElement);videoTexture.colorSpace=THREE.SRGBColorSpace;}
 if(!env.video&&videoElement){videoTexture?.dispose();videoTexture=null;videoElement=null;}
 if(videoTexture)texture=videoTexture;
 const dim=texture.image||{};
 for(const [node,r] of records){const rect=node.getBoundingClientRect();const x=rect.left-bounds.left,y=rect.top-bounds.top;const visible=rect.width>0&&rect.height>0&&y+rect.height>0&&y<h&&x+rect.width>0&&x<w;r.mesh.visible=visible;if(!visible)continue;
 const u=r.mesh.material.uniforms;
 const hover=pointer.x>=rect.left&&pointer.x<=rect.right&&pointer.y>=rect.top&&pointer.y<=rect.bottom;u.uHover.value+=(Number(hover)-u.uHover.value)*0.12;u.uPointer.value.set((pointer.x-rect.left)/rect.width*2-1,1-(pointer.y-rect.top)/rect.height*2);const orb=node.classList.contains('user-orb');const t=env.paused?0:now/1000;
 const growing=node.classList.contains('growing');if(r.growing&&!growing)r.state.velocity=0.8;r.growing=growing;
 stepSpring(r.state,dt);
 const float=orb&&!env.paused&&Number(node.dataset.contactStrength||0)<.1?Math.sin(t*0.65+u.uSeed.value)*3:0;
 r.mesh.position.set(x+rect.width/2,h-y-rect.height/2+float,0);
 r.mesh.scale.set(rect.width/2*1.018,rect.height/2*1.025,Math.min(rect.width,rect.height)/2);
  const pressure=Number(node.dataset.pressure||0);r.lastPressure=pressure;u.uTension.value+=(pressure-u.uTension.value)*.18;r.pressDepth=(r.pressDepth||0)+((r.held?0.65+pressure*.55:0)-(r.pressDepth||0))*.22;u.uPress.value=r.pressDepth;u.uDrag.value.lerp(new THREE.Vector2(Number(node.dataset.dragX||0),Number(node.dataset.dragY||0)),.18);u.uPop.value=node.classList.contains('popping')?Math.min(1,(now-Number(node.dataset.popAt||now))/280):0;
 const neighbours=(node._bubbleContacts||[]).filter(n=>n.isConnected).slice(0,15);u.uPlaneCount.value=neighbours.length;const centerX=x+rect.width/2,centerY=h-y-rect.height/2;for(let i=0;i<neighbours.length;i++){const other=neighbours[i].getBoundingClientRect();const ox=other.left-bounds.left+other.width/2,oy=h-(other.top-bounds.top)-other.height/2;let dx=ox-centerX,dy=oy-centerY;let distance=Math.hypot(dx,dy);if(distance<.001){dx=node.dataset.bubbleId<neighbours[i].dataset.bubbleId?1:-1;dy=0;distance=1;}const nx=dx/distance,ny=dy/distance;const radius=rect.width/2*1.018,otherRadius=other.width/2*1.018;const plane=partitionPlane(centerX,centerY,radius,centerX+dx,centerY+dy,otherRadius);u.uContactPlanes.value[i].set(plane.x,plane.y,plane.offset,0);}
 const kick=Number(node.dataset.releaseKick||0);if(kick&&kick!==r.releaseKick){r.releaseKick=kick;r.state.velocity=2;} const pixelRatio=renderer.getPixelRatio();u.uWorldViewport.value.set(bounds.left*pixelRatio,(innerHeight-bounds.top-h)*pixelRatio,innerWidth*pixelRatio,innerHeight*pixelRatio);
 u.uEnvironmentAnchor.value.set((rect.left+rect.width/2)/Math.max(1,innerWidth),1-(rect.top+rect.height/2-float)/Math.max(1,innerHeight));u.uTime.value=t;u.uImpulse.value=r.state.displacement;u.uEnvironment.value=texture;u.uScreen.value.set(w*renderer.getPixelRatio(),h*renderer.getPixelRatio());u.uEnvSize.value.set(dim.videoWidth||dim.width||1,dim.videoHeight||dim.height||1);
  const clipping=node.closest('.message-log, .bubble-garden');
 const clip=clipping?.getBoundingClientRect()||{left:bounds.left,top:bounds.top,right:bounds.left+w,bottom:bounds.top+h};
 const ratio=renderer.getPixelRatio();
 u.uClip.value.set(Math.max(0,clip.left-bounds.left)*ratio,Math.max(0,h-(clip.bottom-bounds.top))*ratio,Math.min(w,clip.right-bounds.left)*ratio,Math.min(h,h-(clip.top-bounds.top))*ratio);
 u.uHasPhoto.value=node.dataset.image?1:0;const photo=getTexture(node.dataset.image);u.uPhoto.value=photo;u.uPhotoSize.value.set(photo.image?.width||1,photo.image?.height||1);
 }
 // Release local image textures when a bubble is removed or its image changes.
 const used=new Set([...records.keys()].map(n=>n.dataset.image).filter(Boolean));for(const [url,texture]of textures)if(url.startsWith('blob:')&&!used.has(url)){texture.dispose();textures.delete(url);}
 renderer.render(scene,camera);
 }
 frame=requestAnimationFrame(animate);
 return {dispose(){stopped=true;cancelAnimationFrame(frame);observer.disconnect();scope.removeEventListener('pointerdown',impulse);scope.removeEventListener('pointerup',release);scope.removeEventListener('pointercancel',release);scope.removeEventListener('lostpointercapture',release);window.removeEventListener('blur',release);scope.removeEventListener('pointermove',move);scope.removeEventListener('pointerleave',leave);for(const r of records.values())r.mesh.material.dispose();geometry.dispose();for(const t of textures.values())t.dispose();videoTexture?.dispose();blank.dispose();renderer.dispose();renderer.domElement.remove();}};
}
























