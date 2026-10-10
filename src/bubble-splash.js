// Ballistic droplets plus a few lingering glass beads. The overlay never
// receives pointer events and is bounded even when many bubbles are popped.
export function installSplash(root){
 const layer=document.createElement('div');layer.className='wet-overlay';layer.setAttribute('aria-hidden','true');root.append(layer);const animations=new Set();
 function droplet(x,y,size,frames,duration){const n=document.createElement('i');n.className='splash-droplet';n.style.left=x+'px';n.style.top=y+'px';n.style.width=size+'px';n.style.height=(size*1.15)+'px';layer.append(n);while(layer.children.length>72){const old=layer.firstChild;old.getAnimations().forEach(a=>a.cancel());old.remove();}const a=n.animate(frames,{duration,easing:'linear',fill:'forwards'});animations.add(a);a.onfinish=a.oncancel=()=>{animations.delete(a);n.remove();};}
 const pop=e=>{const rect=e.target.getBoundingClientRect();const x=rect.left+rect.width/2,y=rect.top+rect.height/2;const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 if(reduced){droplet(x,y,8,[{opacity:.4},{opacity:0}],450);return;}
 for(let i=0;i<24;i++){const angle=Math.PI*2*i/24+(Math.random()-.5)*.2;const speed=80+Math.random()*170;const vx=Math.cos(angle)*speed,vy=Math.sin(angle)*speed;const lifetime=650+Math.random()*450;const frames=[];for(let k=0;k<=8;k++){const t=k/8*lifetime/1000;frames.push({transform:'translate('+vx*t+'px,'+(vy*t+210*t*t)+'px) scale('+(1-.35*k/8)+')',opacity:Math.min(1,(1-k/8)*1.5)});}droplet(x,y,2+Math.random()*6,frames,lifetime);}
 for(let i=0;i<7;i++){const dx=(Math.random()-.5)*rect.width*2.5,dy=(Math.random()-.5)*rect.height*2;const px=Math.max(10,Math.min(innerWidth-22,x+dx)),py=Math.max(10,Math.min(innerHeight-40,y+dy));droplet(px,py,6+Math.random()*14,[{opacity:0,transform:'translateY(0)'},{offset:.12,opacity:.6,transform:'translateY(2px)'},{offset:.7,opacity:.35,transform:'translateY(14px)'},{opacity:0,transform:'translateY(29px)'}],2200+Math.random()*1500);}
 };root.addEventListener('bubblepop',pop);
 return {dispose(){root.removeEventListener('bubblepop',pop);animations.forEach(a=>a.cancel());layer.remove();}};
}

