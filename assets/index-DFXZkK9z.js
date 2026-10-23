(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[new URL(`dm-moonlit-ocean-De6bQPdh.png`,import.meta.url).href,new URL(`dm-lantern-forest-D0MCfPWZ.png`,import.meta.url).href,new URL(`dm-neon-rain-BZwCc95G.png`,import.meta.url).href,new URL(`dm-starlit-lake-BAEf9Lbd.png`,import.meta.url).href,new URL(`dm-golden-coast-CjvIBISb.png`,import.meta.url).href,new URL(`dm-alpine-twilight-B0NULt9T.png`,import.meta.url).href,new URL(`dm-candlelit-library-D0HfvpEx.png`,import.meta.url).href,new URL(`dm-mistbound-castle-YncvndG5.png`,import.meta.url).href],t=new URL(`lake-after-midnight-DHJjIIku.wav`,import.meta.url).href;function n({root:n,garden:r}){let i=document.createElement(`section`);i.className=`memory-watching`,i.hidden=!0,i.setAttribute(`aria-label`,`Memory watching`),i.innerHTML=`<button class="watch-back" aria-label="Leave memory watching">←</button><div class="watch-heading"><span>b u b b l e s</span><h1>Memory watching</h1><p>Little moments, passing through.</p></div><span class="watch-demo">demo memories · swipe down to return</span><div class="watch-sky"></div><div class="watch-selection"></div><p class="watch-hint">Catch a passing memory</p>`,n.append(i);let a=document.createElement(`button`);a.type=`button`,a.className=`round`,a.textContent=`↟`,a.setAttribute(`aria-label`,`Open memory watching`),a.title=`Swipe up on the open sky, or press ↑`,a.onclick=()=>S(),n.querySelector(`.header-tools`).append(a);let o=i.querySelector(`.watch-sky`),s=i.querySelector(`.watch-selection`),c=[`Luna`,`Noah`,`Mika`,`Ari`,`River`,`Sol`,`Ember`,`Kai`],l=[`The sea sounded like this tonight.`,`A little place to return to.`,`Still thinking about last night…`,`Look at these stars ✧`,`The view reminded me of you.`,`Let’s stay here for a while.`,`This book is incredible…`,`Same place tomorrow?`],u=!1,d=0,f=0,p=0,m=[],h=0,g=null,_=new Audio(t);_.preload=`none`;function v(t,n){let r=document.createElement(`button`);return r.type=`button`,r.className=`watch-orb dm-world-memory `+n,r.dataset.image=e[t],r.style.setProperty(`--memory-image`,`url("${e[t]}")`),r.setAttribute(`aria-label`,`Catch ${c[t]}’s ${t%3==0?`musical `:``}memory`),r.innerHTML=`<img class="watch-picture" alt="Memory world"><span class="watch-gloss"></span>`,r.querySelector(`img`).src=e[t],r}function y(e=!1){if(m.length>=18)return;let t=h++%8,n=v(t,`watch-passing`),r=48+Math.random()*95,i={n,index:t,size:r,x:e?Math.random()*innerWidth:-r*1.5,y:innerHeight*(.19+Math.random()*.43),speed:12+Math.random()*15,phase:Math.random()*6};n.style.width=n.style.height=r+`px`,n.onclick=()=>b(t),o.append(n),m.push(i)}function b(e){_.pause(),s.replaceChildren();let t=v(e,`watch-feature`);t.removeAttribute(`aria-label`);let n=document.createElement(`div`);n.className=`watch-card`;let r=document.createElement(`div`);r.className=`watch-identity`,r.textContent=c[e];let i=document.createElement(`small`);i.textContent=[`Moonlit ocean`,`Lantern forest`,`Neon rain`,`Starlit lake`,`Golden coast`,`Alpine twilight`,`Candlelit library`,`Mistbound castle`][e];let a=document.createElement(`p`);a.textContent=l[e];let o=document.createElement(`div`);o.className=`watch-player`;let u=document.createElement(`button`);u.type=`button`,u.textContent=`▶`,u.setAttribute(`aria-label`,`Play demo memory audio`),u.onclick=async()=>{if(_.paused)try{await _.play()}catch{}else _.pause()};let d=document.createElement(`div`);d.className=`watch-wave`,d.setAttribute(`aria-hidden`,`true`);for(let e=0;e<35;e++){let t=document.createElement(`i`);t.style.height=5+Math.sin(e*2.4)**2*25+`px`,d.append(t)}let f=document.createElement(`span`);f.textContent=`demo`,o.append(u,d,f),n.append(r,i,a,o),t.append(n);let p=document.createElement(`button`);p.className=`watch-release`,p.textContent=`⌒  Release to the sky`,p.onclick=()=>{_.pause(),s.replaceChildren()},s.append(t,p)}_.onplay=()=>{s.classList.add(`playing`);let e=s.querySelector(`.watch-player button`);e&&(e.textContent=`Ⅱ`,e.setAttribute(`aria-label`,`Pause demo memory audio`))},_.onpause=_.onended=()=>{s.classList.remove(`playing`);let e=s.querySelector(`.watch-player button`);e&&(e.textContent=`▶`,e.setAttribute(`aria-label`,`Play demo memory audio`))};function x(e){if(!u)return;let t=Math.min(.05,(e-f)/1e3||0);f=e,document.hidden||(e>=p&&(y(),p=e+2400),m=m.filter(n=>(n.x+=n.speed*t,n.x>innerWidth+n.size?(n.n.remove(),!1):(n.n.style.transform=`translate(${n.x}px,${n.y+Math.sin(e*6e-4+n.phase)*12}px)`,!0)))),d=requestAnimationFrame(x)}function S(){if(!(u||n.dataset.sharedDM||n.querySelector(`dialog`)?.open)){u=!0,r.cancelCreation(),n.dataset.memoryWatching=`true`,i.hidden=!1;for(let e=0;e<10;e++)y(!0);b(0),f=performance.now(),p=f+2400,d=requestAnimationFrame(x),i.querySelector(`.watch-back`).focus()}}function C(){u&&(u=!1,cancelAnimationFrame(d),_.pause(),_.currentTime=0,m.forEach(e=>e.n.remove()),m=[],s.replaceChildren(),i.hidden=!0,delete n.dataset.memoryWatching)}i.querySelector(`.watch-back`).onclick=C;function w(e){e.target.closest(`input,textarea,select,button,a,dialog,[contenteditable=true]`)||e.button!==0&&e.button!==2||(g={x:e.clientX,y:e.clientY,id:e.pointerId})}function T(e){if(!g||g.id!==e.pointerId)return;let t=e.clientX-g.x,n=e.clientY-g.y;Math.abs(n)>70&&Math.abs(n)>Math.abs(t)*1.4&&(n<0&&!u?(e.preventDefault(),e.stopImmediatePropagation(),g=null,S()):n>0&&u&&(e.preventDefault(),e.stopImmediatePropagation(),g=null,C()))}let E=()=>{g=null},D=e=>{e.target.closest(`input,textarea,select,dialog,[contenteditable=true]`)||n.querySelector(`dialog`)?.open||(e.key===`ArrowUp`&&!u?(e.preventDefault(),S()):u&&(e.key===`Escape`||e.key===`ArrowDown`)&&(e.preventDefault(),e.stopImmediatePropagation(),C()))};return n.addEventListener(`pointerdown`,w,!0),n.addEventListener(`pointermove`,T,!0),n.addEventListener(`pointerup`,E,!0),n.addEventListener(`pointercancel`,E,!0),n.addEventListener(`keydown`,D,!0),{open:S,close:C,dispose(){C(),_.removeAttribute(`src`),_.load(),i.remove(),a.remove(),n.removeEventListener(`pointerdown`,w,!0),n.removeEventListener(`pointermove`,T,!0),n.removeEventListener(`pointerup`,E,!0),n.removeEventListener(`pointercancel`,E,!0),n.removeEventListener(`keydown`,D,!0)}}}function r(e){return e.startsWith(`video/`)?`video`:e.startsWith(`audio/`)?`audio`:null}function i(e,t,{videoOnly:n=!1}={}){let i=document.createElement(`label`);i.className=`upload`,i.textContent=n?`Choose a video background`:`Choose video or audio`;let a=document.createElement(`input`);return a.type=`file`,a.accept=n?`video/mp4,video/webm`:`video/mp4,video/webm,audio/*`,a.setAttribute(`aria-label`,i.textContent),a.onchange=()=>{let i=a.files?.[0];if(!i)return;let o=r(i.type);if(!o||n&&o!==`video`||i.size>104857600){t(`Choose a supported audio or video file under 100 MB.`),a.value=``;return}let s=URL.createObjectURL(i),c=document.createElement(o);c.preload=`metadata`,o===`video`&&(c.muted=!0,c.playsInline=!0,c.loop=!0);let l=()=>{c.removeEventListener(`loadedmetadata`,d),c.removeEventListener(`error`,u)},u=()=>{l(),URL.revokeObjectURL(s),c.removeAttribute(`src`),c.load(),t(`This browser could not play that file. Try MP4, WebM, MP3 or WAV.`)},d=()=>{l(),e({kind:o,url:s,name:i.name,element:c})};c.addEventListener(`loadedmetadata`,d,{once:!0}),c.addEventListener(`error`,u,{once:!0}),c.src=s},i.append(a),i}function a(e,t,n,r){let i=e.media;if(!i)return;let a=i.element;a.controls=!1,a.removeAttribute(`style`),t.classList.add(`has-bubble-media`),t.classList.toggle(`audio-only`,i.kind===`audio`&&!e.image),a.className=`bubble-media-source`,t.append(a),i.kind===`video`&&(t._bubbleVideo=a);let o=document.createElement(`span`);o.className=`bubble-music-note`,o.textContent=`♫`,o.setAttribute(`aria-hidden`,`true`),t.append(o);let s=document.createElement(`div`);s.className=`bubble-media-controls`;let c=document.createElement(`button`);c.type=`button`;let l=document.createElement(`span`);l.className=`bubble-media-title`,l.textContent=i.name,l.title=i.name;let u=document.createElement(`progress`);u.max=1,u.value=0,u.setAttribute(`aria-label`,`Playback progress`);function d(){c.textContent=a.paused?`▶`:`Ⅱ`,c.setAttribute(`aria-label`,a.paused?`Play bubble media`:`Pause bubble media`),u.value=Number.isFinite(a.duration)&&a.duration>0?a.currentTime/a.duration:0}c.onclick=async()=>{if(a.paused)try{await a.play()}catch{r(`Press play again to start the media.`)}else a.pause();d()};let f=document.createElement(`button`);f.type=`button`,f.textContent=a.muted?`♩`:`♪`,f.setAttribute(`aria-label`,`Toggle bubble media sound`),f.onclick=()=>{a.muted=!a.muted,f.textContent=a.muted?`♩`:`♪`,f.setAttribute(`aria-pressed`,String(!a.muted))},a.onplay=a.onpause=a.ontimeupdate=a.onended=d,a.onerror=()=>r(`That media could not be played.`),s.append(c,f,l,u),t.append(s),d(),i.kind===`video`&&a.play().catch(()=>{})}function o(e){let t=new Map,n=null,r=0;function i(t){e.style.setProperty(`--photo-world-light`,t.light.join(`,`)),e.style.setProperty(`--photo-world-shade`,t.shade.join(`,`))}function a(e){if(e===n)return;n=e;let a=++r;if(t.has(e)){i(t.get(e));return}let o=new Image;o.crossOrigin=`anonymous`,o.onload=()=>{if(a===r)try{let n=document.createElement(`canvas`);n.width=n.height=32;let r=n.getContext(`2d`,{willReadFrequently:!0}),a=innerWidth/innerHeight,s=o.width/o.height,c=s>a?o.height*a:o.width,l=s>a?o.height:o.width/a;r.drawImage(o,(o.width-c)/2,(o.height-l)/2,c,l,0,0,32,32);let u=r.getImageData(0,0,32,32).data,d=[0,0,0],f=[0,0,0],p=0;for(let e=0;e<u.length;e+=4){let t=(u[e]*.2126+u[e+1]*.7152+u[e+2]*.0722)/255,n=.05+t*t;p+=n;for(let t=0;t<3;t++)d[t]+=u[e+t]*n,f[t]+=u[e+t]/1024}let m=d.map(e=>e/p),h=Math.max(30,...m),g={light:m.map(e=>Math.round(65+e/h*155)),shade:f.map(e=>Math.round(e*.32))};t.size>=8&&t.delete(t.keys().next().value),t.set(e,g),i(g)}catch{i({light:[180,190,210],shade:[12,18,30]})}},o.onerror=()=>{a===r&&i({light:[180,190,210],shade:[12,18,30]})},o.src=e}return{update:a,dispose(){r++,t.clear()}}}function s(e){let t,n,r,i=!1,a=!0,o=-1/0,s=new Set,c=document.createElement(`button`);c.type=`button`,c.className=`round bubble-sound-control`;function l(){c.textContent=a?`♪`:`♩`,c.setAttribute(`aria-label`,a?`Mute bubble pop sounds`:`Enable bubble pop sounds`),c.setAttribute(`aria-pressed`,String(a)),c.title=a?`Bubble pop sounds on`:`Bubble pop sounds off`}function u(){if(i||!a)return;let e=window.AudioContext||window.webkitAudioContext;if(e)try{if(!t){t=new e,n=t.createGain(),n.gain.value=.3;let i=t.createDynamicsCompressor();i.threshold.value=-16,i.knee.value=12,i.ratio.value=6,n.connect(i),i.connect(t.destination),r=t.createBuffer(1,Math.ceil(t.sampleRate*.16),t.sampleRate);let a=r.getChannelData(0);for(let e=0;e<a.length;e++)a[e]=Math.random()*2-1}t.state===`suspended`&&t.resume().catch(()=>{})}catch{}}function d(e){if(!a||i||document.hidden||!t||t.state!==`running`)return;let c=t.currentTime;if(c-o<.035||s.size>=6)return;o=c;let l=e.target.getBoundingClientRect().width,u=Math.max(.65,Math.min(1.35,120/Math.max(50,l)))*(.94+Math.random()*.12),d=t.createGain();d.gain.value=1/Math.sqrt(s.size+1),d.connect(n);let f=t.createOscillator(),p=t.createGain();f.type=`sine`,f.frequency.setValueAtTime(720*u,c),f.frequency.exponentialRampToValueAtTime(220*u,c+.045),f.frequency.exponentialRampToValueAtTime(125*u,c+.15),p.gain.setValueAtTime(1e-4,c),p.gain.exponentialRampToValueAtTime(.48,c+.004),p.gain.exponentialRampToValueAtTime(1e-4,c+.18),f.connect(p),p.connect(d);let m=t.createBufferSource(),h=t.createBiquadFilter(),g=t.createGain();m.buffer=r,h.type=`lowpass`,h.frequency.value=1900*u,g.gain.setValueAtTime(.1,c),g.gain.exponentialRampToValueAtTime(1e-4,c+.14),m.connect(h),h.connect(g),g.connect(d);let _={tone:f,splash:m};s.add(_),f.onended=()=>{s.delete(_),f.disconnect(),p.disconnect(),m.disconnect(),h.disconnect(),g.disconnect(),d.disconnect()},f.start(c),f.stop(c+.2),m.start(c),m.stop(c+.16)}let f=()=>{a=!a,a?u():n&&n.gain.cancelScheduledValues(t.currentTime),n&&n.gain.setTargetAtTime(a?.3:0,t.currentTime,.015),l()};return c.addEventListener(`click`,f),l(),e.querySelector(`.header-tools`)?.append(c),e.addEventListener(`pointerdown`,u,{capture:!0,passive:!0}),e.addEventListener(`keydown`,u,!0),e.addEventListener(`bubblepop`,d),{dispose(){i=!0,e.removeEventListener(`pointerdown`,u,!0),e.removeEventListener(`keydown`,u,!0),e.removeEventListener(`bubblepop`,d),c.removeEventListener(`click`,f),c.remove();for(let e of s)e.tone.stop(),e.splash.stop();s.clear(),t?.close().catch(()=>{})}}}var c=`bubbles.design`;function l({document:e=globalThis.document,storage:t}={}){try{t??=globalThis.localStorage}catch{}let n=`original`;try{let e=t?.getItem(c);[`pastel`,`developmental`].includes(e)&&(n=e)}catch{}let r=e.createElement(`button`);r.type=`button`,r.className=`design-switch`,r.setAttribute(`role`,`button`),r.setAttribute(`aria-label`,`Change design`);function i(){n===`original`?delete e.documentElement.dataset.design:e.documentElement.dataset.design=n,r.setAttribute(`aria-label`,`Design: `+n+`. Click to switch to `+{original:`Pastel`,pastel:`Developmental`,developmental:`Original`}[n]),r.textContent=`◇ `+n[0].toUpperCase()+n.slice(1),r.title=`Original → Pastel → Developmental. Developmental is an independent copy of Original.`}function a(){n={original:`pastel`,pastel:`developmental`,developmental:`original`}[n],i();try{t?.setItem(c,n)}catch{}}return r.addEventListener(`click`,a),e.body.append(r),i(),{dispose(){r.removeEventListener(`click`,a),r.remove()}}}function u(e){let t=matchMedia(`(prefers-reduced-motion: reduce)`),n=document.createElement(`div`);n.className=`fantasy-effects`,n.setAttribute(`aria-hidden`,`true`),document.body.append(n);let r=new Set,i=new AbortController,a=new WeakMap,o=new WeakMap,s=`button:not(:disabled),summary,.search-result`,c=`.dm-orb,.memory-bubble,.reply-glass,.dm-scene-message,.social-chat-bubble,.social-memory-shell,.social-media-bubble`,l=new Map,u=null,d=0,f=null,p=()=>document.documentElement.dataset.design===`pastel`&&!t.matches&&!document.body.classList.contains(`still`)&&!document.hidden;function m(e,t,n=420){if(!p())return;let i=e.animate(t,{duration:n,easing:`cubic-bezier(.18,.8,.25,1)`});return r.add(i),i.finished.then(()=>r.delete(i),()=>r.delete(i)),i}function h(){u?.style.removeProperty(`--fantasy-x`),u?.style.removeProperty(`--fantasy-y`),u=null}function g(){cancelAnimationFrame(d),d=0,f=null,h();for(let e of r)e.cancel();r.clear(),n.replaceChildren(),l.clear()}function _(e,t,r=4){if(!(!p()||n.children.length>24))for(let i=0;i<r;i++){let a=document.createElement(`i`);a.className=`fantasy-bead`,a.style.left=`${e}px`,a.style.top=`${t}px`;let o=9+i*4;a.style.width=a.style.height=`${o}px`,n.append(a);let s=(i-(r-1)/2)*23;m(a,[{opacity:0,transform:`translate(-50%,-50%) scale(.4)`},{opacity:.8,transform:`translate(calc(-50% + ${s/3}px),-70%) scale(1)`,offset:.2},{opacity:0,transform:`translate(calc(-50% + ${s}px),-${90+i*18}px) scale(.65)`}],950+i*100)?.finished.then(()=>a.remove(),()=>a.remove())}}e.addEventListener(`pointermove`,e=>{if(!p()||e.pointerType===`touch`)return;let t=e.target.closest(s+`,`+c);if(!t){h();return}f={target:t,x:e.clientX,y:e.clientY},!d&&(d=requestAnimationFrame(()=>{if(d=0,!p()||!f?.target.isConnected)return;let{target:e,x:t,y:n}=f;u!==e&&h(),u=e;let r=e.getBoundingClientRect();e.style.setProperty(`--fantasy-x`,`${Math.max(0,Math.min(100,(t-r.left)/r.width*100))}%`),e.style.setProperty(`--fantasy-y`,`${Math.max(0,Math.min(100,(n-r.top)/r.height*100))}%`)}))},{signal:i.signal}),e.addEventListener(`pointerleave`,h,{signal:i.signal}),e.addEventListener(`pointerdown`,e=>{if(!p()||e.button!==0||e.target.closest(`input,textarea,select,audio,video`))return;let t=e.target.closest(c);if(!t)return;l.get(t)?.cancel();let n=m(t,[{scale:`1 1`},{scale:`.975 1.025`,offset:.18},{scale:`1.018 .982`,offset:.45},{scale:`.995 1.005`,offset:.72},{scale:`1 1`}],560);n&&(l.set(t,n),n.finished.then(()=>{l.get(t)===n&&l.delete(t)},()=>{l.get(t)===n&&l.delete(t)}))},{capture:!0,signal:i.signal}),e.addEventListener(`click`,e=>{if(!p()||n.children.length>24)return;let t=e.target.closest(s);if(!t||t.matches(`input`))return;let r=t.getBoundingClientRect(),i=e.detail?e.clientX:r.left+r.width/2,a=e.detail?e.clientY:r.top+r.height/2,o=document.createElement(`i`);o.className=`fantasy-ripple`,o.style.left=`${i}px`,o.style.top=`${a}px`,n.append(o),m(o,[{opacity:.65,transform:`translate(-50%,-50%) scale(.2)`},{opacity:0,transform:`translate(-50%,-50%) scale(2.8)`}],520)?.finished.then(()=>o.remove(),()=>o.remove()),t.matches(`.chip,[aria-pressed]`)&&_(i,a,3)},{capture:!0,signal:i.signal}),e.addEventListener(`submit`,e=>{let t=e.target;if(!p()||!t.matches(`.reply-form,.dm-scene-composer,.compose-form`))return;let n=t.querySelector(`input:not([type=file]),textarea`);if(!n?.value.trim())return;let r=t.getBoundingClientRect();queueMicrotask(()=>{(!n.value||t.matches(`.compose-form`)&&!t.closest(`dialog`)?.open)&&_(r.left+r.width/2,Math.min(innerHeight-40,r.top),5)})},{capture:!0,signal:i.signal});function v(){for(let t of e.querySelectorAll(`.social-chat-log,.dm-scene-log`)){let e=[...t.querySelectorAll(`.social-chat-bubble,.dm-scene-message`)],n=a.get(t),r=new Set(e.map(e=>e.dataset.messageId||e.textContent));if(n&&p())for(let t of e)t.getClientRects().length&&!n.has(t.dataset.messageId||t.textContent)&&m(t,[{opacity:.2,translate:`0 14px`,scale:`.95`},{opacity:1,translate:`0 0`,scale:`1`}]);a.set(t,r)}for(let t of e.querySelectorAll(`.social-form>.social-status`)){let e=t.textContent;if(e===`Saved.`&&o.get(t)!==e&&p()&&t.getClientRects().length){let e=t.getBoundingClientRect();_(e.left+Math.min(90,e.width/2),e.top,5)}o.set(t,e)}}let y=new MutationObserver(e=>{if(v(),!p()){g();return}for(let t of e)t.type===`attributes`&&t.attributeName===`hidden`&&!t.target.hidden&&t.target.matches(`.social-view,.social-workspace`)&&m(t.target,[{opacity:.4,translate:`0 10px`},{opacity:1,translate:`0 0`}],320)});y.observe(e,{subtree:!0,childList:!0,characterData:!0,attributes:!0,attributeFilter:[`hidden`]});let b=new MutationObserver(()=>{p()||g()});b.observe(document.documentElement,{attributes:!0,attributeFilter:[`data-design`]}),b.observe(document.body,{attributes:!0,attributeFilter:[`class`]});let x=()=>{p()||g()};return t.addEventListener(`change`,x),document.addEventListener(`visibilitychange`,x,{signal:i.signal}),v(),{dispose(){g(),y.disconnect(),b.disconnect(),i.abort(),t.removeEventListener(`change`,x),n.remove()}}}function d(e){let t=u(e),n=document.createElement(`nav`);n.className=`alternative-navigation`,n.setAttribute(`aria-label`,`Explore Bubbles`);let r=(e,t)=>{let r=document.createElement(`button`);return r.type=`button`,r.textContent=e,r.addEventListener(`click`,t),n.append(r),r},i=t=>e.querySelector(`[aria-label="${t}"]`)?.click(),a=r(`⌂ My world`,()=>{e.dataset.sharedDM?e.querySelector(`.dm-back`)?.click():e.dispatchEvent(new KeyboardEvent(`keydown`,{key:`ArrowLeft`,bubbles:!0}))}),o=r(`◌ Shared worlds`,()=>i(`Your shared conversation worlds`)),s=r(`⌕ Find a memory`,()=>i(`Search public memories`));s.className=`alternative-search`,r(`＋ Leave a memory`,()=>e.querySelector(`#create`)?.click()),e.append(n);let c=e.querySelector(`#panel`),l=e.querySelector(`#panel-body`),d=document.createElement(`p`);d.className=`alternative-search-guide`,d.textContent=`Search the words inside publicly shared memories. Select a result to open it; private memories stay private.`;function f(){let t=document.documentElement.dataset.design===`pastel`;t||(v.forEach(e=>e.cancel()),g.forEach(_)),n.hidden=!t,n.inert=!t||!!e.dataset.sharedDM;let r=e.dataset.socialFace===`picker`;a.setAttribute(`aria-current`,r?`false`:`page`),o.setAttribute(`aria-current`,r?`page`:`false`);let i=!!l.querySelector(`.search-results`);c.classList.toggle(`alternative-search-panel`,t&&i),t&&i&&!d.isConnected?l.prepend(d):(!t||!i)&&d.isConnected&&d.remove();for(let n of e.querySelectorAll(`.alternative-world-help`))n.hidden=!t}let p=document.createElement(`p`);p.className=`alternative-world-help`,p.textContent=`Choose a shared place to enter its conversation. Return with the back arrow or Escape.`,e.querySelector(`.picker-heading`).append(p);let m=new AbortController,h=matchMedia(`(prefers-reduced-motion: reduce)`),g=[...e.querySelectorAll(`.dm-world-grid .dm-orb`)];function _(e){e.style.removeProperty(`--preview-x`),e.style.removeProperty(`--preview-y`)}for(let e of g)e.addEventListener(`pointermove`,t=>{if(document.documentElement.dataset.design!==`pastel`||h.matches||t.pointerType===`touch`)return;let n=e.getBoundingClientRect();e.style.setProperty(`--preview-x`,`${(t.clientY-n.top-n.height/2)/n.height*-10}deg`),e.style.setProperty(`--preview-y`,`${(t.clientX-n.left-n.width/2)/n.width*10}deg`)},{signal:m.signal}),e.addEventListener(`pointerleave`,()=>_(e),{signal:m.signal}),e.addEventListener(`click`,()=>{if(document.documentElement.dataset.design!==`pastel`)return;for(let t of g)t.classList.toggle(`alternative-selected`,t===e);if(h.matches)return;let t=e.animate([{transform:`perspective(800px) translateZ(0)`,opacity:1},{transform:`perspective(800px) translateZ(80px)`,opacity:.25}],{duration:420,easing:`cubic-bezier(.2,.7,.2,1)`});v.add(t),t.finished.then(()=>v.delete(t),()=>v.delete(t))},{signal:m.signal});let v=new Set,y=new MutationObserver(f);return y.observe(document.documentElement,{attributes:!0,attributeFilter:[`data-design`]}),y.observe(e,{attributes:!0,attributeFilter:[`data-social-face`,`data-shared-d-m`]}),y.observe(l,{childList:!0}),f(),{dispose(){t.dispose(),y.disconnect(),m.abort(),v.forEach(e=>e.cancel()),g.forEach(_),n.remove(),p.remove(),d.remove(),c.classList.remove(`alternative-search-panel`)}}}function f(e,{garden:t,audio:n,toast:r,open:i,getServer:a}){let o=new AbortController,s={signal:o.signal},c=(e,t,n)=>{let r=document.createElement(e);return r.className=t,n!==void 0&&(r.textContent=n),r},l=(e,t)=>{let n=c(`button`,``,e);return n.type=`button`,n.addEventListener(`click`,t,s),n},u=c(`section`,`alternative-world-dock`);u.setAttribute(`aria-label`,`Your world views`);let d=c(`div`,`alternative-view-tabs`);d.setAttribute(`role`,`group`),d.setAttribute(`aria-label`,`View your world`);let f=!1;function p(t){f=t,e.dataset.alternativeView=t?`bubbles`:`memories`,j()}let m=l(`Memories`,()=>p(!1)),h=l(`◌ Bubble garden`,()=>p(!0));d.append(m,h);let g=l(`＋ Hold to grow`,()=>{if(v){v=!1;return}y(),b()});g.setAttribute(`aria-label`,`Create a memory bubble. Hold to grow, release to keep.`),g.title=`Hold with a pointer or Space to grow a bubble. Release to keep it.`;let _=!1,v=!1;function y(){_||e.dataset.sharedDM||e.dataset.socialFace===`picker`||(p(!0),t.startCreation({target:e,button:0,preventDefault(){},clientX:innerWidth/2,clientY:Math.max(240,innerHeight*.48)}),_=!0,g.textContent=`Release to keep`,g.setAttribute(`aria-pressed`,`true`))}function b(){_&&(t.finishCreation(),_=!1,g.textContent=`＋ Hold to grow`,g.setAttribute(`aria-pressed`,`false`))}g.addEventListener(`pointerdown`,e=>{e.button===0&&(e.preventDefault(),v=!0,g.setPointerCapture(e.pointerId),y())},s),g.addEventListener(`pointerup`,b,s),g.addEventListener(`pointercancel`,()=>{t.cancelCreation(),_=!1,g.textContent=`＋ Hold to grow`,g.setAttribute(`aria-pressed`,`false`)},s),g.addEventListener(`keydown`,e=>{[`Space`,`Enter`].includes(e.code)&&(e.preventDefault(),e.repeat||(v=!0,y()))},s),g.addEventListener(`keyup`,e=>{[`Space`,`Enter`].includes(e.code)&&(e.preventDefault(),b(),v=!1)},s);let x=c(`p`,`alternative-garden-guide`,`Tap a bubble to write. Drag its edge to move it; hold to pop. Escape finishes editing.`);u.append(d,g,x),e.append(u);let S=c(`div`,`alternative-world-status`);S.setAttribute(`role`,`status`),S.setAttribute(`aria-live`,`polite`),e.append(S);let C=c(`span`,`alternative-preview-notice`,`Local preview · changes stay in this page`);e.append(C);let w=c(`div`,`alternative-media-tools`),T=l(`♫ Playlist`,()=>{let t=a();i(`${t.name} · playlist`);let o=e.querySelector(`#panel-body`);o.append(c(`p`,`muted`,`Local playlist titles. Only the bundled “Lake after midnight” track has playable audio in this preview.`));let u=c(`ol`,`alternative-track-list`);for(let e of t.playlist)u.append(c(`li`,``,e));t.playlist.length||u.append(c(`li`,``,`No playlist titles yet.`));let d=l(n.paused?`Play Lake after midnight`:`Pause audio`,async()=>{if(n.paused)try{await n.play()}catch{r(`Audio could not play. Try again from the music control.`)}else n.pause();d.textContent=n.paused?`Play Lake after midnight`:`Pause audio`});d.className=`primary`;let f=l(n.muted?`Unmute audio`:`Mute audio`,()=>{n.muted=!n.muted,f.textContent=n.muted?`Unmute audio`:`Mute audio`,f.setAttribute(`aria-pressed`,String(n.muted))});f.className=`secondary`,f.setAttribute(`aria-pressed`,String(n.muted));let p=c(`input`,``);p.type=`range`,p.min=`0`,p.max=`100`,p.step=`5`,p.value=String(Math.round(n.volume*100)),p.setAttribute(`aria-label`,`Playlist volume`),p.addEventListener(`input`,()=>{n.volume=Number(p.value)/100,D.value=p.value,O()},s),o.append(u,d,f,c(`span`,`alternative-field-caption`,`Volume`),p)}),E=l(`Mute audio`,()=>{n.muted=!n.muted,O()});E.className=`alternative-mute`;let D=c(`input`,`alternative-volume`);D.type=`range`,D.min=`0`,D.max=`100`,D.step=`5`,D.value=String(Math.round(n.volume*100)),D.setAttribute(`aria-label`,`Atmosphere volume`),D.addEventListener(`input`,()=>{n.volume=Number(D.value)/100,O()},s),w.append(T,E,D),e.querySelector(`footer`).prepend(w);function O(){E.textContent=n.muted?`Unmute audio`:`Mute audio`,E.setAttribute(`aria-pressed`,String(n.muted)),D.setAttribute(`aria-valuetext`,`${D.value}%${n.muted?`, muted`:``}`)}n.addEventListener(`volumechange`,O,s),O();let k=c(`div`,`alternative-ambient-bubbles`);k.setAttribute(`aria-hidden`,`true`);for(let e=0;e<3;e++)k.append(c(`i`,`alternative-ambient-bubble`));e.append(k);let A=e.querySelector(`main`);e.addEventListener(`submit`,e=>{document.documentElement.dataset.design===`pastel`&&e.target.matches(`.compose-form`)&&e.target.querySelector(`textarea`)?.value.trim()&&p(!1)},{...s,capture:!0}),e.addEventListener(`click`,e=>{document.documentElement.dataset.design===`pastel`&&e.target.closest(`button`)?.textContent===`your saved moments`&&p(!1)},{...s,capture:!0});function j(){let t=document.documentElement.dataset.design===`pastel`,n=[`entering`,`leaving`].includes(e.dataset.sharedDM),r=e.dataset.socialFace!==`picker`&&!e.dataset.sharedDM;(!t||!r)&&b(),u.hidden=!t||!r,u.inert=!t||!r,A.inert=t&&f,m.setAttribute(`aria-pressed`,String(!f)),h.setAttribute(`aria-pressed`,String(f)),x.hidden=!f,S.hidden=!t||!n;let i=e.dataset.sharedDM===`leaving`?`Returning to your shared worlds…`:`Entering your shared world…`;S.textContent!==i&&(S.textContent=i),C.hidden=!t||!!e.dataset.sharedDM,w.hidden=!t,k.hidden=!t||!r}let M=new MutationObserver(j);return M.observe(document.documentElement,{attributes:!0,attributeFilter:[`data-design`]}),M.observe(e,{attributes:!0,attributeFilter:[`data-social-face`,`data-shared-d-m`]}),window.addEventListener(`blur`,b,s),j(),{dispose(){b(),o.abort(),M.disconnect(),A.inert=!1,delete e.dataset.alternativeView,u.remove(),S.remove(),C.remove(),w.remove(),k.remove()}}}function p(e,{toast:t}){let n=e.querySelector(`#panel-body`),r=new WeakSet,i=new WeakSet,a=new AbortController,o={signal:a.signal},s=()=>document.documentElement.dataset.design===`pastel`,c=(e,t,n)=>{let r=document.createElement(e);return r.className=t,n!==void 0&&(r.textContent=n),r};function l(){for(let e of n.querySelectorAll(`input:not([type=file]),textarea,select`)){if(r.has(e)||e.type===`hidden`||e.type===`range`)continue;let t=e.getAttribute(`aria-label`);if(!t)continue;r.add(e);let n=c(`span`,`alternative-field-caption`,t);if(n.setAttribute(`aria-hidden`,`true`),e.before(n),e.required&&e.tagName===`TEXTAREA`){let t=c(`p`,`alternative-form-error`,`Write a few words before sharing this memory.`);t.hidden=!0,t.setAttribute(`role`,`alert`),e.after(t),e.addEventListener(`input`,()=>{e.value.trim()&&(t.hidden=!0)},o)}if(e.maxLength>0){let t=c(`small`,`alternative-field-count`),n=()=>{t.textContent=`${e.value.length} / ${e.maxLength}`};e.after(t),e.addEventListener(`input`,n,o),n()}}let e=n.querySelector(`[aria-label="Search public memories"]`);if(!e||i.has(e))return;i.add(e);let t=c(`div`,`alternative-search-tools`),a=c(`p`,`alternative-search-status`);a.setAttribute(`role`,`status`),a.setAttribute(`aria-live`,`polite`);let s=c(`button`,``,`Clear search`);s.type=`button`,s.addEventListener(`click`,()=>{e.value=``,e.dispatchEvent(new Event(`input`,{bubbles:!0})),e.focus()},o),t.append(s),e.after(t),t.after(a);function l(){let t=e.value.trim();s.disabled=!t;let r=n.querySelectorAll(`.search-result`).length;a.textContent=t?r?`${r} public ${r===1?`memory`:`memories`} found`:`No matches. Try a different word.`:`Look for a word or a feeling in public memories.`}e.addEventListener(`input`,l,o),l()}n.addEventListener(`submit`,e=>{if(!s())return;let n=e.target.querySelector(`textarea[required]`);if(n&&!n.value.trim()){e.preventDefault(),e.stopImmediatePropagation();let r=e.target.querySelector(`.alternative-form-error`);r?r.hidden=!1:t(`Write a few words before sharing this memory.`),n.focus()}},{...o,capture:!0});let u=new MutationObserver(l);return u.observe(n,{childList:!0}),l(),{dispose(){a.abort(),u.disconnect(),n.querySelectorAll(`.alternative-field-caption,.alternative-field-count,.alternative-search-tools,.alternative-search-status,.alternative-form-error`).forEach(e=>e.remove())}}}function m(e){let t=new Map,n=e.querySelector(`#feed`),r=new AbortController,i=e=>e.closest(`.memory-wrap`)?.querySelector(`[data-memory-id]`)?.dataset.memoryId;function a(){if(document.documentElement.dataset.design===`pastel`)for(let e of n.querySelectorAll(`.reply-form input`)){let n=i(e);n&&t.set(n,e.value)}}e.addEventListener(`click`,a,{capture:!0,signal:r.signal}),e.addEventListener(`submit`,e=>{if(document.documentElement.dataset.design!==`pastel`||!e.target.matches(`.reply-form`))return;let n=e.target.querySelector(`input`);n.value.trim()&&t.delete(i(n))},{capture:!0,signal:r.signal});let o=new MutationObserver(()=>{if(document.documentElement.dataset.design!==`pastel`){t.clear();return}for(let e of n.querySelectorAll(`.reply-form input`)){let n=i(e);t.has(n)&&(e.value=t.get(n))}});return o.observe(n,{childList:!0}),{dispose(){a(),o.disconnect(),r.abort(),t.clear()}}}var h=class extends Error{constructor(e,t=0,n=`NETWORK_ERROR`){super(e),this.status=t,this.code=n}};function g({base:e,fetcher:t=globalThis.fetch,EventStream:n=globalThis.EventSource}={}){let r=new URL(`/api/v1`,globalThis.location?.origin||`http://127.0.0.1:5173`);r.port=`3001`;let i=new URL(e||r.href);if(![`http:`,`https:`].includes(i.protocol)||i.username||i.password||i.search||i.hash)throw Error(`Use an API URL without credentials, query parameters or fragments.`);let a=i.href.replace(/\/$/,``);async function o(e,{method:n=`GET`,body:r,signal:o}={}){if(!e.startsWith(`/`)||e.startsWith(`//`))throw Error(`API paths must stay within the configured backend.`);let s=new URL(a+e);if(s.origin!==i.origin||!s.pathname.startsWith(i.pathname.replace(/\/$/,``)+`/`))throw Error(`API paths must stay within the configured backend.`);let c=typeof FormData<`u`&&r instanceof FormData,l=n===`GET`?{}:{"X-Bubbles-Client":`1`,...!c&&{"Content-Type":`application/json`}},u;try{u=await t(s.href,{method:n,headers:l,credentials:`include`,cache:`no-store`,signal:o,body:n===`GET`?void 0:c?r:JSON.stringify(r??{})})}catch(e){throw e.name===`AbortError`?e:new h(`Cannot reach the backend. Check that it is running and allows this frontend origin.`)}if(u.status===204)return null;let d=await u.json().catch(()=>null);if(!u.ok)throw new h(d?.error?.message||`Request failed (${u.status}).`,u.status,d?.error?.code);if(!d)throw new h(`The backend returned an invalid response.`,u.status,`INVALID_RESPONSE`);return d}return{request:o,base:a,mediaUrl(e){return a+`/media/`+encodeURIComponent(e)},subscribe(e,t){let r=new n(a+`/conversations/`+encodeURIComponent(e)+`/events`,{withCredentials:!0});for(let[e,n]of Object.entries(t))r.addEventListener(e,n);return()=>r.close()}}}function _(e,t,n){let r=document.createElement(e);return t&&(r.className=t),n!==void 0&&(r.textContent=n),r}function v(e,t,n=`social-button`){let r=_(`button`,n,e);return r.type=`button`,r.onclick=t,r}function y(e,{type:t=`text`,value:n=``,required:r=!0,maxLength:i,options:a}={}){let o=_(`label`,`social-field`);o.append(_(`span`,``,e));let s=_(t===`textarea`?`textarea`:a?`select`:`input`);if(s.tagName===`INPUT`&&(s.type=t),a)for(let[e,t]of a){let n=_(`option`,``,t);n.value=e,s.append(n)}return s.value=a?n||a[0]?.[0]||``:n,s.required=r,i&&(s.maxLength=i),s.setAttribute(`aria-label`,e),o.append(s),{wrap:o,input:s}}function b(e,t,n){let r=_(`form`,`social-form`),i={};for(let[t,n,a]of e){let{wrap:e,input:o}=y(n,a);i[t]=o,r.append(e)}let a=_(`button`,`social-button primary`,t);a.type=`submit`;let o=_(`p`,`social-status`);return o.setAttribute(`role`,`status`),r.append(a,o),r.onsubmit=async e=>{if(e.preventDefault(),!a.disabled){a.disabled=!0,o.textContent=`Saving…`;try{await n(Object.fromEntries(Object.entries(i).map(([e,t])=>[e,t.value])),i),o.textContent=`Saved.`}catch(e){e.name!==`AbortError`&&(o.textContent=e.message)}finally{a.disabled=!1;for(let e of Object.values(i))e.type===`password`&&(e.value=``)}}},r}function x({restoreButton:e,announce:t,reducedMotion:n=()=>matchMedia(`(prefers-reduced-motion: reduce)`).matches}){let r=new Set,i=new Map,a=new Map;function o(e,t,r){if(a.get(e)?.cancel(),n()||!e.animate){r?.();return}let i=e.animate(t,{duration:280,easing:`cubic-bezier(.2,.8,.2,1)`});a.set(e,i),i.finished.then(()=>{a.get(e)===i&&(a.delete(e),r?.())}).catch(()=>{})}function s(n,s){n.dataset.livingBubble=s,n.hidden=r.has(s),i.has(s)||i.set(s,new Set);for(let e of i.get(s))e.isConnected||(a.get(e)?.cancel(),a.delete(e),i.get(s).delete(e));return i.get(s).add(n),()=>{if(!r.has(s)){r.add(s),e.hidden=!1;for(let e of i.get(s)){for(let t of e.querySelectorAll(`audio,video`))t.pause();o(e,[{opacity:1,scale:`1`},{opacity:.7,scale:`1.06`,offset:.35},{opacity:0,scale:`.12`}],()=>{e.hidden=!0})}t(`Bubble popped from this view. Its content is safe. Use Restore to bring it back.`)}}}function c(){let n=[...r];r.clear(),e.hidden=!0;for(let e of n)for(let t of i.get(e)||[])a.get(t)?.cancel(),a.delete(t),t.hidden=!1,o(t,[{opacity:0,scale:`.65`},{opacity:1,scale:`1`}]);t(`Your bubbles are restored. Saved content was never deleted.`)}function l(){for(let e of a.values())e.cancel();a.clear(),r.clear(),i.clear(),e.hidden=!0}return{register:s,restore:c,clear:l,isPopped:e=>r.has(e)}}function S(e){let t=g({base:void 0}),n=_(`section`,`social-workspace`);n.hidden=!0,n.setAttribute(`aria-label`,`Connected Bubbles universe`);let r=_(`div`,`social-heading`),i=_(`h1`,``,`Your little universe`),a=_(`p`,`social-status`);a.setAttribute(`role`,`status`);let o=_(`nav`,`social-tabs`);o.setAttribute(`aria-label`,`Connected universe`);let s=_(`div`,`social-content`),c=v(`Restore popped bubbles`,()=>{l.restore(),u()});c.hidden=!0;let l=x({restoreButton:c,announce:e=>{a.textContent=e}});function u(){let e=E.get(`Discover`);if(!e)return;let t=e.querySelector(`input`).value.trim().toLowerCase();for(let n of e.querySelectorAll(`.social-orbit`))n.hidden=l.isPopped(`bubble:`+n.dataset.socialBubble)||!n.textContent.toLowerCase().includes(t)}r.append(i,c,v(`Back to the garden`,()=>j(!1))),n.append(r,a,o,s),e.append(n);let d=v(`✧ Your universe`,()=>{j(!0),m||ee()},`social-launch`);e.append(d);let f=null,p=!1,m=!1,h=!1,y=0,S=null,C=null,w=!1,T=new AbortController,E=new Map,D=new Map,O=new Map;function k(){y++,T.abort(),T=new AbortController,S?.(),S=null;for(let e of n.querySelectorAll(`audio,video`))e.pause(),e.removeAttribute(`src`),e.load();l.clear(),E.clear(),D.clear(),O.clear(),s.replaceChildren(),o.replaceChildren(),f=null}async function A(e,n){let r=y;try{let i=await t.request(e,{...n,signal:T.signal});if(r!==y||h)throw new DOMException(`Account changed`,`AbortError`);return i}catch(e){throw r===y&&e.code===`UNAUTHENTICATED`&&(k(),te(),a.textContent=`Your session ended. Sign in to continue.`),e}}function j(e){p=e,M()}function M(){let t=p&&document.documentElement.dataset.design===`pastel`,r=!n.hidden;if(n.hidden=!t,n.inert=!t,e.classList.toggle(`connected-active`,t),d.hidden=document.documentElement.dataset.design!==`pastel`,t)r||O.get(C)?.();else{S?.(),S=null;for(let e of n.querySelectorAll(`audio,video`))e.pause()}}async function N(e){let t=y;a.textContent=`Loading…`;try{await e(),t===y&&!h&&(a.textContent=f?`Signed in as ${f.username} · saved in MySQL`:`Sign in to your Bubbles account.`)}catch(e){t===y&&!h&&e.name!==`AbortError`&&(a.textContent=e.message)}}function P(e,t){if(S?.(),S=null,C=e,!E.has(e)){let n=_(`section`,`social-view`);n.setAttribute(`aria-label`,e),E.set(e,n),s.append(n),t(n)}for(let[t,n]of E)n.hidden=t!==e;for(let[t,n]of D)n.setAttribute(`aria-current`,t===e?`page`:`false`);n.hidden||O.get(e)?.()}function F(e,t){let n=v(e,()=>P(e,t));o.append(n),D.set(e,n)}async function ee(){m=!0,await N(async()=>{await A(`/ready`);try{f=(await A(`/auth/me`)).user,ne()}catch(e){if(e.code!==`UNAUTHENTICATED`)throw e;te(),a.textContent=`Sign in to your Bubbles account.`}}),!f&&!s.children.length&&te()}function te(){s.replaceChildren(),o.replaceChildren(),E.clear(),D.clear();let e=_(`div`,`social-auth`);async function t(e,t){if(w)throw Error(`Wait for the current sign-in request to finish.`);w=!0;try{f=(await A(e,{method:`POST`,body:t})).user,ne(),a.textContent=`Welcome, ${f.displayName}.`}finally{w=!1}}let n=b([[`email`,`Bubbles account email`,{type:`email`,maxLength:254}],[`password`,`Bubbles password`,{type:`password`,maxLength:128}]],`Sign in`,e=>t(`/auth/login`,e)),r=b([[`username`,`Choose a username`,{maxLength:30}],[`email`,`Email`,{type:`email`,maxLength:254}],[`password`,`New Bubbles password (15–128 characters)`,{type:`password`,maxLength:128}]],`Create account`,async e=>{await t(`/auth/register`,e)});e.append(_(`p`,`social-note`,`This is your Bubbles account, separate from your email-provider password. Enter passwords here locally; they are never saved in browser storage.`),n);let i=_(`details`);i.append(_(`summary`,``,`New here? Create your account`),r),e.append(i),e.append(v(`Retry connection`,()=>ee())),s.append(e)}function ne(){s.replaceChildren(),o.replaceChildren(),E.clear(),D.clear(),F(`My bubbles`,ae),F(`Discover`,oe),F(`Messages`,de),F(`Communities`,pe),F(`Invitations`,le),F(`My profile`,ue),F(`Coming next`,he),o.append(v(`Sign out`,()=>N(async()=>{await A(`/auth/logout`,{method:`POST`}),k(),te(),a.textContent=`Signed out. Your saved memories remain in MySQL.`}))),P(`My bubbles`,ae)}function re(e,t,n,r=`before`){let i=_(`div`,`social-grid`),a=null,o=!1,s=!1,c=v(`Load more`,()=>u(!1)),l=v(`Refresh`,()=>u(!0));e.append(l,i,c);async function u(e){if(o){s||=e;return}o=!0,c.disabled=l.disabled=!0,await N(async()=>{let o;try{o=await A(t+(t.includes(`?`)?`&`:`?`)+`limit=20`+(!e&&a!==null?`&`+r+`=`+encodeURIComponent(a):``))}catch(e){throw[403,404].includes(e.status)&&i.replaceChildren(_(`p`,`social-empty`,`This content is no longer accessible.`)),e}e&&i.replaceChildren();for(let e of o.data)i.append(n(e));i.children.length||i.append(_(`p`,`social-empty`,`Nothing here yet. Create something, or accept an invitation.`)),a=o.nextCursor,c.hidden=a===null}),o=!1,c.disabled=l.disabled=!1,s&&(s=!1,await u(!0))}return u(!0),()=>u(!0)}function ie(e){let t=_(`article`,`social-orbit`);t.dataset.socialBubble=e.id;let n=l.register(t,`bubble:`+e.id);return t.append(v(e.title,()=>se(e),`social-orb`),_(`p`,`social-note`,e.visibility+(e.role?` · `+e.role:``)),v(`Pop from this view`,n)),t}function ae(e){let t=b([[`title`,`Name your bubble`,{maxLength:150}],[`visibility`,`Bubble privacy`,{options:[[`private`,`Private · invited contributors`],[`public`,`Public · explicitly shared memories only`]]}]],`Create bubble`,async e=>{let t=await A(`/bubbles`,{method:`POST`,body:e});await n(),se(t.bubble)});e.append(t);let n=re(e,`/bubbles`,ie)}function oe(e){e.append(_(`p`,`social-note`,`Only explicitly public bubbles appear. Opening a profile never lists that person’s memories.`));let t=_(`input`);t.placeholder=`Filter public bubbles loaded here…`,t.setAttribute(`aria-label`,`Filter loaded public bubbles`),e.append(t),re(e,`/discovery/bubbles`,ie),t.oninput=u,e.append(_(`p`,`social-note`,`Global people/community search needs a search API. This filter searches only the public bubbles loaded on this page.`))}function se(e){P(`Bubble ${e.id}`,t=>{t.append(_(`h2`,``,e.title),_(`p`,`social-note`,e.description||`A shared place for memories.`),v(`Back to my bubbles`,()=>P(`My bubbles`,ae)));let n;e.role&&t.append(b([[`body`,`Your memory`,{type:`textarea`,maxLength:1e4}],[`visibility`,`Memory privacy`,{options:[[`private`,`Only me`],[`bubble`,`Bubble members`],...e.visibility===`public`?[[`public`,`Public`]]:[]]}]],`Keep this memory`,async(t,r)=>{await A(`/bubbles/${e.id}/posts`,{method:`POST`,body:t}),r.body.value=``,await n()})),e.role===`admin`&&t.append(b([[`username`,`Invite an existing username`,{maxLength:30}]],`Invite contributor`,t=>A(`/bubbles/${e.id}/invitations`,{method:`POST`,body:t}))),n=re(t,`/bubbles/${e.id}/posts`,e=>I(e,n))})}function I(e,n){let r=_(`article`,`social-memory social-living-memory`),i=l.register(r,`post:`+e.id),o=_(`details`,`social-memory-shell`),s=_(`summary`,`social-memory-preview`);s.append(_(`span`,`social-memory-symbol`,`◌`),_(`span`,`social-memory-excerpt`,e.body.length>130?e.body.slice(0,130)+`…`:e.body),_(`span`,`social-note`,`Open memory`)),s.onpointerdown=e=>e.stopPropagation(),s.onclick=e=>{e.preventDefault(),e.stopPropagation(),o.open=!o.open,s.querySelector(`.social-note`).textContent=o.open?`Close memory`:`Open memory`};let c=_(`p`,`social-memory-text`,e.body),u=_(`div`,`social-attachments`);o.append(s,c,u),r.append(o,_(`small`,`social-note`,`${e.visibility} · ${new Date(e.createdAt).toLocaleString()}`)),o.ontoggle=()=>{if(!o.open)for(let e of u.querySelectorAll(`audio,video`))e.pause()},N(async()=>{let n=await A(`/posts/${e.id}/media`);for(let e of n.data){let r=_(e.mediaType===`image`?`img`:e.mediaType);r.src=t.mediaUrl(e.id),e.mediaType===`image`?(r.alt=`Memory attachment`,r.loading=`lazy`):(r.controls=!0,r.preload=`none`),r.onerror=()=>a.textContent=`This attachment is unavailable or access has changed.`;let i=_(`figure`,`social-media-bubble`);i.append(_(`figcaption`,`social-note`,e.mediaType===`audio`?`♫ Audio · music or voice note`:e.mediaType===`video`?`▷ Video memory`:`◌ Photo memory`),r),u.append(i),s.querySelector(`.social-memory-symbol`).textContent=n.data.some(e=>e.mediaType===`video`)?`▷`:n.data.some(e=>e.mediaType===`audio`)?`♫`:`◌`}});let d=_(`div`,`social-actions`),p=v(`♡ Like`,()=>N(async()=>{let t=await A(`/posts/${e.id}/engagement`);await A(`/posts/${e.id}/like`,{method:t.engagement.likedByMe?`DELETE`:`PUT`}),await m()}));async function m(){let t=await A(`/posts/${e.id}/engagement`);p.textContent=`${t.engagement.likedByMe?`♥`:`♡`} ${t.engagement.likes}`,p.setAttribute(`aria-pressed`,String(t.engagement.likedByMe))}if(N(m),d.append(p,v(`Comments`,()=>ce(e)),v(`Pop memory from this view`,i)),e.authorId===f.id){let t=_(`input`);t.type=`file`,t.accept=`image/jpeg,image/png,image/webp,image/gif,video/mp4,video/webm,audio/mpeg,audio/wav,audio/ogg,audio/webm`,t.setAttribute(`aria-label`,`Attach photo, video, music or voice-note file`),t.onchange=()=>N(async()=>{let r=t.files[0];if(!r)return;let i=new FormData;i.append(`file`,r),t.disabled=!0;try{await A(`/posts/${e.id}/media`,{method:`POST`,body:i}),t.value=``,await n()}finally{t.disabled=!1}}),d.append(t,v(`Edit`,()=>P(`Edit ${e.id}`,t=>t.append(b([[`body`,`Edit your memory`,{type:`textarea`,value:e.body,maxLength:1e4}]],`Save changes`,async t=>{await A(`/posts/${e.id}`,{method:`PATCH`,body:t}),await n()}))))),d.append(v(`Delete memory`,()=>{confirm(`Delete this saved memory? This is different from temporarily popping a bubble.`)&&N(async()=>{await A(`/posts/${e.id}`,{method:`DELETE`}),await n()})}))}return r.append(d),r}function ce(e){P(`Comments ${e.id}`,t=>{t.append(_(`h2`,``,`Inside this memory`),_(`p`,`social-memory-text`,e.body));let n;t.append(b([[`body`,`Your comment`,{type:`textarea`,maxLength:2e3}]],`Send comment`,async(t,r)=>{await A(`/posts/${e.id}/comments`,{method:`POST`,body:t}),r.body.value=``,await n()})),n=re(t,`/posts/${e.id}/comments`,e=>_(`p`,`social-chat-bubble`,e.body))})}function le(e){for(let t of[`bubble`,`server`]){e.append(_(`h2`,``,`${t===`bubble`?`Bubble`:`Community`} invitations`));let n=_(`div`);e.append(n);let r;r=re(n,`/me/${t}-invitations`,e=>{let n=_(`article`,`social-memory`);n.append(_(`h3`,``,e.bubbleTitle||e.serverName));for(let i of[`accept`,`decline`])n.append(v(i,()=>N(async()=>{await A(`/${t}-invitations/${e.id}/${i}`,{method:`POST`}),await r()})));return n})}}function ue(e){N(async()=>{let{profile:t}=await A(`/me/profile`);e.append(b([[`displayName`,`Display name`,{value:t.displayName,maxLength:80}],[`bio`,`Bio`,{type:`textarea`,value:t.bio||``,maxLength:500,required:!1}],[`avatarUrl`,`Avatar HTTPS link (optional)`,{type:`url`,value:t.avatarUrl||``,maxLength:2048,required:!1}]],`Save profile`,async e=>{await A(`/me/profile`,{method:`PATCH`,body:{...e,bio:e.bio.trim()||null,avatarUrl:e.avatarUrl.trim()||null}}),f=(await A(`/auth/me`)).user}));let n;e.append(b([[`id`,`Account ID to block (from a conversation)`,{maxLength:30}]],`Block account`,async e=>{if(!/^[1-9]\d*$/.test(e.id))throw Error(`Enter the account ID displayed in a conversation.`);await A(`/me/blocks/${e.id}`,{method:`PUT`});for(let[e,t]of[...E])if(e!==`My profile`){for(let e of t.querySelectorAll(`audio,video`))e.pause();t.remove(),E.delete(e),O.delete(e)}S?.(),S=null,await n()}));let r=_(`div`);e.append(r),n=re(r,`/me/blocks`,e=>v(`Unblock ${e.username}`,()=>N(async()=>{await A(`/me/blocks/${e.id}`,{method:`DELETE`}),await n()})))})}function de(e){e.append(b([[`username`,`Friend’s existing username`,{maxLength:30}]],`Open conversation`,async e=>{let{conversation:t}=await A(`/conversations`,{method:`POST`,body:e});fe(t)})),re(e,`/conversations`,e=>v(e.otherUser.displayName||e.otherUser.username,()=>fe(e),`social-orb`))}function fe(e){let r=`Conversation ${e.id}`;S?.(),S=null,P(r,i=>{i.append(_(`h2`,``,e.otherUser.displayName),_(`p`,`social-note`,`@${e.otherUser.username} · account ID ${e.otherUser.id}`));let a=_(`p`,`social-note`,`Connecting to live messages…`),o=_(`div`,`social-chat-log`);o.setAttribute(`role`,`log`),o.setAttribute(`aria-live`,`polite`),i.append(a,o);let s=!1,c=!1,l=null,u=new Map;async function d(t=!1){if(s){c=!0;return}s=!0,p.disabled=!0;try{do{c=!1;let n=t?l:null,r=[],i=u.size?[...u.keys()].reduce((e,t)=>BigInt(e)<BigInt(t)?e:t):null;do{let t=await A(`/conversations/${e.id}/messages?limit=30${n?`&before=`+n:``}`);r.push(...t.data),n=t.nextCursor}while(!t&&n&&i&&r.length&&BigInt(r.at(-1).id)>BigInt(i));t||u.clear();for(let e of r)u.set(e.id,e);l=n,p.hidden=l===null;let s=o.scrollTop,d=o.scrollHeight,m=d-s-o.clientHeight<40;o.replaceChildren(...[...u.values()].sort((e,t)=>BigInt(e.id)<BigInt(t.id)?-1:1).map(e=>{let t=_(`p`,`social-chat-bubble`+(e.senderId===f.id?` own`:``),e.body);return t.dataset.messageId=e.id,t})),o.scrollTop=t?s+o.scrollHeight-d:m?o.scrollHeight:s,a.textContent=`Live connection · messages saved in MySQL`,t=!1}while(c)}catch(e){throw[403,404].includes(e.status)&&(u.clear(),o.replaceChildren(),C===r&&(S?.(),S=null),a.textContent=`This conversation is no longer accessible.`),e}finally{s=!1,p.disabled=!1}}let p=v(`Earlier messages`,()=>N(()=>d(!0)));i.append(p),i.append(b([[`body`,`Message your friend`,{maxLength:1e4}]],`Send message`,async(t,n)=>{await A(`/conversations/${e.id}/messages`,{method:`POST`,body:t}),n.body.value=``,await d()}));let m=0,h=()=>{let i=++m;S?.(),S=t.subscribe(e.id,{ready:()=>{i===m&&C===r&&!n.hidden&&N(()=>d())},messages_changed:()=>{i===m&&C===r&&!n.hidden&&N(()=>d())},access_lost:()=>{i===m&&(C===r&&(S?.(),S=null),u.clear(),o.replaceChildren(),a.textContent=`Access ended. This conversation is unavailable.`,N(()=>A(`/auth/me`)))},unavailable:()=>{i===m&&(C===r&&(S?.(),S=null),a.textContent=`Live updates paused. Reconnect when the backend is available.`)},error:()=>{i===m&&(a.textContent=`Live connection interrupted. Reconnecting…`)}})};O.set(r,h),i.append(v(`Reconnect live chat`,h)),N(()=>d()),i.append(v(`A shared public flashback`,()=>N(async()=>{let t=await A(`/conversations/${e.id}/flashback`);i.append(_(`p`,`social-memory`,t.post?.body||`No eligible publicly shared flashback yet.`))})))})}function pe(e){let t;e.append(b([[`name`,`Community name`,{maxLength:100}],[`visibility`,`Community privacy`,{options:[[`private`,`Private`],[`public`,`Public`]]}]],`Create community`,async e=>{await A(`/servers`,{method:`POST`,body:e}),await t()})),t=re(e,`/servers`,e=>v(e.name,()=>L(e),`social-orb`)),e.append(b([[`id`,`Known public community ID`,{maxLength:30}]],`Join public community`,async e=>{await A(`/servers/${encodeURIComponent(e.id)}/join`,{method:`POST`}),await t()}))}function L(e){P(`Community ${e.id}`,t=>{if(t.append(_(`h2`,``,e.name)),e.role){let n=_(`details`);n.append(_(`summary`,``,`Community members`)),t.append(n),re(n,`/servers/${e.id}/members`,e=>_(`p`,`social-note`,`${e.displayName} · @${e.username} · account ID ${e.id} · ${e.role}`))}e.role===`admin`&&(t.append(_(`p`,`social-note`,`Atmosphere settings are saved for this community. This first connected workspace keeps your existing scene; a community background renderer is still needed.`)),t.append(b([[`username`,`Invite a friend`,{maxLength:30}]],`Invite to community`,t=>A(`/servers/${e.id}/invitations`,{method:`POST`,body:t}))),t.append(b([[`backgroundType`,`Background style`,{value:e.backgroundType,options:[[`none`,`Original atmosphere`],[`static`,`Still image URL`],[`animated`,`Moving media URL`]]}],[`backgroundUrl`,`Background URL`,{type:`url`,required:!1,value:e.backgroundUrl||``}]],`Save atmosphere`,t=>A(`/servers/${e.id}`,{method:`PATCH`,body:{...t,backgroundUrl:t.backgroundType===`none`?null:t.backgroundUrl}}))),t.append(b([[`title`,`Name a collaborative server bubble`,{maxLength:150}]],`Create shared bubble`,async t=>{se((await A(`/bubbles`,{method:`POST`,body:{...t,serverId:e.id,visibility:`server`}})).bubble)})));let n=_(`div`);t.append(n);let r;e.role===`admin`&&t.append(b([[`name`,`Playlist name`,{maxLength:100}]],`Create playlist`,async t=>{await A(`/servers/${e.id}/playlists`,{method:`POST`,body:t}),await r()})),r=re(n,`/servers/${e.id}/playlists`,t=>v(t.name,()=>me(t,e.role===`admin`)))})}function me(e,t){P(`Playlist ${e.id}`,n=>{n.append(_(`h2`,``,e.name),_(`p`,`social-note`,`Playback is local to you. Synchronized listening needs an additional room-playback protocol.`));let r;t&&n.append(b([[`title`,`Track title`,{maxLength:200}],[`mediaType`,`Media`,{options:[[`audio`,`Audio`],[`video`,`Video`]]}],[`mediaUrl`,`HTTPS media URL`,{type:`url`}]],`Add media`,async t=>{await A(`/playlists/${e.id}/items`,{method:`POST`,body:t}),await r()})),r=re(n,`/playlists/${e.id}/items`,e=>{let t=_(`article`,`social-memory`),n=_(e.mediaType);return n.controls=!0,n.preload=`none`,n.src=e.mediaUrl,n.onerror=()=>a.textContent=`This media host cannot play the requested file.`,t.append(_(`h3`,``,e.title),n),t},`after`)})}function he(e){e.append(_(`h2`,``,`Beyond the first connected universe`),_(`p`,`social-note`,`These features are planned, not simulated. Your current account and memories remain usable while they are developed.`));for(let[t,n]of[[`Voice bubbles and live calls`,`Recorder consent, DM attachment endpoints, and a voice-room transport. Audio files on memories already work.`],[`Shared listening, presence and reactions`,`Room membership, playback clock/state, presence expiry and reaction events. DM live notifications already work.`],[`Gifts, shared islands and decorations`,`Permission-checked world objects and collaborative state/versioning.`],[`Stories, close friends and notifications`,`Audience circles, expiration, subscriptions and read-state models.`],[`Future bubbles and scheduled reveals`,`A server-side scheduler, release permissions and cancellation rules.`],[`Friendship constellations, timelines and threads`,`Relationship consent and timeline/thread APIs that never expose profile post histories.`],[`People/world/community search and saved collections`,`Privacy-filtered search and per-account collection APIs. Public bubble discovery already works.`]]){let r=_(`article`,`social-memory`);r.append(_(`h3`,``,t),_(`p`,``,n)),e.append(r)}}let ge=new MutationObserver(M);return ge.observe(document.documentElement,{attributes:!0,attributeFilter:[`data-design`]}),M(),{dispose(){h=!0,k(),ge.disconnect(),n.remove(),d.remove(),e.classList.remove(`connected-active`)}}}function C(e){let t=document.createElement(`div`);t.className=`wet-overlay`,t.setAttribute(`aria-hidden`,`true`),e.append(t);let n=new Set;function r(e,r,i,a,o){let s=document.createElement(`i`);for(s.className=`splash-droplet`,s.style.left=e+`px`,s.style.top=r+`px`,s.style.width=i+`px`,s.style.height=i*1.15+`px`,t.append(s);t.children.length>72;){let e=t.firstChild;e.getAnimations().forEach(e=>e.cancel()),e.remove()}let c=s.animate(a,{duration:o,easing:`linear`,fill:`forwards`});n.add(c),c.onfinish=c.oncancel=()=>{n.delete(c),s.remove()}}let i=e=>{let t=e.target.getBoundingClientRect(),n=t.left+t.width/2,i=t.top+t.height/2;if(matchMedia(`(prefers-reduced-motion: reduce)`).matches){r(n,i,8,[{opacity:.4},{opacity:0}],450);return}for(let e=0;e<24;e++){let t=Math.PI*2*e/24+(Math.random()-.5)*.2,a=80+Math.random()*170,o=Math.cos(t)*a,s=Math.sin(t)*a,c=650+Math.random()*450,l=[];for(let e=0;e<=8;e++){let t=e/8*c/1e3;l.push({transform:`translate(`+o*t+`px,`+(s*t+210*t*t)+`px) scale(`+(1-.35*e/8)+`)`,opacity:Math.min(1,(1-e/8)*1.5)})}r(n,i,2+Math.random()*6,l,c)}for(let e=0;e<7;e++){let e=(Math.random()-.5)*t.width*2.5,a=(Math.random()-.5)*t.height*2;r(Math.max(10,Math.min(innerWidth-22,n+e)),Math.max(10,Math.min(innerHeight-40,i+a)),6+Math.random()*14,[{opacity:0,transform:`translateY(0)`},{offset:.12,opacity:.6,transform:`translateY(2px)`},{offset:.7,opacity:.35,transform:`translateY(14px)`},{opacity:0,transform:`translateY(29px)`}],2200+Math.random()*1500)}};return e.addEventListener(`bubblepop`,i),{dispose(){e.removeEventListener(`bubblepop`,i),n.forEach(e=>e.cancel()),t.remove()}}}var w=2400;function T(e,t=!1){return t?0:Math.min(1,Math.max(0,e/w))}function E(e){let t=null,n=0,r=new Set;function i(e){e.classList.remove(`hold-to-pop`),e.style.setProperty(`--hold-strain`,`0`)}function a(){t&&=(i(t.node),t.node.dataset.pressure=`0`,null),cancelAnimationFrame(n)}function o(e){if(!t)return;let a=T(e-t.started);if(t.node.dataset.pressure=String(a),t.node.style.setProperty(`--hold-strain`,String(a)),a>=1){let n=t.node;i(n),t=null,n.classList.add(`popping`),n.dataset.pressure=`0`,n.dataset.popAt=String(e),n.dispatchEvent(new CustomEvent(`bubblepop`,{bubbles:!0}));let a=setTimeout(()=>{r.delete(a),n.classList.contains(`user-orb`)&&n.remove()},300);r.add(a);return}n=requestAnimationFrame(o)}function s(e){if(e.button!==0)return;let r=e.target.closest(`button,input,textarea,select,a,[contenteditable=true]`);if(r&&!r.classList.contains(`memory-image`))return;let i=e.target.closest(`.user-orb,.memory-bubble`);!i||i.classList.contains(`growing`)||i.classList.contains(`popping`)||(a(),t={node:i,started:performance.now(),x:e.clientX,y:e.clientY,id:e.pointerId},i.classList.add(`hold-to-pop`),n=requestAnimationFrame(o))}function c(e){t&&e.pointerId===t.id&&Math.hypot(e.clientX-t.x,e.clientY-t.y)>8&&a()}let l=e=>{e.target.closest(`.popping`)&&(e.preventDefault(),e.stopImmediatePropagation())};e.addEventListener(`click`,l,!0);let u=()=>{document.hidden&&a()};return e.addEventListener(`pointerdown`,s),e.addEventListener(`pointermove`,c),e.addEventListener(`pointerup`,a),e.addEventListener(`pointercancel`,a),e.addEventListener(`lostpointercapture`,a),window.addEventListener(`blur`,a),document.addEventListener(`visibilitychange`,u),{dispose(){a(),e.removeEventListener(`click`,l,!0),r.forEach(clearTimeout),e.removeEventListener(`pointerdown`,s),e.removeEventListener(`pointermove`,c),e.removeEventListener(`pointerup`,a),e.removeEventListener(`pointercancel`,a),e.removeEventListener(`lostpointercapture`,a),window.removeEventListener(`blur`,a),document.removeEventListener(`visibilitychange`,u)}}}var D=1e3,O=1001,k=1002,A=1003,j=1004,M=1005,N=1006,P=1007,F=1008,ee=1009,te=1010,ne=1011,re=1012,ie=1013,ae=1014,oe=1015,se=1016,I=1017,ce=1018,le=1020,ue=35902,de=35899,fe=1021,pe=1022,L=1023,me=1026,he=1027,ge=1028,_e=1029,ve=1030,ye=1031,be=1033,xe=33776,Se=33777,Ce=33778,we=33779,Te=35840,Ee=35841,De=35842,Oe=35843,ke=36196,Ae=37492,R=37496,je=37488,Me=37489,Ne=37490,z=37491,Pe=37808,B=37809,V=37810,Fe=37811,Ie=37812,Le=37813,Re=37814,ze=37815,Be=37816,Ve=37817,He=37818,Ue=37819,We=37820,Ge=37821,Ke=36492,qe=36494,Je=36495,Ye=36283,Xe=36284,Ze=36285,Qe=36286,$e=2300,et=2301,tt=2302,nt=2303,rt=2400,it=2401,at=2402,ot=3200,st=`srgb`,ct=`srgb-linear`,lt=`linear`,ut=`srgb`,dt=7680,ft=35044,pt=2e3;function mt(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function ht(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function gt(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function _t(){let e=gt(`canvas`);return e.style.display=`block`,e}var vt={};function yt(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function bt(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function H(...e){e=bt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function U(...e){e=bt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function xt(...e){let t=e.join(` `);t in vt||(vt[t]=!0,H(...e))}function St(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var Ct={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},wt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},Tt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),Et=1234567,Dt=Math.PI/180,Ot=180/Math.PI;function kt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Tt[e&255]+Tt[e>>8&255]+Tt[e>>16&255]+Tt[e>>24&255]+`-`+Tt[t&255]+Tt[t>>8&255]+`-`+Tt[t>>16&15|64]+Tt[t>>24&255]+`-`+Tt[n&63|128]+Tt[n>>8&255]+`-`+Tt[n>>16&255]+Tt[n>>24&255]+Tt[r&255]+Tt[r>>8&255]+Tt[r>>16&255]+Tt[r>>24&255]).toLowerCase()}function W(e,t,n){return Math.max(t,Math.min(n,e))}function At(e,t){return(e%t+t)%t}function jt(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function Mt(e,t,n){return e===t?0:(n-e)/(t-e)}function Nt(e,t,n){return(1-n)*e+n*t}function Pt(e,t,n,r){return Nt(e,t,1-Math.exp(-n*r))}function Ft(e,t=1){return t-Math.abs(At(e,t*2)-t)}function It(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function Lt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function Rt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function zt(e,t){return e+Math.random()*(t-e)}function Bt(e){return e*(.5-Math.random())}function Vt(e){e!==void 0&&(Et=e);let t=Et+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ht(e){return e*Dt}function Ut(e){return e*Ot}function Wt(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Gt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Kt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function qt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:H(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Jt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function Yt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var Xt={DEG2RAD:Dt,RAD2DEG:Ot,generateUUID:kt,clamp:W,euclideanModulo:At,mapLinear:jt,inverseLerp:Mt,lerp:Nt,damp:Pt,pingpong:Ft,smoothstep:It,smootherstep:Lt,randInt:Rt,randFloat:zt,randFloatSpread:Bt,seededRandom:Vt,degToRad:Ht,radToDeg:Ut,isPowerOfTwo:Wt,ceilPowerOfTwo:Gt,floorPowerOfTwo:Kt,setQuaternionFromProperEuler:qt,normalize:Yt,denormalize:Jt},G=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=W(this.x,e.x,t.x),this.y=W(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=W(this.x,e,t),this.y=W(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(W(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(W(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Zt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:H(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(W(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},K=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($t.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($t.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=W(this.x,e.x,t.x),this.y=W(this.y,e.y,t.y),this.z=W(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=W(this.x,e,t),this.y=W(this.y,e,t),this.z=W(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(W(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Qt.copy(this).projectOnVector(e),this.sub(Qt)}reflect(e){return this.sub(Qt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(W(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Qt=new K,$t=new Zt,q=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return xt(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(en.makeScale(e,t)),this}rotate(e){return xt(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(en.makeRotation(-e)),this}translate(e,t){return xt(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(en.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},en=new q,tn=new q().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nn=new q().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rn(){let e={enabled:!0,workingColorSpace:ct,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=an(e.r),e.g=an(e.g),e.b=an(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=on(e.r),e.g=on(e.g),e.b=on(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?lt:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return xt(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return xt(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[ct]:{primaries:t,whitePoint:r,transfer:lt,toXYZ:tn,fromXYZ:nn,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:st},outputColorSpaceConfig:{drawingBufferColorSpace:st}},[st]:{primaries:t,whitePoint:r,transfer:ut,toXYZ:tn,fromXYZ:nn,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:st}}}),e}var J=rn();function an(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function on(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var sn,cn=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{sn===void 0&&(sn=gt(`canvas`)),sn.width=e.width,sn.height=e.height;let t=sn.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=sn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=gt(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=an(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(an(t[e]/255)*255):t[e]=an(t[e]);return{data:t,width:e.width,height:e.height}}return H(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},ln=0,un=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ln++}),this.uuid=kt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(dn(r[t].image)):e.push(dn(r[t]))}else e=dn(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function dn(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?cn.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(H(`Texture: Unable to serialize Texture.`),{})}var fn=0,pn=new K,mn=class e extends wt{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=O,i=O,a=N,o=F,s=L,c=ee,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fn++}),this.uuid=kt(),this.name=``,this.source=new un(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new G(0,0),this.repeat=new G(1,1),this.center=new G(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new q,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(pn).x}get height(){return this.source.getSize(pn).y}get depth(){return this.source.getSize(pn).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){H(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){H(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case D:e.x-=Math.floor(e.x);break;case O:e.x=e.x<0?0:1;break;case k:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case D:e.y-=Math.floor(e.y);break;case O:e.y=e.y<0?0:1;break;case k:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};mn.DEFAULT_IMAGE=null,mn.DEFAULT_MAPPING=300,mn.DEFAULT_ANISOTROPY=1;var Y=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=W(this.x,e.x,t.x),this.y=W(this.y,e.y,t.y),this.z=W(this.z,e.z,t.z),this.w=W(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=W(this.x,e,t),this.y=W(this.y,e,t),this.z=W(this.z,e,t),this.w=W(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(W(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},hn=class extends wt{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:N,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Y(0,0,e,t),this.scissorTest=!1,this.viewport=new Y(0,0,e,t),this.textures=[];let r=new mn({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:N,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new un(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},gn=class extends hn{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},_n=class extends mn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=A,this.minFilter=A,this.wrapR=O,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},vn=class extends mn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=A,this.minFilter=A,this.wrapR=O,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},yn=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/bn.setFromMatrixColumn(e,0).length(),i=1/bn.setFromMatrixColumn(e,1).length(),a=1/bn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sn,e,Cn)}lookAt(e,t,n){let r=this.elements;return En.subVectors(e,t),En.lengthSq()===0&&(En.z=1),En.normalize(),wn.crossVectors(n,En),wn.lengthSq()===0&&(Math.abs(n.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),wn.crossVectors(n,En)),wn.normalize(),Tn.crossVectors(En,wn),r[0]=wn.x,r[4]=Tn.x,r[8]=En.x,r[1]=wn.y,r[5]=Tn.y,r[9]=En.y,r[2]=wn.z,r[6]=Tn.z,r[10]=En.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],P=r[7],F=r[11],ee=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*P,i[8]=a*C+o*D+s*j+c*F,i[12]=a*w+o*O+s*M+c*ee,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*P,i[9]=l*C+u*D+d*j+f*F,i[13]=l*w+u*O+d*M+f*ee,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*P,i[10]=p*C+m*D+h*j+g*F,i[14]=p*w+m*O+h*M+g*ee,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*P,i[11]=_*C+v*D+y*j+b*F,i[15]=_*w+v*O+y*M+b*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=bn.set(r[0],r[1],r[2]).length(),o=bn.set(r[4],r[5],r[6]).length(),s=bn.set(r[8],r[9],r[10]).length();i<0&&(a=-a),xn.copy(this);let c=1/a,l=1/o,u=1/s;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=l,xn.elements[5]*=l,xn.elements[6]*=l,xn.elements[8]*=u,xn.elements[9]*=u,xn.elements[10]*=u,t.setFromRotationMatrix(xn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=pt,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=pt,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},bn=new K,xn=new yn,Sn=new K(0,0,0),Cn=new K(1,1,1),wn=new K,Tn=new K,En=new K,Dn=new yn,On=new Zt,kn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(W(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-W(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(W(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-W(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(W(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-W(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:H(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Dn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return On.setFromEuler(this),this.setFromQuaternion(On,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};kn.DEFAULT_ORDER=`XYZ`;var An=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},jn=0,Mn=new K,Nn=new Zt,Pn=new yn,Fn=new K,In=new K,Ln=new K,Rn=new Zt,zn=new K(1,0,0),Bn=new K(0,1,0),Vn=new K(0,0,1),Hn={type:`added`},Un={type:`removed`},Wn={type:`childadded`,child:null},Gn={type:`childremoved`,child:null},Kn=class e extends wt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jn++}),this.uuid=kt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new K,n=new kn,r=new Zt,i=new K(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new yn},normalMatrix:{value:new q}}),this.matrix=new yn,this.matrixWorld=new yn,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new An,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Nn.setFromAxisAngle(e,t),this.quaternion.multiply(Nn),this}rotateOnWorldAxis(e,t){return Nn.setFromAxisAngle(e,t),this.quaternion.premultiply(Nn),this}rotateX(e){return this.rotateOnAxis(zn,e)}rotateY(e){return this.rotateOnAxis(Bn,e)}rotateZ(e){return this.rotateOnAxis(Vn,e)}translateOnAxis(e,t){return Mn.copy(e).applyQuaternion(this.quaternion),this.position.add(Mn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zn,e)}translateY(e){return this.translateOnAxis(Bn,e)}translateZ(e){return this.translateOnAxis(Vn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Fn.copy(e):Fn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),In.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(In,Fn,this.up):Pn.lookAt(Fn,In,this.up),this.quaternion.setFromRotationMatrix(Pn),r&&(Pn.extractRotation(r.matrixWorld),Nn.setFromRotationMatrix(Pn),this.quaternion.premultiply(Nn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(U(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hn),Wn.child=e,this.dispatchEvent(Wn),Wn.child=null):U(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Un),Gn.child=e,this.dispatchEvent(Gn),Gn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hn),Wn.child=e,this.dispatchEvent(Wn),Wn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(In,e,Ln),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(In,Rn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Kn.DEFAULT_UP=new K(0,1,0),Kn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var qn=class extends Kn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Jn={type:`move`},Yn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Jn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new qn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Xn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},Qn={h:0,s:0,l:0};function $n(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var er=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=st){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,J.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=J.workingColorSpace){return this.r=e,this.g=t,this.b=n,J.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=J.workingColorSpace){if(e=At(e,1),t=W(t,0,1),n=W(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=$n(i,r,e+1/3),this.g=$n(i,r,e),this.b=$n(i,r,e-1/3)}return J.colorSpaceToWorking(this,r),this}setStyle(e,t=st){function n(t){t!==void 0&&parseFloat(t)<1&&H(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:H(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);H(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=st){let n=Xn[e.toLowerCase()];return n===void 0?H(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=an(e.r),this.g=an(e.g),this.b=an(e.b),this}copyLinearToSRGB(e){return this.r=on(e.r),this.g=on(e.g),this.b=on(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=st){return J.workingToColorSpace(tr.copy(this),e),Math.round(W(tr.r*255,0,255))*65536+Math.round(W(tr.g*255,0,255))*256+Math.round(W(tr.b*255,0,255))}getHexString(e=st){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=J.workingColorSpace){J.workingToColorSpace(tr.copy(this),t);let n=tr.r,r=tr.g,i=tr.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=J.workingColorSpace){return J.workingToColorSpace(tr.copy(this),t),e.r=tr.r,e.g=tr.g,e.b=tr.b,e}getStyle(e=st){J.workingToColorSpace(tr.copy(this),e);let t=tr.r,n=tr.g,r=tr.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Zn),this.setHSL(Zn.h+e,Zn.s+t,Zn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Zn),e.getHSL(Qn);let n=Nt(Zn.h,Qn.h,t),r=Nt(Zn.s,Qn.s,t),i=Nt(Zn.l,Qn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},tr=new er;er.NAMES=Xn;var nr=class extends Kn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},rr=new K,ir=new K,ar=new K,or=new K,sr=new K,cr=new K,lr=new K,ur=new K,dr=new K,fr=new K,pr=new Y,mr=new Y,hr=new Y,gr=class e{constructor(e=new K,t=new K,n=new K){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),rr.subVectors(e,t),r.cross(rr);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){rr.subVectors(r,t),ir.subVectors(n,t),ar.subVectors(e,t);let a=rr.dot(rr),o=rr.dot(ir),s=rr.dot(ar),c=ir.dot(ir),l=ir.dot(ar),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,or)!==null&&or.x>=0&&or.y>=0&&or.x+or.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,or)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,or.x),s.addScaledVector(a,or.y),s.addScaledVector(o,or.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return pr.setScalar(0),mr.setScalar(0),hr.setScalar(0),pr.fromBufferAttribute(e,t),mr.fromBufferAttribute(e,n),hr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(pr,i.x),a.addScaledVector(mr,i.y),a.addScaledVector(hr,i.z),a}static isFrontFacing(e,t,n,r){return rr.subVectors(n,t),ir.subVectors(e,t),rr.cross(ir).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rr.subVectors(this.c,this.b),ir.subVectors(this.a,this.b),rr.cross(ir).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;sr.subVectors(r,n),cr.subVectors(i,n),ur.subVectors(e,n);let s=sr.dot(ur),c=cr.dot(ur);if(s<=0&&c<=0)return t.copy(n);dr.subVectors(e,r);let l=sr.dot(dr),u=cr.dot(dr);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(sr,a);fr.subVectors(e,i);let f=sr.dot(fr),p=cr.dot(fr);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(cr,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return lr.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(lr,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(sr,a).addScaledVector(cr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},_r=class{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(yr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(yr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=yr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,yr):yr.fromBufferAttribute(r,t),yr.applyMatrix4(e.matrixWorld),this.expandByPoint(yr);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),br.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),br.copy(e.boundingBox)),br.applyMatrix4(e.matrixWorld),this.union(br)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yr),yr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Dr),Or.subVectors(this.max,Dr),xr.subVectors(e.a,Dr),Sr.subVectors(e.b,Dr),Cr.subVectors(e.c,Dr),wr.subVectors(Sr,xr),Tr.subVectors(Cr,Sr),Er.subVectors(xr,Cr);let t=[0,-wr.z,wr.y,0,-Tr.z,Tr.y,0,-Er.z,Er.y,wr.z,0,-wr.x,Tr.z,0,-Tr.x,Er.z,0,-Er.x,-wr.y,wr.x,0,-Tr.y,Tr.x,0,-Er.y,Er.x,0];return!jr(t,xr,Sr,Cr,Or)||(t=[1,0,0,0,1,0,0,0,1],!jr(t,xr,Sr,Cr,Or))?!1:(kr.crossVectors(wr,Tr),t=[kr.x,kr.y,kr.z],jr(t,xr,Sr,Cr,Or))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},vr=[new K,new K,new K,new K,new K,new K,new K,new K],yr=new K,br=new _r,xr=new K,Sr=new K,Cr=new K,wr=new K,Tr=new K,Er=new K,Dr=new K,Or=new K,kr=new K,Ar=new K;function jr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Ar.fromArray(e,a);let o=i.x*Math.abs(Ar.x)+i.y*Math.abs(Ar.y)+i.z*Math.abs(Ar.z),s=t.dot(Ar),c=n.dot(Ar),l=r.dot(Ar);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Mr=new K,Nr=new G,Pr=0,Fr=class extends wt{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Pr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=ft,this.updateRanges=[],this.gpuType=oe,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Nr.fromBufferAttribute(this,t),Nr.applyMatrix3(e),this.setXY(t,Nr.x,Nr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Mr.fromBufferAttribute(this,t),Mr.applyMatrix3(e),this.setXYZ(t,Mr.x,Mr.y,Mr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Mr.fromBufferAttribute(this,t),Mr.applyMatrix4(e),this.setXYZ(t,Mr.x,Mr.y,Mr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mr.fromBufferAttribute(this,t),Mr.applyNormalMatrix(e),this.setXYZ(t,Mr.x,Mr.y,Mr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mr.fromBufferAttribute(this,t),Mr.transformDirection(e),this.setXYZ(t,Mr.x,Mr.y,Mr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Jt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Jt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Jt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Jt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Jt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),n=Yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),n=Yt(n,this.array),r=Yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),n=Yt(n,this.array),r=Yt(r,this.array),i=Yt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},Ir=class extends Fr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Lr=class extends Fr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Rr=class extends Fr{constructor(e,t,n){super(new Float32Array(e),t,n)}},zr=new _r,Br=new K,Vr=new K,Hr=class{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?zr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Br.subVectors(e,this.center);let t=Br.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Br,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Br.copy(e.center).add(Vr)),this.expandByPoint(Br.copy(e.center).sub(Vr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ur=0,Wr=new yn,Gr=new Kn,Kr=new K,qr=new _r,Jr=new _r,Yr=new K,Xr=class e extends wt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ur++}),this.uuid=kt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(mt(e)?Lr:Ir)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new q().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Wr.makeRotationFromQuaternion(e),this.applyMatrix4(Wr),this}rotateX(e){return Wr.makeRotationX(e),this.applyMatrix4(Wr),this}rotateY(e){return Wr.makeRotationY(e),this.applyMatrix4(Wr),this}rotateZ(e){return Wr.makeRotationZ(e),this.applyMatrix4(Wr),this}translate(e,t,n){return Wr.makeTranslation(e,t,n),this.applyMatrix4(Wr),this}scale(e,t,n){return Wr.makeScale(e,t,n),this.applyMatrix4(Wr),this}lookAt(e){return Gr.lookAt(e),Gr.updateMatrix(),this.applyMatrix4(Gr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kr).negate(),this.translate(Kr.x,Kr.y,Kr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Rr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&H(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _r);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){U(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];qr.setFromBufferAttribute(n),this.morphTargetsRelative?(Yr.addVectors(this.boundingBox.min,qr.min),this.boundingBox.expandByPoint(Yr),Yr.addVectors(this.boundingBox.max,qr.max),this.boundingBox.expandByPoint(Yr)):(this.boundingBox.expandByPoint(qr.min),this.boundingBox.expandByPoint(qr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&U(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){U(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new K,1/0);return}if(e){let n=this.boundingSphere.center;if(qr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Jr.setFromBufferAttribute(n),this.morphTargetsRelative?(Yr.addVectors(qr.min,Jr.min),qr.expandByPoint(Yr),Yr.addVectors(qr.max,Jr.max),qr.expandByPoint(Yr)):(qr.expandByPoint(Jr.min),qr.expandByPoint(Jr.max))}qr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Yr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Yr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Yr.fromBufferAttribute(a,t),o&&(Kr.fromBufferAttribute(e,t),Yr.add(Kr)),r=Math.max(r,n.distanceToSquared(Yr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&U(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){U(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Fr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new K,s[e]=new K;let c=new K,l=new K,u=new K,d=new G,f=new G,p=new G,m=new K,h=new K;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new K,y=new K,b=new K,x=new K;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Fr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new K,i=new K,a=new K,o=new K,s=new K,c=new K,l=new K,u=new K;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Yr.fromBufferAttribute(e,t),Yr.normalize(),e.setXYZ(t,Yr.x,Yr.y,Yr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Fr(a,r,i)}if(this.index===null)return H(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Zr=new K,Qr=new K,$r=new q,ei=class{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Zr.subVectors(n,t).cross(Qr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Zr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||$r.getNormalMatrix(e),r=this.coplanarPoint(Zr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},ti=0,ni=class extends wt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ti++}),this.uuid=kt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new er(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=dt,this.stencilZFail=dt,this.stencilZPass=dt,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){H(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){H(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new er().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new ei().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new G().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new G().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},ri=new K,ii=new K,ai=new K,oi=new K,si=class{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ri.copy(this.origin).addScaledVector(this.direction,t),ri.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ii.copy(e).add(t).multiplyScalar(.5),ai.copy(t).sub(e).normalize(),oi.copy(this.origin).sub(ii);let i=e.distanceTo(t)*.5,a=-this.direction.dot(ai),o=oi.dot(this.direction),s=-oi.dot(ai),c=oi.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(ii).addScaledVector(ai,d),f}intersectSphere(e,t){if(e.radius<0)return null;ri.subVectors(e.center,this.origin);let n=ri.dot(this.direction),r=ri.dot(ri)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ri)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,M,N;if(y>=b&&y>=x?(w=s,D=u,A=p,N=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,M=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,M=_)):b>=x?(w=c,D=d,A=m,N=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,M=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,M=v)):(w=l,D=f,A=h,N=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,M=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,M=g)),w===0)return null;let P=S/w,F=C/w,ee=1/w,te=T-P*D,ne=E-F*D,re=O-P*A,ie=k-F*A,ae=j-P*N,oe=M-F*N,se=ae*ie-oe*re,I=te*oe-ne*ae,ce=re*ne-ie*te;if(r){if(se<0||I<0||ce<0)return null}else if((se<0||I<0||ce<0)&&(se>0||I>0||ce>0))return null;let le=se+I+ce;if(le===0)return null;let ue=ee*(se*D+I*A+ce*N);return(le>0?ue<0:ue>0)?null:this.at(ue/le,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ci=class extends ni{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new er(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},li=new yn,ui=new si,di=new Hr,fi=new K,pi=new K,mi=new K,hi=new K,gi=new K,_i=new K,vi=new K,yi=new K,bi=class extends Kn{constructor(e=new Xr,t=new ci){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){_i.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(gi.fromBufferAttribute(s,e),a?_i.addScaledVector(gi,r):_i.addScaledVector(gi.sub(t),r))}t.add(_i)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),di.copy(n.boundingSphere),di.applyMatrix4(i),ui.copy(e.ray).recast(e.near),!(di.containsPoint(ui.origin)===!1&&(ui.intersectSphere(di,fi)===null||ui.origin.distanceToSquared(fi)>(e.far-e.near)**2))&&(li.copy(i).invert(),ui.copy(e.ray).applyMatrix4(li),(n.boundingBox===null||ui.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,ui)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Si(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Si(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Si(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Si(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function xi(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;yi.copy(s),yi.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(yi);return l<n.near||l>n.far?null:{distance:l,point:yi.clone(),object:e}}function Si(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,pi),e.getVertexPosition(c,mi),e.getVertexPosition(l,hi);let u=xi(e,t,n,r,pi,mi,hi,vi);if(u){let e=new K;gr.getBarycoord(vi,pi,mi,hi,e),i&&(u.uv=gr.getInterpolatedAttribute(i,s,c,l,e,new G)),a&&(u.uv1=gr.getInterpolatedAttribute(a,s,c,l,e,new G)),o&&(u.normal=gr.getInterpolatedAttribute(o,s,c,l,e,new K),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new K,materialIndex:0};gr.getNormal(pi,mi,hi,t.normal),u.face=t,u.barycoord=e}return u}var Ci=class extends mn{constructor(e=null,t=1,n=1,r,i,a,o,s,c=A,l=A,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},wi=new Hr,Ti=new G(.5,.5),Ei=new K,Di=class{constructor(e=new ei,t=new ei,n=new ei,r=new ei,i=new ei,a=new ei){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=pt,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wi)}intersectsSprite(e){return wi.center.set(0,0,0),wi.radius=.7071067811865476+Ti.distanceTo(e.center),wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Ei.x=r.normal.x>0?e.max.x:e.min.x,Ei.y=r.normal.y>0?e.max.y:e.min.y,Ei.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ei)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Oi=class extends mn{constructor(e,t,n,r,i=N,a=N,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;let l=this;function u(){l.needsUpdate=!0,l._requestVideoFrameCallbackId=e.requestVideoFrameCallback(u)}`requestVideoFrameCallback`in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(u))}clone(){return new this.constructor(this.image).copy(this)}update(){let e=this.image;!(`requestVideoFrameCallback`in e)&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}},ki=class extends mn{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ai=class extends mn{constructor(e,t,n=ae,r,i,a,o=A,s=A,c,l=me,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new un(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ji=class extends Ai{constructor(e,t=ae,n=301,r,i,a=A,o=A,s,c=me){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Mi=class extends mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ni=class e extends Xr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Rr(c,3)),this.setAttribute(`normal`,new Rr(l,3)),this.setAttribute(`uv`,new Rr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new K;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Pi=class e extends Xr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Rr(p,3)),this.setAttribute(`normal`,new Rr(m,3)),this.setAttribute(`uv`,new Rr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Fi=class e extends Xr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new K,d=new K,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new Rr(p,3)),this.setAttribute(`normal`,new Rr(m,3)),this.setAttribute(`uv`,new Rr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Ii(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Ri(i))i.isRenderTargetTexture?(H(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Ri(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Li(e){let t={};for(let n=0;n<e.length;n++){let r=Ii(e[n]);for(let e in r)t[e]=r[e]}return t}function Ri(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function zi(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Bi(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:J.workingColorSpace}var Vi={clone:Ii,merge:Li},Hi=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ui=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Wi=class extends ni{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hi,this.fragmentShader=Ui,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ii(e.uniforms),this.uniformsGroups=zi(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new er().setHex(r.value);break;case`v2`:this.uniforms[n].value=new G().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new K().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Y().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new q().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new yn().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Gi=class extends Wi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Ki=class extends ni{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=ot,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},qi=class extends ni{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ji(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Yi(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Xi=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Zi=class extends Xi{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rt,endingEnd:rt}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case it:i=e,o=2*t-n;break;case at:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case it:a=e,s=2*n-t;break;case at:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Qi=class extends Xi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},$i=class extends Xi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ea=class extends Xi{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=ra(n,t,g,y,r);i[p]=ta(x,o,_,b,m)}return i}};function ta(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function na(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function ra(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=ta(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=na(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var ia=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Ji(t,this.TimeBufferType),this.values=Ji(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ji(e.times,Array),values:Ji(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Yi(e.settings)&&(n.settings={inTangents:Ji(e.settings.inTangents,Array),outTangents:Ji(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new $i(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Qi(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Zi(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ea(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case $e:t=this.InterpolantFactoryMethodDiscrete;break;case et:t=this.InterpolantFactoryMethodLinear;break;case tt:t=this.InterpolantFactoryMethodSmooth;break;case nt:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return H(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $e;case this.InterpolantFactoryMethodLinear:return et;case this.InterpolantFactoryMethodSmooth:return tt;case this.InterpolantFactoryMethodBezier:return nt}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Yi(this.settings)&&(aa(this.settings.inTangents,e),aa(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(U(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(U(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){U(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){U(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&ht(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){U(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===tt,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Yi(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function aa(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}ia.prototype.ValueTypeName=``,ia.prototype.TimeBufferType=Float32Array,ia.prototype.ValueBufferType=Float32Array,ia.prototype.DefaultInterpolation=et;var oa=class extends ia{constructor(e,t,n){super(e,t,n)}};oa.prototype.ValueTypeName=`bool`,oa.prototype.ValueBufferType=Array,oa.prototype.DefaultInterpolation=$e,oa.prototype.InterpolantFactoryMethodLinear=void 0,oa.prototype.InterpolantFactoryMethodSmooth=void 0;var sa=class extends ia{constructor(e,t,n,r){super(e,t,n,r)}};sa.prototype.ValueTypeName=`color`;var ca=class extends ia{constructor(e,t,n,r){super(e,t,n,r)}};ca.prototype.ValueTypeName=`number`;var la=class extends Xi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Zt.slerpFlat(i,0,a,c-o,a,c,s);return i}},ua=class extends ia{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new la(this.times,this.values,this.getValueSize(),e)}};ua.prototype.ValueTypeName=`quaternion`,ua.prototype.InterpolantFactoryMethodSmooth=void 0;var da=class extends ia{constructor(e,t,n){super(e,t,n)}};da.prototype.ValueTypeName=`string`,da.prototype.ValueBufferType=Array,da.prototype.DefaultInterpolation=$e,da.prototype.InterpolantFactoryMethodLinear=void 0,da.prototype.InterpolantFactoryMethodSmooth=void 0;var fa=class extends ia{constructor(e,t,n,r){super(e,t,n,r)}};fa.prototype.ValueTypeName=`vector`;var pa={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(ma(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!ma(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function ma(e){try{let t=e.slice(e.indexOf(`:`)+1);return new URL(t).protocol===`blob:`}catch{return!1}}var ha=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return e=e.normalize(`NFC`),s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},ga=class{constructor(e){this.manager=e===void 0?ha:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ga.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var _a=new WeakMap,va=class extends ga{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=pa.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);else{let e=_a.get(a);e===void 0&&(e=[],_a.set(a,e)),e.push({onLoad:t,onError:r})}return a}let o=gt(`img`);function s(){l(),t&&t(this);let n=_a.get(this)||[];for(let e=0;e<n.length;e++){let t=n[e];t.onLoad&&t.onLoad(this)}_a.delete(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),pa.remove(`image:${e}`);let n=_a.get(this)||[];for(let e=0;e<n.length;e++){let r=n[e];r.onError&&r.onError(t)}_a.delete(this),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),pa.add(`image:${e}`,o),i.manager.itemStart(e),o.src=e,o}},ya=class extends ga{constructor(e){super(e)}load(e,t,n,r){let i=new mn,a=new va(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},ba=new K,xa=new Zt,Sa=new K,Ca=class extends Kn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new yn,this.projectionMatrix=new yn,this.projectionMatrixInverse=new yn,this.coordinateSystem=pt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ba,xa,Sa),Sa.x===1&&Sa.y===1&&Sa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ba,xa,Sa.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ba,xa,Sa),Sa.x===1&&Sa.y===1&&Sa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ba,xa,Sa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},wa=new K,Ta=new G,Ea=new G,Da=class extends Ca{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ot*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Dt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ot*2*Math.atan(Math.tan(Dt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){wa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wa.x,wa.y).multiplyScalar(-e/wa.z),wa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wa.x,wa.y).multiplyScalar(-e/wa.z)}getViewSize(e,t){return this.getViewBounds(e,Ta,Ea),t.subVectors(Ea,Ta)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Dt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Oa=class extends Ca{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ka=-90,Aa=1,ja=class extends Kn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Da(ka,Aa,e,t);r.layers=this.layers,this.add(r);let i=new Da(ka,Aa,e,t);i.layers=this.layers,this.add(i);let a=new Da(ka,Aa,e,t);a.layers=this.layers,this.add(a);let o=new Da(ka,Aa,e,t);o.layers=this.layers,this.add(o);let s=new Da(ka,Aa,e,t);s.layers=this.layers,this.add(s);let c=new Da(ka,Aa,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ma=class extends Da{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Na=`\\[\\]\\.:\\/`,Pa=RegExp(`[\\[\\]\\.:\\/]`,`g`),Fa=`[^\\[\\]\\.:\\/]`,Ia=`[^`+Na.replace(`\\.`,``)+`]`,La=`((?:WC+[\\/:])*)`.replace(`WC`,Fa),Ra=`(WCOD+)?`.replace(`WCOD`,Ia),za=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Fa),Ba=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Fa),Va=RegExp(`^`+La+Ra+za+Ba+`$`),Ha=[`material`,`materials`,`bones`,`map`],Ua=class{constructor(e,t,n){let r=n||Wa.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Wa=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Pa,``)}static parseTrackName(e){let t=Va.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Ha.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){H(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){U(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){U(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){U(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){U(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){U(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){U(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){U(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;U(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){U(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){U(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Wa.Composite=Ua,Wa.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Wa.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Wa.prototype.GetterByBindingType=[Wa.prototype._getValue_direct,Wa.prototype._getValue_array,Wa.prototype._getValue_arrayElement,Wa.prototype._getValue_toArray],Wa.prototype.SetterByBindingTypeAndVersioning=[[Wa.prototype._setValue_direct,Wa.prototype._setValue_direct_setNeedsUpdate,Wa.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Wa.prototype._setValue_array,Wa.prototype._setValue_array_setNeedsUpdate,Wa.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Wa.prototype._setValue_arrayElement,Wa.prototype._setValue_arrayElement_setNeedsUpdate,Wa.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Wa.prototype._setValue_fromArray,Wa.prototype._setValue_fromArray_setNeedsUpdate,Wa.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}};function Ga(e,t,n,r){let i=Ka(r);switch(n){case fe:return e*t;case ge:return e*t/i.components*i.byteLength;case _e:return e*t/i.components*i.byteLength;case ve:return e*t*2/i.components*i.byteLength;case ye:return e*t*2/i.components*i.byteLength;case pe:return e*t*3/i.components*i.byteLength;case L:return e*t*4/i.components*i.byteLength;case be:return e*t*4/i.components*i.byteLength;case xe:case Se:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ce:case we:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ee:case Oe:return Math.max(e,16)*Math.max(t,8)/4;case Te:case De:return Math.max(e,8)*Math.max(t,8)/2;case ke:case Ae:case je:case Me:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case R:case Ne:case z:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Pe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case B:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case V:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Fe:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Ie:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Le:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Re:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case ze:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Be:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Ve:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case He:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Ue:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case We:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Ge:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ke:case qe:case Je:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Ye:case Xe:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Ze:case Qe:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Ka(e){switch(e){case ee:case te:return{byteLength:1,components:1};case re:case ne:case se:return{byteLength:2,components:1};case I:case ce:return{byteLength:2,components:4};case ae:case ie:case oe:return{byteLength:4,components:1};case ue:case de:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?H(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function qa(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Ja(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var X={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Z={common:{diffuse:{value:new er(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new q},alphaMap:{value:null},alphaMapTransform:{value:new q},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new q}},envmap:{envMap:{value:null},envMapRotation:{value:new q},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new q}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new q}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new q},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new q},normalScale:{value:new G(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new q},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new q}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new q}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new q}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new er(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new K},probesMax:{value:new K},probesResolution:{value:new K}},points:{diffuse:{value:new er(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new q},alphaTest:{value:0},uvTransform:{value:new q}},sprite:{diffuse:{value:new er(16777215)},opacity:{value:1},center:{value:new G(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new q},alphaMap:{value:null},alphaMapTransform:{value:new q},alphaTest:{value:0}}},Ya={basic:{uniforms:Li([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.fog]),vertexShader:X.meshbasic_vert,fragmentShader:X.meshbasic_frag},lambert:{uniforms:Li([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,Z.lights,{emissive:{value:new er(0)},envMapIntensity:{value:1}}]),vertexShader:X.meshlambert_vert,fragmentShader:X.meshlambert_frag},phong:{uniforms:Li([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,Z.lights,{emissive:{value:new er(0)},specular:{value:new er(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:X.meshphong_vert,fragmentShader:X.meshphong_frag},standard:{uniforms:Li([Z.common,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.roughnessmap,Z.metalnessmap,Z.fog,Z.lights,{emissive:{value:new er(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:X.meshphysical_vert,fragmentShader:X.meshphysical_frag},toon:{uniforms:Li([Z.common,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.gradientmap,Z.fog,Z.lights,{emissive:{value:new er(0)}}]),vertexShader:X.meshtoon_vert,fragmentShader:X.meshtoon_frag},matcap:{uniforms:Li([Z.common,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,{matcap:{value:null}}]),vertexShader:X.meshmatcap_vert,fragmentShader:X.meshmatcap_frag},points:{uniforms:Li([Z.points,Z.fog]),vertexShader:X.points_vert,fragmentShader:X.points_frag},dashed:{uniforms:Li([Z.common,Z.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:X.linedashed_vert,fragmentShader:X.linedashed_frag},depth:{uniforms:Li([Z.common,Z.displacementmap]),vertexShader:X.depth_vert,fragmentShader:X.depth_frag},normal:{uniforms:Li([Z.common,Z.bumpmap,Z.normalmap,Z.displacementmap,{opacity:{value:1}}]),vertexShader:X.meshnormal_vert,fragmentShader:X.meshnormal_frag},sprite:{uniforms:Li([Z.sprite,Z.fog]),vertexShader:X.sprite_vert,fragmentShader:X.sprite_frag},background:{uniforms:{uvTransform:{value:new q},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:X.background_vert,fragmentShader:X.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new q}},vertexShader:X.backgroundCube_vert,fragmentShader:X.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:X.cube_vert,fragmentShader:X.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:X.equirect_vert,fragmentShader:X.equirect_frag},distance:{uniforms:Li([Z.common,Z.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:X.distance_vert,fragmentShader:X.distance_frag},shadow:{uniforms:Li([Z.lights,Z.fog,{color:{value:new er(0)},opacity:{value:1}}]),vertexShader:X.shadow_vert,fragmentShader:X.shadow_frag}};Ya.physical={uniforms:Li([Ya.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new q},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new q},clearcoatNormalScale:{value:new G(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new q},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new q},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new q},sheen:{value:0},sheenColor:{value:new er(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new q},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new q},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new q},transmissionSamplerSize:{value:new G},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new q},attenuationDistance:{value:0},attenuationColor:{value:new er(0)},specularColor:{value:new er(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new q},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new q},anisotropyVector:{value:new G},anisotropyMap:{value:null},anisotropyMapTransform:{value:new q}}]),vertexShader:X.meshphysical_vert,fragmentShader:X.meshphysical_frag};var Xa={r:0,b:0,g:0},Za=new yn,Qa=new q;Qa.set(-1,0,0,0,1,0,0,0,1);function $a(e,t,n,r,i,a){let o=new er(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new bi(new Ni(1,1,1),new Wi({name:`BackgroundCubeMaterial`,uniforms:Ii(Ya.backgroundCube.uniforms),vertexShader:Ya.backgroundCube.vertexShader,fragmentShader:Ya.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Za.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Qa),l.material.toneMapped=J.getTransfer(i.colorSpace)!==ut,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new bi(new Pi(2,2),new Wi({name:`BackgroundMaterial`,uniforms:Ii(Ya.background.uniforms),vertexShader:Ya.background.vertexShader,fragmentShader:Ya.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=J.getTransfer(i.colorSpace)!==ut,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Xa,Bi(e)),n.buffers.color.setClear(Xa.r,Xa.g,Xa.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function eo(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function to(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function no(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(H(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&H(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function ro(e){let t=this,n=null,r=0,i=!1,a=!1,o=new ei,s=new q,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var io=4,ao=6,oo=20,so=256,co=new Oa,lo=new er,uo=null,fo=0,po=0,mo=!1,ho=new K,go=new K,_o=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=ho}=i;uo=this._renderer.getRenderTarget(),fo=this._renderer.getActiveCubeFace(),po=this._renderer.getActiveMipmapLevel(),mo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Co(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(uo,fo,po),this._renderer.xr.enabled=mo,e.scissorTest=!1,bo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),uo=this._renderer.getRenderTarget(),fo=this._renderer.getActiveCubeFace(),po=this._renderer.getActiveMipmapLevel(),mo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:N,minFilter:N,generateMipmaps:!1,type:se,format:L,colorSpace:ct,depthBuffer:!1},r=yo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yo(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=vo(r)),this._blurMaterial=So(r,e,t),this._ggxMaterial=xo(r,e,t)}return r}_compileMaterial(e){let t=new bi(new Xr,e);this._renderer.compile(t,co)}_sceneToCubeUV(e,t,n,r,i){let a=new Da(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(lo),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new bi(new Ni,new ci({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(lo),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;bo(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=wo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Co());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;bo(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,co)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-io?n-d+io:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,bo(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,co),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,bo(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,co)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];bo(t,3*l*(r>this._lodMax-io?r-this._lodMax+io:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,co)}};function vo(e){let t=[],n=[],r=e,i=e-io+1+ao;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?go.set(1,r,n):e===1?go.set(-n,1,-r):e===2?go.set(-n,r,1):e===3?go.set(-1,r,-n):e===4?go.set(-n,-1,r):go.set(n,r,-1),go.toArray(l,(e*6+t)*3)}}let u=new Xr;u.setAttribute(`position`,new Fr(c,3)),u.setAttribute(`outputDirection`,new Fr(l,3)),n.push(new bi(u,null)),r>io&&r--}return{lodMeshes:n,sizeLods:t}}function yo(e,t,n){let r=new gn(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function bo(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function xo(e,t,n){return new Wi({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:so,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:To(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function So(e,t,n){return new Wi({name:`SphericalGaussianBlur`,defines:{SAMPLES:oo,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:To(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Co(){return new Wi({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:To(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function wo(){return new Wi({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:To(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function To(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Eo=class extends gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ki(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ni(5,5,5),i=new Wi({name:`CubemapFromEquirect`,uniforms:Ii(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new bi(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=N),new ja(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Do(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Eo(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new _o(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new _o(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Oo(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&xt(`WebGLRenderer: `+e+` extension not supported.`),t}}}function ko(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Lr:Ir)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Ao(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function jo(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:U(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Mo(e,t,n){let r=new WeakMap,i=new Y;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new _n(h,p,m,u);g.type=oe,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new G(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function No(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Po={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Fo(e,t,n,r,i,a){let o=new gn(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new Xr;l.setAttribute(`position`,new Rr([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new Rr([0,2,0,0,2,0],2));let u=new Gi({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new bi(l,u),f=new Oa(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new gn(t,n,{type:se,depthBuffer:!1,stencilBuffer:!1}),c=new gn(t,n,{type:se,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},J.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=Po[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Io=new mn,Lo=new Ai(1,1),Ro=new _n,zo=new vn,Bo=new ki,Vo=[],Ho=[],Uo=new Float32Array(16),Wo=new Float32Array(9),Go=new Float32Array(4);function Ko(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Vo[i];if(a===void 0&&(a=new Float32Array(i),Vo[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function qo(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Jo(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Yo(e,t){let n=Ho[t];n===void 0&&(n=new Int32Array(t),Ho[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Xo(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Zo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(qo(n,t))return;e.uniform2fv(this.addr,t),Jo(n,t)}}function Qo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(qo(n,t))return;e.uniform3fv(this.addr,t),Jo(n,t)}}function $o(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(qo(n,t))return;e.uniform4fv(this.addr,t),Jo(n,t)}}function es(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(qo(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Jo(n,t)}else{if(qo(n,r))return;Go.set(r),e.uniformMatrix2fv(this.addr,!1,Go),Jo(n,r)}}function ts(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(qo(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Jo(n,t)}else{if(qo(n,r))return;Wo.set(r),e.uniformMatrix3fv(this.addr,!1,Wo),Jo(n,r)}}function ns(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(qo(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Jo(n,t)}else{if(qo(n,r))return;Uo.set(r),e.uniformMatrix4fv(this.addr,!1,Uo),Jo(n,r)}}function rs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function is(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(qo(n,t))return;e.uniform2iv(this.addr,t),Jo(n,t)}}function as(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(qo(n,t))return;e.uniform3iv(this.addr,t),Jo(n,t)}}function os(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(qo(n,t))return;e.uniform4iv(this.addr,t),Jo(n,t)}}function ss(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function cs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(qo(n,t))return;e.uniform2uiv(this.addr,t),Jo(n,t)}}function ls(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(qo(n,t))return;e.uniform3uiv(this.addr,t),Jo(n,t)}}function us(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(qo(n,t))return;e.uniform4uiv(this.addr,t),Jo(n,t)}}function ds(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Lo.compareFunction=n.isReversedDepthBuffer()?518:515,a=Lo):a=Io,n.setTexture2D(t||a,i)}function fs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||zo,i)}function ps(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Bo,i)}function ms(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Ro,i)}function hs(e){switch(e){case 5126:return Xo;case 35664:return Zo;case 35665:return Qo;case 35666:return $o;case 35674:return es;case 35675:return ts;case 35676:return ns;case 5124:case 35670:return rs;case 35667:case 35671:return is;case 35668:case 35672:return as;case 35669:case 35673:return os;case 5125:return ss;case 36294:return cs;case 36295:return ls;case 36296:return us;case 35678:case 36198:case 36298:case 36306:case 35682:return ds;case 35679:case 36299:case 36307:return fs;case 35680:case 36300:case 36308:case 36293:return ps;case 36289:case 36303:case 36311:case 36292:return ms}}function gs(e,t){e.uniform1fv(this.addr,t)}function _s(e,t){let n=Ko(t,this.size,2);e.uniform2fv(this.addr,n)}function vs(e,t){let n=Ko(t,this.size,3);e.uniform3fv(this.addr,n)}function ys(e,t){let n=Ko(t,this.size,4);e.uniform4fv(this.addr,n)}function bs(e,t){let n=Ko(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function xs(e,t){let n=Ko(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Ss(e,t){let n=Ko(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Cs(e,t){e.uniform1iv(this.addr,t)}function ws(e,t){e.uniform2iv(this.addr,t)}function Ts(e,t){e.uniform3iv(this.addr,t)}function Es(e,t){e.uniform4iv(this.addr,t)}function Ds(e,t){e.uniform1uiv(this.addr,t)}function Os(e,t){e.uniform2uiv(this.addr,t)}function ks(e,t){e.uniform3uiv(this.addr,t)}function As(e,t){e.uniform4uiv(this.addr,t)}function js(e,t,n){let r=this.cache,i=t.length,a=Yo(n,i);qo(r,a)||(e.uniform1iv(this.addr,a),Jo(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Lo:Io;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Ms(e,t,n){let r=this.cache,i=t.length,a=Yo(n,i);qo(r,a)||(e.uniform1iv(this.addr,a),Jo(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||zo,a[e])}function Ns(e,t,n){let r=this.cache,i=t.length,a=Yo(n,i);qo(r,a)||(e.uniform1iv(this.addr,a),Jo(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Bo,a[e])}function Ps(e,t,n){let r=this.cache,i=t.length,a=Yo(n,i);qo(r,a)||(e.uniform1iv(this.addr,a),Jo(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Ro,a[e])}function Fs(e){switch(e){case 5126:return gs;case 35664:return _s;case 35665:return vs;case 35666:return ys;case 35674:return bs;case 35675:return xs;case 35676:return Ss;case 5124:case 35670:return Cs;case 35667:case 35671:return ws;case 35668:case 35672:return Ts;case 35669:case 35673:return Es;case 5125:return Ds;case 36294:return Os;case 36295:return ks;case 36296:return As;case 35678:case 36198:case 36298:case 36306:case 35682:return js;case 35679:case 36299:case 36307:return Ms;case 35680:case 36300:case 36308:case 36293:return Ns;case 36289:case 36303:case 36311:case 36292:return Ps}}var Is=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=hs(t.type)}},Ls=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Fs(t.type)}},Rs=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},zs=/(\w+)(\])?(\[|\.)?/g;function Bs(e,t){e.seq.push(t),e.map[t.id]=t}function Vs(e,t,n){let r=e.name,i=r.length;for(zs.lastIndex=0;;){let a=zs.exec(r),o=zs.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Bs(n,l===void 0?new Is(s,e,t):new Ls(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Rs(s),Bs(n,e)),n=e}}}var Hs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Vs(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Us(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Ws=37297,Gs=0;function Ks(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var qs=new q;function Js(e){J._getMatrix(qs,J.workingColorSpace,e);let t=`mat3( ${qs.elements.map(e=>e.toFixed(4))} )`;switch(J.getTransfer(e)){case lt:return[t,`LinearTransferOETF`];case ut:return[t,`sRGBTransferOETF`];default:return H(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Ys(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Ks(e.getShaderSource(t),r)}return i}function Xs(e,t){let n=Js(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Zs={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Qs(e,t){let n=Zs[t];return n===void 0?(H(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var $s=new K;function ec(){return J.getLuminanceCoefficients($s),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${$s.x.toFixed(4)}, ${$s.y.toFixed(4)}, ${$s.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function tc(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(ic).join(`
`)}function nc(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function rc(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function ic(e){return e!==``}function ac(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function oc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var sc=/^[ \t]*#include +<([\w\d./]+)>/gm;function cc(e){return e.replace(sc,uc)}var lc=new Map;function uc(e,t){let n=X[t];if(n===void 0){let e=lc.get(t);if(e!==void 0)n=X[e],H(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return cc(n)}var dc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fc(e){return e.replace(dc,pc)}function pc(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function mc(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var hc={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function gc(e){return hc[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var _c={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function vc(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:_c[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var yc={302:`ENVMAP_MODE_REFRACTION`};function bc(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:yc[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var xc={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Sc(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:xc[e.combine]||`ENVMAP_BLENDING_NONE`}function Cc(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function wc(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=gc(n),l=vc(n),u=bc(n),d=Sc(n),f=Cc(n),p=tc(n),m=nc(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(ic).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(ic).join(`
`),_.length>0&&(_+=`
`)):(g=[mc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(ic).join(`
`),_=[mc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:X.tonemapping_pars_fragment,n.toneMapping===0?``:Qs(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,X.colorspace_pars_fragment,Xs(`linearToOutputTexel`,n.outputColorSpace),ec(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(ic).join(`
`)),o=cc(o),o=ac(o,n),o=oc(o,n),s=cc(s),s=ac(s,n),s=oc(s,n),o=fc(o),s=fc(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Us(i,i.VERTEX_SHADER,y),S=Us(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Ys(i,x,`vertex`),n=Ys(i,S,`fragment`);U(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):H(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Hs(i,h),T=rc(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Ws)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Gs++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Tc=0,Ec=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Dc(e),t.set(e,n)),n}},Dc=class{constructor(e){this.id=Tc++,this.code=e,this.usedTimes=0}};function Oc(e){return e===1030||e===37490||e===36285}function kc(e,t,n,r,i,a){let o=new An,s=new Ec,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&H(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=Ya[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let j=e.getRenderTarget(),M=e.state.buffers.depth.getReversed(),N=h.isInstancedMesh===!0,P=h.isBatchedMesh===!0,F=!!i.map,ee=!!i.matcap,te=!!x,ne=!!i.aoMap,re=!!i.lightMap,ie=!!i.bumpMap&&i.wireframe===!1,ae=!!i.normalMap,oe=!!i.displacementMap,se=!!i.emissiveMap,I=!!i.metalnessMap,ce=!!i.roughnessMap,le=i.anisotropy>0,ue=i.clearcoat>0,de=i.dispersion>0,fe=i.retroreflectivity>0,pe=i.iridescence>0,L=i.sheen>0,me=i.transmission>0,he=le&&!!i.anisotropyMap,ge=ue&&!!i.clearcoatMap,_e=ue&&!!i.clearcoatNormalMap,ve=ue&&!!i.clearcoatRoughnessMap,ye=pe&&!!i.iridescenceMap,be=pe&&!!i.iridescenceThicknessMap,xe=L&&!!i.sheenColorMap,Se=L&&!!i.sheenRoughnessMap,Ce=!!i.specularMap,we=!!i.specularColorMap,Te=!!i.specularIntensityMap,Ee=me&&!!i.transmissionMap,De=me&&!!i.thicknessMap,Oe=!!i.gradientMap,ke=!!i.alphaMap,Ae=i.alphaTest>0,R=!!i.alphaHash,je=!!i.extensions,Me=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Me=e.toneMapping);let Ne={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:P,batchingColor:P&&h._colorsTexture!==null,instancing:N,instancingColor:N&&h.instanceColor!==null,instancingMorph:N&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:J.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:F,matcap:ee,envMap:te,envMapMode:te&&x.mapping,envMapCubeUVHeight:S,aoMap:ne,lightMap:re,bumpMap:ie,normalMap:ae,displacementMap:oe,emissiveMap:se,normalMapObjectSpace:ae&&i.normalMapType===1,normalMapTangentSpace:ae&&i.normalMapType===0,packedNormalMap:ae&&i.normalMapType===0&&Oc(i.normalMap.format),metalnessMap:I,roughnessMap:ce,anisotropy:le,anisotropyMap:he,clearcoat:ue,clearcoatMap:ge,clearcoatNormalMap:_e,clearcoatRoughnessMap:ve,dispersion:de,retroreflection:fe,iridescence:pe,iridescenceMap:ye,iridescenceThicknessMap:be,sheen:L,sheenColorMap:xe,sheenRoughnessMap:Se,specularMap:Ce,specularColorMap:we,specularIntensityMap:Te,transmission:me,transmissionMap:Ee,thicknessMap:De,gradientMap:Oe,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:ke,alphaTest:Ae,alphaHash:R,combine:i.combine,mapUv:F&&m(i.map.channel),aoMapUv:ne&&m(i.aoMap.channel),lightMapUv:re&&m(i.lightMap.channel),bumpMapUv:ie&&m(i.bumpMap.channel),normalMapUv:ae&&m(i.normalMap.channel),displacementMapUv:oe&&m(i.displacementMap.channel),emissiveMapUv:se&&m(i.emissiveMap.channel),metalnessMapUv:I&&m(i.metalnessMap.channel),roughnessMapUv:ce&&m(i.roughnessMap.channel),anisotropyMapUv:he&&m(i.anisotropyMap.channel),clearcoatMapUv:ge&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:_e&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:be&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:Se&&m(i.sheenRoughnessMap.channel),specularMapUv:Ce&&m(i.specularMap.channel),specularColorMapUv:we&&m(i.specularColorMap.channel),specularIntensityMapUv:Te&&m(i.specularIntensityMap.channel),transmissionMapUv:Ee&&m(i.transmissionMap.channel),thicknessMapUv:De&&m(i.thicknessMap.channel),alphaMapUv:ke&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(ae||le),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(F||ke),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&ae===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:M,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Me,decodeVideoTexture:F&&i.map.isVideoTexture===!0&&J.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:se&&i.emissiveMap.isVideoTexture===!0&&J.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:je&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(je&&i.extensions.multiDraw===!0||P)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Ne.vertexUv1s=c.has(1),Ne.vertexUv2s=c.has(2),Ne.vertexUv3s=c.has(3),c.clear(),Ne}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Ya[t];n=Vi.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new wc(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Ac(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function jc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Mc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Nc(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||jc),r.length>1&&r.sort(t||Mc),i.length>1&&i.sort(t||Mc)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Pc(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Nc,e.set(t,[i])):n>=r.length?(i=new Nc,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Fc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new K,color:new er};break;case`SpotLight`:n={position:new K,direction:new K,color:new er,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new K,color:new er,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new K,skyColor:new er,groundColor:new er};break;case`RectAreaLight`:n={color:new er,position:new K,halfWidth:new K,halfHeight:new K}}return e[t.id]=n,n}}}function Ic(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Lc=0;function Rc(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function zc(e){let t=new Fc,n=Ic(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new K);let i=new K,a=new yn,o=new yn;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Rc);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Z.LTC_FLOAT_1,r.rectAreaLTC2=Z.LTC_FLOAT_2):(r.rectAreaLTC1=Z.LTC_HALF_1,r.rectAreaLTC2=Z.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Lc++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Bc(e){let t=new zc(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Vc(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Bc(e),t.set(n,[a])):r>=i.length?(a=new Bc(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Hc=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Uc=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Wc=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],Gc=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],Kc=new yn,qc=new K,Jc=new K;function Yc(e,t,n){let r=new Di,i=new G,a=new G,o=new Y,s=new Ki,c=new qi,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new Wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new G},radius:{value:4}},vertexShader:Hc,fragmentShader:Uc}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new Xr;m.setAttribute(`position`,new Fr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new bi(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(H(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){H(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){H(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new gn(i.x,i.y,{format:ve,type:se,minFilter:N,magFilter:N,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new Ai(i.x,i.y,oe),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=me,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=A,d.map.depthTexture.magFilter=A}else l.isPointLight?(d.map=new Eo(i.x),d.map.depthTexture=new ji(i.x,ae)):(d.map=new gn(i.x,i.y),d.map.depthTexture=new Ai(i.x,i.y,ae)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=me,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=N,d.map.depthTexture.magFilter=N):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=A,d.map.depthTexture.magFilter=A);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),qc.setFromMatrixPosition(l.matrixWorld),e.position.copy(qc),Jc.copy(e.position),Jc.add(Wc[t]),e.up.copy(Gc[t]),e.lookAt(Jc),e.updateMatrixWorld(),n.makeTranslation(-qc.x,-qc.y,-qc.z),Kc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Kc,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),b(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new gn(i.x,i.y,{format:ve,type:se}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Xc(e,t){function n(){let t=!1,n=new Y,r=null,i=new Y(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?I(e.DEPTH_TEST):ce(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=Ct[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?I(e.STENCIL_TEST):ce(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new er(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,P=0,F=e.getParameter(e.VERSION);F.indexOf(`WebGL`)===-1?F.indexOf(`OpenGL ES`)!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),N=P>=2):(P=parseFloat(/^WebGL (\d)/.exec(F)[1]),N=P>=1);let ee=null,te={},ne=e.getParameter(e.SCISSOR_BOX),re=e.getParameter(e.VIEWPORT),ie=new Y().fromArray(ne),ae=new Y().fromArray(re);function oe(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let se={};se[e.TEXTURE_2D]=oe(e.TEXTURE_2D,e.TEXTURE_2D,1),se[e.TEXTURE_CUBE_MAP]=oe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[e.TEXTURE_2D_ARRAY]=oe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),se[e.TEXTURE_3D]=oe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),I(e.DEPTH_TEST),o.setFunc(3),he(!1),ge(1),I(e.CULL_FACE),L(0);function I(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function ce(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function le(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function ue(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function de(t){return h!==t&&(e.useProgram(t),h=t,!0)}let fe={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};fe[103]=e.MIN,fe[104]=e.MAX;let pe={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function L(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(ce(e.BLEND),g=!1);return}if(g===!1&&(I(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:U(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:U(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:U(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:U(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(fe[n],fe[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(pe[r],pe[i],pe[o],pe[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function me(t,n){t.side===2?ce(e.CULL_FACE):I(e.CULL_FACE);let r=t.side===1;n&&(r=!r),he(r),t.blending===1&&t.transparent===!1?L(0):L(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),ve(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?I(e.SAMPLE_ALPHA_TO_COVERAGE):ce(e.SAMPLE_ALPHA_TO_COVERAGE)}function he(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ge(t){t===0?ce(e.CULL_FACE):(I(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function _e(t){t!==k&&(N&&e.lineWidth(t),k=t)}function ve(t,n,r){t?(I(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):ce(e.POLYGON_OFFSET_FILL)}function ye(t){t?I(e.SCISSOR_TEST):ce(e.SCISSOR_TEST)}function be(t){t===void 0&&(t=e.TEXTURE0+M-1),ee!==t&&(e.activeTexture(t),ee=t)}function xe(t,n,r){r===void 0&&(r=ee===null?e.TEXTURE0+M-1:ee);let i=te[r];i===void 0&&(i={type:void 0,texture:void 0},te[r]=i),(i.type!==t||i.texture!==n)&&(ee!==r&&(e.activeTexture(r),ee=r),e.bindTexture(t,n||se[t]),i.type=t,i.texture=n)}function Se(){let t=te[ee];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Ce(){try{e.compressedTexImage2D(...arguments)}catch(e){U(`WebGLState:`,e)}}function we(){try{e.compressedTexImage3D(...arguments)}catch(e){U(`WebGLState:`,e)}}function Te(){try{e.texSubImage2D(...arguments)}catch(e){U(`WebGLState:`,e)}}function Ee(){try{e.texSubImage3D(...arguments)}catch(e){U(`WebGLState:`,e)}}function De(){try{e.compressedTexSubImage2D(...arguments)}catch(e){U(`WebGLState:`,e)}}function Oe(){try{e.compressedTexSubImage3D(...arguments)}catch(e){U(`WebGLState:`,e)}}function ke(){try{e.texStorage2D(...arguments)}catch(e){U(`WebGLState:`,e)}}function Ae(){try{e.texStorage3D(...arguments)}catch(e){U(`WebGLState:`,e)}}function R(){try{e.texImage2D(...arguments)}catch(e){U(`WebGLState:`,e)}}function je(){try{e.texImage3D(...arguments)}catch(e){U(`WebGLState:`,e)}}function Me(t){return d[t]===void 0?e.getParameter(t):d[t]}function Ne(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function z(t){ie.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ie.copy(t))}function Pe(t){ae.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ae.copy(t))}function B(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function V(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Fe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},ee=null,te={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new er(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ie.set(0,0,e.canvas.width,e.canvas.height),ae.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:I,disable:ce,bindFramebuffer:le,drawBuffers:ue,useProgram:de,setBlending:L,setMaterial:me,setFlipSided:he,setCullFace:ge,setLineWidth:_e,setPolygonOffset:ve,setScissorTest:ye,activeTexture:be,bindTexture:xe,unbindTexture:Se,compressedTexImage2D:Ce,compressedTexImage3D:we,texImage2D:R,texImage3D:je,pixelStorei:Ne,getParameter:Me,updateUBOMapping:B,uniformBlockBinding:V,texStorage2D:ke,texStorage3D:Ae,texSubImage2D:Te,texSubImage3D:Ee,compressedTexSubImage2D:De,compressedTexSubImage3D:Oe,scissor:z,viewport:Pe,reset:Fe}}function Zc(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new G,u=new WeakMap,d=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function h(e,t){return m?new OffscreenCanvas(e,t):gt(`canvas`)}function g(e,t,n){let r=1,i=Me(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=h(n,a));let o=t?h(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),H(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&H(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function _(e){return e.generateMipmaps}function v(t){e.generateMipmap(t)}function y(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function b(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];H(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||H(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?lt:J.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function x(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,H(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function S(e,t){return _(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function C(e){let t=e.target;t.removeEventListener(`dispose`,C),T(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&d.delete(t)}function w(e){let t=e.target;t.removeEventListener(`dispose`,w),ee(t)}function T(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&E(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function E(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function ee(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let te=0;function ne(){te=0}function re(){return te}function ie(e){te=e}function ae(){let e=te;return e>=i.maxTextures&&H(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),te+=1,e}function oe(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function se(t,i){let a=r.get(t);if(t.isVideoTexture&&R(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)H(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)H(`WebGLRenderer: Texture marked for update but image is incomplete`);else{_e(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function I(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){_e(a,t,i);return}t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function ce(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){_e(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function le(t,i){let a=r.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version){ve(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let ue={[D]:e.REPEAT,[O]:e.CLAMP_TO_EDGE,[k]:e.MIRRORED_REPEAT},de={[A]:e.NEAREST,[j]:e.NEAREST_MIPMAP_NEAREST,[M]:e.NEAREST_MIPMAP_LINEAR,[N]:e.LINEAR,[P]:e.LINEAR_MIPMAP_NEAREST,[F]:e.LINEAR_MIPMAP_LINEAR},fe={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function pe(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&H(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,ue[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,ue[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,ue[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,de[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,de[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,fe[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function L(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,C));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=oe(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&E(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function me(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ge(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=me(n.start,r.width,4),c=me(t.start,r.width,4);n.start<=i+1&&a===c&&me(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function _e(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=L(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=J.getPrimaries(J.workingColorSpace),r=o.colorSpace===``?null:J.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=g(o.image,!1,i.maxTextureSize);t=je(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=b(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);pe(c,o);let h,y=o.mipmaps,C=o.isVideoTexture!==!0,w=f.__version===void 0||l===!0,T=u.dataReady,E=S(o,t);if(o.isDepthTexture)m=x(o.format===he,o.type),w&&(C?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(y.length>0){C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else C?(w&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&ge(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){C&&w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,y[0].width,y[0].height,t.depth);for(let i=0,a=y.length;i<a;i++)if(h=y[i],o.format!==1023){if(r!==null){if(C){if(T){if(o.layerUpdates.size>0){let t=Ga(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else H(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else C?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],o.format===1023?C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?H(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):C?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(C){if(w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=Ga(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)C?(w&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(w){if(C)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(y.length>0){if(C&&w){let t=Me(y[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(C){if(w){let r=Me(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);_(o)&&v(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ve(t,o,s){if(o.image.length!==6)return;let c=L(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=J.getPrimaries(J.workingColorSpace),r=o.colorSpace===``?null:J.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=g(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=je(o,m[e]);let h=m[0],y=a.convert(o.format,o.colorSpace),x=a.convert(o.type),C=b(o.internalFormat,y,x,o.normalized,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=S(o,h);pe(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,y,x,i.data):y===null?H(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=Me(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,y,x,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,y,x,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,y,x,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,y,x,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,y,x,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,y,x,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,y,x,i.image[t])}}}_(o)&&v(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ye(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=b(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),Ae(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,ke(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function be(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=x(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Ae(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ke(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,ke(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=b(o.internalFormat,c,l,o.normalized,o.colorSpace);Ae(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ke(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,ke(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function xe(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,C)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),pe(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else se(i.depthTexture,0);let u=l.__webglTexture,d=ke(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)Ae(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)Ae(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Se(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)xe(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?xe(i.__webglFramebuffer[0],t,0):xe(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),be(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),be(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ce(t,n,i){let a=r.get(t);n!==void 0&&ye(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&Se(t)}function we(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,w);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&Ae(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=b(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=ke(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),be(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),pe(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)ye(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else ye(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);_(i)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),pe(c,a),ye(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),_(a)&&v(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),pe(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)ye(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else ye(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);_(i)&&v(r),n.unbindTexture()}t.depthBuffer&&Se(t)}function Te(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(_(a)){let t=y(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),v(t),n.unbindTexture()}}}let Ee=[],De=[];function Oe(t){if(t.samples>0){if(Ae(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(Ee.length=0,De.length=0,Ee.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(Ee.push(l),De.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,De)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ee))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function ke(e){return Math.min(i.maxSamples,e.samples)}function Ae(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function R(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function je(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(J.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&H(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):U(`WebGLTextures: Unsupported texture color space:`,n)),t}function Me(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=ae,this.resetTextureUnits=ne,this.getTextureUnits=re,this.setTextureUnits=ie,this.setTexture2D=se,this.setTexture2DArray=I,this.setTexture3D=ce,this.setTextureCube=le,this.rebindTextures=Ce,this.setupRenderTarget=we,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Ae,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Qc(e,t){function n(n,r=``){let i,a=J.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var $c=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,el=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,tl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Mi(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Wi({vertexShader:$c,fragmentShader:el,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new bi(new Pi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},nl=class extends wt{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new tl,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new G,C=null,w=null,T=new Da;T.viewport=new Y;let E=new Da;E.viewport=new Y;let D=[T,E],O=new Ma,k=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new Yn,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new Yn,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new Yn,b[e]=t),t.getHandSpace()};function j(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function M(){r.removeEventListener(`select`,j),r.removeEventListener(`selectstart`,j),r.removeEventListener(`selectend`,j),r.removeEventListener(`squeeze`,j),r.removeEventListener(`squeezestart`,j),r.removeEventListener(`squeezeend`,j),r.removeEventListener(`end`,M),r.removeEventListener(`inputsourceschange`,N);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}k=null,A=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,se.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&H(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&H(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,j),r.addEventListener(`selectstart`,j),r.addEventListener(`selectend`,j),r.addEventListener(`squeeze`,j),r.addEventListener(`squeezestart`,j),r.addEventListener(`squeezeend`,j),r.addEventListener(`end`,M),r.addEventListener(`inputsourceschange`,N),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?he:me,a=_.stencil?le:ae);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new gn(d.textureWidth,d.textureHeight,{format:L,type:ee,depthTexture:new Ai(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new gn(f.framebufferWidth,f.framebufferHeight,{format:L,type:ee,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),se.setContext(r),se.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function N(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let P=new K,F=new K;function te(e,t,n){P.setFromMatrixPosition(t.matrixWorld),F.setFromMatrixPosition(n.matrixWorld);let r=P.distanceTo(F),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ne(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=E.near=T.near=t,O.far=E.far=T.far=n,(k!==O.near||A!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,A=O.far),O.layers.mask=e.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;ne(O,i);for(let e=0;e<a.length;e++)ne(a[e],i);a.length===2?te(O,T,E):O.projectionMatrix.copy(T.projectionMatrix),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),re(e,O,i)};function re(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Ot*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let ie=null;function oe(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=D[n];o===void 0&&(o=new Da,o.layers.enable(n),o.viewport=new Y,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new Mi,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ie&&ie(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let se=new qa;se.setAnimationLoop(oe),this.setAnimationLoop=function(e){ie=e},this.dispose=function(){}}},rl=new yn,il=new q;il.set(-1,0,0,0,1,0,0,0,1);function al(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Bi(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(rl.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(il),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function ol(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return U(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?H(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):H(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var sl=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),cl=null;function ll(){return cl===null&&(cl=new Ci(sl,16,16,ve,se),cl.name=`DFG_LUT`,cl.minFilter=N,cl.magFilter=N,cl.wrapS=O,cl.wrapT=O,cl.generateMipmaps=!1,cl.needsUpdate=!0),cl}var ul=class{constructor(e={}){let{canvas:t=_t(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=ee}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([be,ye,_e]),g=new Set([ee,ae,re,le,I,ce]),_=new Uint32Array(4),v=new Int32Array(4),y=new K,b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,k=null,A=null;this._outputColorSpace=st;let j=0,M=0,N=null,P=-1,te=null,ne=new Y,ie=new Y,oe=null,ue=new er(0),de=0,fe=t.width,pe=t.height,L=1,me=null,he=null,ge=new Y(0,0,fe,pe),ve=new Y(0,0,fe,pe),xe=!1,Se=new Di,Ce=!1,we=!1,Te=new yn,Ee=new K,De=new Y,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ke=!1;function Ae(){return N===null?L:1}let R=n;function je(e,n){return t.getContext(e,n)}let Me,Ne,z,Pe,B,V,Fe,Ie,Le,Re,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,et,!1),t.addEventListener(`webglcontextrestored`,tt,!1),t.addEventListener(`webglcontextcreationerror`,nt,!1),R===null){let t=`webgl2`;if(R=je(t,e),R===null)throw je(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}Qe()}catch(e){throw t.removeEventListener(`webglcontextlost`,et,!1),t.removeEventListener(`webglcontextrestored`,tt,!1),t.removeEventListener(`webglcontextcreationerror`,nt,!1),U(`WebGLRenderer: `+e.message),e}function Qe(){Me=new Oo(R),Me.init(),Ye=new Qc(R,Me),Ne=new no(R,Me,e,Ye),z=new Xc(R,Me),Ne.reversedDepthBuffer&&d&&z.buffers.depth.setReversed(!0),O=R.createFramebuffer(),k=R.createFramebuffer(),A=R.createFramebuffer(),Pe=new jo(R),B=new Ac,V=new Zc(R,Me,z,B,Ne,Ye,Pe),Fe=new Do(T),Ie=new Ja(R),Xe=new eo(R,Ie),Le=new ko(R,Ie,Pe,Xe),Re=new No(R,Le,Ie,Xe,Pe),Ke=new Mo(R,Ne,V),Ue=new ro(B),ze=new kc(T,Fe,Me,Ne,Xe,Ue),Be=new al(T,B),Ve=new Pc,He=new Vc(Me),Ge=new $a(T,Fe,z,Re,p,s),We=new Yc(T,Re,Ne),Ze=new ol(R,Pe,Ne,z),qe=new to(R,Me,Pe),Je=new Ao(R,Me,Pe),Pe.programs=ze.programs,T.capabilities=Ne,T.extensions=Me,T.properties=B,T.renderLists=Ve,T.shadowMap=We,T.state=z,T.info=Pe}m!==1009&&(w=new Fo(m,t.width,t.height,o,r,i));let $e=new nl(T,R);this.xr=$e,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let e=Me.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Me.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(e){e!==void 0&&(L=e,this.setSize(fe,pe,!1))},this.getSize=function(e){return e.set(fe,pe)},this.setSize=function(e,n,r=!0){if($e.isPresenting){H(`WebGLRenderer: Can't change size while VR device is presenting.`);return}fe=e,pe=n,t.width=Math.floor(e*L),t.height=Math.floor(n*L),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(fe*L,pe*L).floor()},this.setDrawingBufferSize=function(e,n,r){fe=e,pe=n,L=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009){U(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){H(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(ne)},this.getViewport=function(e){return e.copy(ge)},this.setViewport=function(e,t,n,r){e.isVector4?ge.set(e.x,e.y,e.z,e.w):ge.set(e,t,n,r),z.viewport(ne.copy(ge).multiplyScalar(L).round())},this.getScissor=function(e){return e.copy(ve)},this.setScissor=function(e,t,n,r){e.isVector4?ve.set(e.x,e.y,e.z,e.w):ve.set(e,t,n,r),z.scissor(ie.copy(ve).multiplyScalar(L).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(e){z.setScissorTest(xe=e)},this.setOpaqueSort=function(e){me=e},this.setTransparentSort=function(e){he=e},this.getClearColor=function(e){return e.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor(...arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(N!==null){let t=N.texture.format;e=h.has(t)}if(e){let e=N.texture.type,t=g.has(e),n=Ge.getClearColor(),r=Ge.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,R.clearBufferuiv(R.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,R.clearBufferiv(R.COLOR,0,v))}else r|=R.COLOR_BUFFER_BIT}t&&(r|=R.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&R.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,et,!1),t.removeEventListener(`webglcontextrestored`,tt,!1),t.removeEventListener(`webglcontextcreationerror`,nt,!1),Ge.dispose(),Ve.dispose(),He.dispose(),B.dispose(),Fe.dispose(),Re.dispose(),Xe.dispose(),Ze.dispose(),ze.dispose(),$e.dispose(),$e.removeEventListener(`sessionstart`,ut),$e.removeEventListener(`sessionend`,dt),ft.stop()};function et(e){e.preventDefault(),yt(`WebGLRenderer: Context Lost.`),E=!0}function tt(){yt(`WebGLRenderer: Context Restored.`),E=!1;let e=Pe.autoReset,t=We.enabled,n=We.autoUpdate,r=We.needsUpdate,i=We.type;Qe(),Pe.autoReset=e,We.enabled=t,We.autoUpdate=n,We.needsUpdate=r,We.type=i}function nt(e){U(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function rt(e){let t=e.target;t.removeEventListener(`dispose`,rt),it(t)}function it(e){at(e),B.remove(e)}function at(e){let t=B.get(e).programs;t!==void 0&&(t.forEach(function(e){ze.releaseProgram(e)}),e.isShaderMaterial&&ze.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Oe);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Et(e,t,n,r,i);z.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Le.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Xe.setup(i,r,s,n,c);let h,g=qe;if(c!==null&&(h=Ie.get(c),g=Je,g.setIndex(h)),i.isMesh)r.wireframe===!0?(z.setLineWidth(r.wireframeLinewidth*Ae()),g.setMode(R.LINES)):g.setMode(R.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),z.setLineWidth(e*Ae()),i.isLineSegments?g.setMode(R.LINES):i.isLineLoop?g.setMode(R.LINE_LOOP):g.setMode(R.LINE_STRIP)}else i.isPoints?g.setMode(R.POINTS):i.isSprite&&g.setMode(R.TRIANGLES);if(i.isBatchedMesh){if(Me.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ie.get(c).bytesPerElement:1,o=B.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(R,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function ot(e,t,n,r){D!==null&&e.isNodeMaterial&&D.setObject(r,e),Ce===!0&&Ue.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,xt(e,t,r),e.side=0,e.needsUpdate=!0,xt(e,t,r),e.side=2):xt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),D!==null&&D.renderStart(e,t,n),x=He.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),D!==null&&D.updateLights(x.state.lightsArray),we=this.localClippingEnabled,Ce=Ue.init(this.clippingPlanes,we),Ce===!0&&Ue.setGlobalState(this.clippingPlanes,t),D!==null&&We.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];ot(o,n,t,e),r.add(o)}else ot(i,n,t,e),r.add(i)}}),x=C.pop(),D!==null&&D.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){let t=B.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Me.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let ct=null;function lt(e){ct&&ct(e)}function ut(){ft.stop()}function dt(){ft.start()}let ft=new qa;ft.setAnimationLoop(lt),typeof self<`u`&&ft.setContext(self),this.setAnimationLoop=function(e){ct=e,$e.setAnimationLoop(e),e===null?ft.stop():ft.start()},$e.addEventListener(`sessionstart`,ut),$e.addEventListener(`sessionend`,dt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){U(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=$e.enabled===!0&&$e.isPresenting===!0,r=w!==null&&(N===null||n)&&w.begin(T,N);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),$e.enabled===!0&&$e.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&($e.cameraAutoUpdate===!0&&$e.updateCamera(t),t=$e.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,N),x=He.get(e,C.length),x.init(t),x.state.textureUnits=V.getTextureUnits(),C.push(x),Te.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),Se.setFromProjectionMatrix(Te,pt,t.reversedDepth),we=this.localClippingEnabled,Ce=Ue.init(this.clippingPlanes,we),b=Ve.get(e,S.length),b.init(),S.push(b),$e.enabled===!0&&$e.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&mt(e,t,-1/0,T.sortObjects)}mt(e,t,0,T.sortObjects),b.finish(),D!==null&&D.updateLights(x.state.lightsArray),T.sortObjects===!0&&b.sort(me,he),ke=$e.enabled===!1||$e.isPresenting===!1||$e.hasDepthSensing()===!1,ke&&Ge.addToRenderList(b,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ce===!0&&Ue.beginShadows();let i=x.state.shadowsArray;if(We.render(i,e,t),Ce===!0&&Ue.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];gt(n,r,e,a)}ke&&Ge.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];ht(b,e,n,n.viewport)}}else r.length>0&&gt(n,r,e,t),ke&&Ge.render(e),ht(b,e,t)}N!==null&&M===0&&(V.updateMultisampleRenderTarget(N),V.updateRenderTargetMipmap(N)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),Xe.resetDefaultState(),P=-1,te=null,C.pop(),C.length>0?(x=C[C.length-1],V.setTextureUnits(x.state.textureUnits),Ce===!0&&Ue.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function mt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)x.pushLightProbeGrid(e);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(Se)){r&&De.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Te);let i=Re.update(e),a=e.material;a.visible&&b.push(e,i,a,n,De.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(Se))){let i=Re.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),De.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),De.copy(e.boundingSphere.center)),De.applyMatrix4(e.matrixWorld).applyMatrix4(Te)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,De.z,s,t)}}else a.visible&&b.push(e,i,a,n,De.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)mt(i[e],t,n,r)}function ht(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),Ce===!0&&Ue.setGlobalState(T.clippingPlanes,n),r&&z.viewport(ne.copy(r)),i.length>0&&vt(i,t,n),a.length>0&&vt(a,t,n),o.length>0&&vt(o,t,n),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function gt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=Me.has(`EXT_color_buffer_half_float`)||Me.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new gn(1,1,{generateMipmaps:!0,type:e?se:ee,minFilter:F,samples:Math.max(4,Ne.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:J.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||ne;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(ue),de=T.getClearAlpha(),de<1&&T.setClearColor(16777215,.5),T.clear(),ke&&Ge.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),Ce===!0&&Ue.setGlobalState(T.clippingPlanes,r),vt(e,n,r),V.updateMultisampleRenderTarget(a),V.updateRenderTargetMipmap(a),Me.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,bt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(V.updateMultisampleRenderTarget(a),V.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(ue,de),d!==void 0&&(r.viewport=d),T.toneMapping=u}function vt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&bt(o,t,n,s,l,c)}}function bt(e,t,n,r,i,a){D!==null&&i.isNodeMaterial&&D.setObject(e,i),e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function xt(e,t,n){t.isScene!==!0&&(t=Oe);let r=B.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=ze.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=ze.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Fe.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,rt),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return wt(e,s),d}else s.uniforms=ze.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=ze.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ue.uniform),wt(e,s),r.needsLights=Ot(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=x.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Ct(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Hs.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function wt(e,t){let n=B.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Tt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];y.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(y))return n}return null}function Et(e,t,n,r,i){t.isScene!==!0&&(t=Oe),V.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=N===null?T.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:J.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Fe.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=B.get(r),y=x.state.lights;if(Ce===!0&&(we===!0||e!==te)){let t=e===te&&r.id===P;Ue.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ue.numPlanes||v.numIntersection!==Ue.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=x.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;b===!0&&(S=xt(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,S,v));let C=!1,w=!1,E=!1,O=S.getUniforms(),k=v.uniforms;if(z.useProgram(S.program)&&(C=!0,w=!0,E=!0),r.id!==P&&(P=r.id,w=!0),v.needsLights){let e=Tt(x.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(C||te!==e){z.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),O.setValue(R,`projectionMatrix`,e.projectionMatrix),O.setValue(R,`viewMatrix`,e.matrixWorldInverse);let t=O.map.cameraPosition;t!==void 0&&t.setValue(R,Ee.setFromMatrixPosition(e.matrixWorld)),Ne.logarithmicDepthBuffer&&O.setValue(R,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&O.setValue(R,`isOrthographic`,e.isOrthographicCamera===!0),te!==e&&(te=e,w=!0,E=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&O.setValue(R,`sunShadowMap`,y.state.sunShadowMap,V),y.state.directionalShadowMap.length>0&&O.setValue(R,`directionalShadowMap`,y.state.directionalShadowMap,V),y.state.spotShadowMap.length>0&&O.setValue(R,`spotShadowMap`,y.state.spotShadowMap,V),y.state.pointShadowMap.length>0&&O.setValue(R,`pointShadowMap`,y.state.pointShadowMap,V)),i.isSkinnedMesh){O.setOptional(R,i,`bindMatrix`),O.setOptional(R,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),O.setValue(R,`boneTexture`,e.boneTexture,V))}i.isBatchedMesh&&(O.setOptional(R,i,`batchingTexture`),O.setValue(R,`batchingTexture`,i._matricesTexture,V),O.setOptional(R,i,`batchingIdTexture`),O.setValue(R,`batchingIdTexture`,i._indirectTexture,V),O.setOptional(R,i,`batchingColorTexture`),i._colorsTexture!==null&&O.setValue(R,`batchingColorTexture`,i._colorsTexture,V));let A=n.morphAttributes;if((A.position!==void 0||A.normal!==void 0||A.color!==void 0)&&Ke.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,O.setValue(R,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(k.envMapIntensity.value=t.environmentIntensity),k.dfgLUT!==void 0&&(k.dfgLUT.value=ll()),w){if(O.setValue(R,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&Dt(k,E),a&&r.fog===!0&&Be.refreshFogUniforms(k,a),Be.refreshMaterialUniforms(k,r,L,pe,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;k.probesSH.value=e.texture,k.probesMin.value.copy(e.boundingBox.min),k.probesMax.value.copy(e.boundingBox.max),k.probesResolution.value.copy(e.resolution)}Hs.upload(R,Ct(v),k,V)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Hs.upload(R,Ct(v),k,V),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&O.setValue(R,`center`,i.center),O.setValue(R,`modelViewMatrix`,i.modelViewMatrix),O.setValue(R,`normalMatrix`,i.normalMatrix),O.setValue(R,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Ze.update(n,S),Ze.bind(n,S)}}return S}function Dt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Ot(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(e,t,n){let r=B.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),B.get(e.texture).__webglTexture=t,B.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=B.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){N=e,j=t,M=n;let r=null,i=!1,a=!1;if(e){let o=B.get(e);if(o.__useDefaultFramebuffer!==void 0){z.bindFramebuffer(R.FRAMEBUFFER,o.__webglFramebuffer),ne.copy(e.viewport),ie.copy(e.scissor),oe=e.scissorTest,z.viewport(ne),z.scissor(ie),z.setScissorTest(oe),P=-1;return}if(o.__webglFramebuffer===void 0)V.setupRenderTarget(e);else if(o.__hasExternalTextures)V.rebindTextures(e,B.get(e.texture).__webglTexture,B.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&B.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);V.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=B.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&V.useMultisampledRTT(e)===!1?B.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,ne.copy(e.viewport),ie.copy(e.scissor),oe=e.scissorTest}else ne.copy(ge).multiplyScalar(L).floor(),ie.copy(ve).multiplyScalar(L).floor(),oe=xe;if(n!==0&&(r=O),z.bindFramebuffer(R.FRAMEBUFFER,r)&&z.drawBuffers(e,r),z.viewport(ne),z.scissor(ie),z.setScissorTest(oe),i){let r=B.get(e.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=B.get(e.textures[t]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=B.get(e.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,t.__webglTexture,n)}P=-1};function kt(e){let t=B.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Ne.textureFormatReadable(e.format),t.__typeReadable=Ne.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){U(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=B.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){z.bindFramebuffer(R.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+s);let u=kt(o);if(u.__formatReadable===!1){U(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){U(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&R.readPixels(t,n,r,i,Ye.convert(c),Ye.convert(l),a)}finally{let e=N===null?null:B.get(N).__webglFramebuffer;z.bindFramebuffer(R.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=B.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){z.bindFramebuffer(R.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+s);let d=kt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,f),R.bufferData(R.PIXEL_PACK_BUFFER,a.byteLength,R.STREAM_READ),R.readPixels(t,n,r,i,Ye.convert(l),Ye.convert(u),0),R.bindBuffer(R.PIXEL_PACK_BUFFER,null);let p=N===null?null:B.get(N).__webglFramebuffer;z.bindFramebuffer(R.FRAMEBUFFER,p);let m=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await St(R,m,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,f),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,a),R.bindBuffer(R.PIXEL_PACK_BUFFER,null),R.deleteBuffer(f),R.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;V.setTexture2D(e,0),R.copyTexSubImage2D(R.TEXTURE_2D,n,0,0,o,s,i,a),z.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Ye.convert(t.format),_=Ye.convert(t.type),v;t.isData3DTexture?(V.setTexture3D(t,0),v=R.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(V.setTexture2DArray(t,0),v=R.TEXTURE_2D_ARRAY):(V.setTexture2D(t,0),v=R.TEXTURE_2D),z.activeTexture(R.TEXTURE0),z.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,t.flipY),z.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),z.pixelStorei(R.UNPACK_ALIGNMENT,t.unpackAlignment);let y=z.getParameter(R.UNPACK_ROW_LENGTH),b=z.getParameter(R.UNPACK_IMAGE_HEIGHT),x=z.getParameter(R.UNPACK_SKIP_PIXELS),S=z.getParameter(R.UNPACK_SKIP_ROWS),C=z.getParameter(R.UNPACK_SKIP_IMAGES);z.pixelStorei(R.UNPACK_ROW_LENGTH,h.width),z.pixelStorei(R.UNPACK_IMAGE_HEIGHT,h.height),z.pixelStorei(R.UNPACK_SKIP_PIXELS,l),z.pixelStorei(R.UNPACK_SKIP_ROWS,u),z.pixelStorei(R.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=B.get(e),r=B.get(t),h=B.get(n.__renderTarget),g=B.get(r.__renderTarget);z.bindFramebuffer(R.READ_FRAMEBUFFER,h.__webglFramebuffer),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,B.get(e).__webglTexture,i,d+n),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,B.get(t).__webglTexture,a,m+n)),R.blitFramebuffer(l,u,o,s,f,p,o,s,R.DEPTH_BUFFER_BIT,R.NEAREST);z.bindFramebuffer(R.READ_FRAMEBUFFER,null),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||B.has(e)){let n=B.get(e),r=B.get(t);z.bindFramebuffer(R.READ_FRAMEBUFFER,k),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,A);for(let e=0;e<c;e++)w?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,n.__webglTexture,i),T?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,r.__webglTexture,a),i===0?T?R.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):R.copyTexSubImage2D(v,a,f,p,l,u,o,s):R.blitFramebuffer(l,u,o,s,f,p,o,s,R.COLOR_BUFFER_BIT,R.NEAREST);z.bindFramebuffer(R.READ_FRAMEBUFFER,null),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?R.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?R.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):R.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):R.texSubImage2D(R.TEXTURE_2D,a,f,p,o,s,g,_,h);z.pixelStorei(R.UNPACK_ROW_LENGTH,y),z.pixelStorei(R.UNPACK_IMAGE_HEIGHT,b),z.pixelStorei(R.UNPACK_SKIP_PIXELS,x),z.pixelStorei(R.UNPACK_SKIP_ROWS,S),z.pixelStorei(R.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&R.generateMipmap(v),z.unbindTexture()},this.initRenderTarget=function(e){B.get(e).__webglFramebuffer===void 0&&V.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?V.setTextureCube(e,0):e.isData3DTexture?V.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?V.setTexture2DArray(e,0):V.setTexture2D(e,0),z.unbindTexture()},this.resetState=function(){j=0,M=0,N=null,z.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return pt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=J._getDrawingBufferColorSpace(e),t.unpackColorSpace=J._getUnpackColorSpace()}};function dl(e,t=240){return Math.min(t,44+Math.max(0,e)*54)}function fl(e,t,n){let r=t.x-e.x,i=t.y-e.y,a=Math.hypot(r,i),o=(e.radius+t.radius)*.97-a;if(o<=0)return{x:0,y:0};let s=Math.min(8,o*(1-Math.exp(-18*Math.max(0,Math.min(n,1/30)))));return{x:(a>.001?r/a:1)*s,y:(a>.001?i/a:0)*s}}function pl(e,t){let n=Math.min(1/30,Math.max(0,t));return e.velocity+=(-90*e.displacement-11*e.velocity)*n,e.displacement+=e.velocity*n,e}function ml(e,t,n,r,i,a=18){let o=Math.max(12,Math.min(n,(Math.min(r,i)-a*2)/1.12)),s=o*.56+a;return{diameter:o,x:Math.min(r-s,Math.max(s,e)),y:Math.min(i-s,Math.max(s,t))}}function hl(e,t,n){let r=Math.max(1,n),i=e+t,a=(e,t)=>Math.max(.65,Math.min(.99,(r*r+e*e-t*t)/(2*r*e)));return{strength:Math.max(0,Math.min(1,(i*1.08-r)/(i*.15))),planeA:a(e,t),planeB:a(t,e)}}function gl(e,t,n,r,i,a,o=0){let s=r-e,c=i-t,l=Math.max(1e-4,Math.hypot(s,c)),u=s/l,d=c/l,f=(l*l+n*n-a*a)/(2*l);return{x:u,y:d,offset:u*e+d*t+f-o}}var _l=`
uniform float uTime;
uniform float uPicker;
uniform float uTextSurface;
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
 if(uTextSurface>0.5){
   // Gently pinched, unequal lobes give text bubbles a living film silhouette.
   // The contour and its normals change together, so gloss follows the shape.
   float contourX=p.x;
   float contourPhase=uTime*0.72+uSeed;
   float waist=exp(-contourX*contourX*3.0);
   float profile=1.0-0.10*waist+0.055*sin(contourX*4.0+contourPhase);
   float profileSlope=0.60*contourX*waist+0.22*cos(contourX*4.0+contourPhase);
   float centerEnvelope=max(0.0,1.0-contourX*contourX);
   float bendPhase=contourX*3.0+contourPhase*0.8;
   float bend=0.035*sin(bendPhase)*centerEnvelope;
   float bendSlope=0.035*(3.0*cos(bendPhase)*centerEnvelope-2.0*contourX*sin(bendPhase));
   n.x-=n.y*(p.y*profileSlope+bendSlope)/profile;
   n.y/=profile;
   p.y=p.y*profile+bend;
 }
 float wave = sin(p.y * 4.4 + uTime * 1.3 + uSeed) * sin(p.x * 3.2 - uTime * 0.9 + uSeed);
 float amount = mix(0.025,0.015,uPicker);
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
}`,vl=`
uniform sampler2D uEnvironment;
uniform sampler2D uPhoto;
uniform vec4 uPhotoRegion;
uniform float uFaceOpacity;
uniform float uPicker;
uniform float uHasPhoto;
uniform float uTextSurface;
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
 // Keep a domed optical skin inside the flattened post silhouette.
 vec3 normal = normalize(mix(vSmoothNormal, normalize(vSurfaceDirection), uPost*0.72));
 if(normal.z < 0.0) normal = -normal;
 float facing = clamp(normal.z, 0.0, 1.0);
 float fresnel = pow(1.0 - facing, mix(1.8,1.35,uPost));
 vec3 reflected = reflect(vec3(0.0, 0.0, -1.0), normal);
 // Reflect the view direction about the curved optical surface.
 vec3 ray=normalize(reflected);
 vec2 curvature=ray.xy/(1.0+abs(ray.z));
 // A continuous reflection projection for a flat scenery source: no longitude
 // wrap, joined image edges or polar seam. The reflected ray still bends the
 // scene across the dome; its denominator stays positive over the whole film.
 vec2 sphericalUV=vec2(0.5)+ray.xy*0.43/(1.0+0.22*ray.z)+(uEnvironmentAnchor-0.5)*0.06;
 vec2 localUV=cover(uEnvironmentAnchor+curvature*vec2(0.28,0.24),uEnvSize,uWorldViewport.z/max(1.0,uWorldViewport.w));
 float fullBody=uPost*(1.0-uTextSurface);
 // Continuous angular reflection disk: preserves scenery detail without folding at the rim.
 float rayRadius=length(ray.xy);
 float reflectionAngle=atan(rayRadius,ray.z);
 vec2 reflectionDisk=ray.xy/max(rayRadius,0.0001)*(reflectionAngle/3.14159265);
 // Anchor the front reflection at this bubble's actual background location.
 // The dome sees farther toward each image edge, without clamped streaks.
 vec2 reflectionAnchor=clamp(uEnvironmentAnchor,vec2(0.025),vec2(0.975));
 vec2 reflectedReach=mix(reflectionAnchor,vec2(1.0)-reflectionAnchor,smoothstep(vec2(-0.08),vec2(0.08),reflectionDisk));
 vec2 positionalScene=reflectionAnchor+reflectionDisk*reflectedReach*0.90;
 vec2 curvedSceneUV=cover(positionalScene,uEnvSize,uWorldViewport.z/max(1.0,uWorldViewport.w));
 vec2 environmentUV=mix(localUV,curvedSceneUV,max(uRound,fullBody));
 environmentUV=clamp(environmentUV,vec2(0.001),vec2(0.999));
 vec3 environment=texture2D(uEnvironment,environmentUV).rgb; float thickness = 460.0 + 95.0 * sin(vLocal.y * 3.0 + uTime * 0.18 + uSeed) + 48.0 * vLocal.x;
 vec3 wavelengths = vec3(650.0, 510.0, 475.0);
 vec3 film = 0.5 + 0.5 * cos(6.283185 * 2.0 * 1.33 * thickness * max(0.15, facing) / wavelengths);

 // Illumination comes from the sampled scenery, without fixed white lights.
 float environmentLuminance=dot(environment,vec3(0.2126,0.7152,0.0722));
 float sceneryLight=smoothstep(0.025,0.60,environmentLuminance);
 vec3 interference=film;
 film=environment*0.90+film*0.035*sceneryLight;
 vec3 color=environment*mix(1.05,1.12,uPost)+film*fresnel*(0.10+0.18*sceneryLight);
 float alpha=mix(0.30,0.46,uPost)+fresnel*mix(0.42,0.60,sceneryLight);
 // Continuous reflective body with a clear center and denser grazing film.
 vec3 exposedEnvironment=environment*1.65/(vec3(1.0)+environment*0.55);
 color=mix(color,exposedEnvironment,fullBody*0.85);
 alpha=mix(alpha,0.48+0.42*fresnel,fullBody);
 if(fullBody>0.5){
   // Preserve the reflected world's dark silhouettes. Lift highlights and
   // midtones selectively instead of washing the entire face with lavender.
   float sceneLuma=dot(environment,vec3(0.2126,0.7152,0.0722));
   vec3 sceneTint=clamp((environment+vec3(0.025))/(sceneLuma+0.025),vec3(0.65),vec3(1.35));
   // Preserve low-light detail instead of adding a gray floor or crushing it.
   float shadowProtection=smoothstep(0.008,0.085,sceneLuma);
   vec3 contrastedScene=mix(environment*0.90,max(vec3(0.0),(environment-vec3(0.075))*1.28+vec3(0.075)),shadowProtection);
   float sourceLift=1.0+0.18*shadowProtection+0.60*smoothstep(0.025,0.40,sceneLuma);
   vec3 reflectedScene=contrastedScene*sourceLift;
   vec3 ambientFilm=mix(vec3(sceneLuma),environment,0.55)*0.25+sceneTint*0.022;
   color=reflectedScene+ambientFilm*shadowProtection;
   alpha=0.77+0.19*fresnel;
   // Very small color separation is confined to the curved outer film.
   vec2 separation=normal.xy*0.004*pow(1.0-facing,1.6);
   float redScene=texture2D(uEnvironment,clamp(environmentUV+separation,0.001,0.999)).r;
   float blueScene=texture2D(uEnvironment,clamp(environmentUV-separation,0.001,0.999)).b;
   color+=vec3(redScene-environment.r,0.0,blueScene-environment.b)*0.75;
 }
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
 // Picker worlds sit visually behind a thin film, rather than being washed
 // with a broad reflection across their centers. Keep existing memories intact.
 float thinGrazing=pow(1.0-facing,4.2);
 rimReflection=mix(rimReflection,(sharpLight*sharpSource*2.0+softLight*broadSource*0.55)*thinGrazing,uPicker);
 rimCoverage=mix(rimCoverage,thinGrazing*(0.22+0.35*sharpSource),uPicker);
 float interiorMemory=uRound*uHasPhoto*(1.0-uPicker);
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
   // A world bubble is a window into a wide scene: preserve its proportions
   // instead of squeezing the full panorama into a square spherical map.
   if(uPicker>0.5)uv=cover(surface.xy*0.5+0.5,uPhotoSize,1.0);
   if(interiorMemory>0.5){
     // An inset image plane sits behind the glass. Preserve its proportions:
     // the shell bends the environment, rather than stretching the photograph.
     vec2 interiorUV=surface.xy/0.91;
     interiorUV*=1.0+0.025*dot(interiorUV,interiorUV);
     uv=cover(interiorUV*0.5+0.5,uPhotoSize,1.0);
   }
   // Map the complete photo edge-to-edge onto the hemisphere, without a cover crop.
   vec3 photo = texture2D(uPhoto, uPhotoRegion.xy+clamp(uv,0.002,0.998)*uPhotoRegion.zw).rgb;
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
   photo*=mix(vec3(1.0),lightTint,mix(0.40+edgeLighting*0.18,edgeLighting*0.08,uPicker));
   photo*=mix(mix(mix(0.72,0.86,interiorMemory),1.04,ambientDaylight),1.04,uPicker)*(0.96+0.04*facing);
   float litLuminance=dot(photo,vec3(0.2126,0.7152,0.0722));
   photo=mix(vec3(litLuminance),photo,mix(mix(0.90,1.0,ambientDaylight),1.0,uPicker));
   // Protect the image center; let local scenery define the curved outer film.
   float memoryEnvelope=1.0-smoothstep(0.78,0.985,length(surface.xy));
   memoryEnvelope=mix(memoryEnvelope,1.0-smoothstep(0.90,0.998,length(surface.xy)),uPicker);
   if(interiorMemory>0.5)memoryEnvelope=1.0-smoothstep(0.87,0.998,length(surface.xy));
   float photoLuminance=dot(photo,vec3(0.2126,0.7152,0.0722));
   float imagePriority=0.87+0.06*smoothstep(0.05,0.65,photoLuminance)-0.025*sceneryLight;
   float memoryWeight=imagePriority*memoryEnvelope*(1.0-0.14*edgeLighting);
   memoryWeight=mix(memoryWeight,0.96*memoryEnvelope,uPicker);
   color=mix(color,photo,memoryWeight);
   alpha=mix(alpha,mix(0.84,0.92,uPicker),memoryEnvelope);
 }
 // A separate optical coat stays visible over the world. Its Fresnel response
 // uses the deformed surface normal: reflections bend and strengthen toward
 // the sides, while the central scenery remains readable.
 float coatReflectance=0.045+0.60*pow(1.0-facing,1.65);
 vec3 coatReflection=environment*(1.05+0.45*sceneryLight);
 color=mix(color,coatReflection,coatReflectance*uPicker);
 // A restrained curved environment coat over uploaded memories. Strongest
 // near the sides; the image center and its fine detail remain readable.
 if(uHasPhoto>0.5 && uPicker<0.5){
   float imageCoat=0.018+0.12*pow(1.0-facing,2.0);
   if(interiorMemory>0.5){
     // Independent front film: its curved, position-dependent scenery survives
     // across the photo face, with stronger reflections toward grazing angles.
     imageCoat=0.045+0.09*sceneryLight+0.57*pow(1.0-facing,1.7);
     vec3 frontReflection=environment*(1.30+0.50*sceneryLight);
     color=mix(color,frontReflection,imageCoat);
     alpha=max(alpha,0.82+0.14*fresnel);
   }else color=mix(color,coatReflection,imageCoat);
 }
 // Add the world reflection over the memory, restricted to grazing film.
 color+=rimReflection*mix(1.0,0.36,uRound);
 alpha+=rimCoverage*(1.0-alpha);
 // A fine, anti-aliased film edge catches the actual scenery's light.
 float surfaceRadius=length(normalize(vSurfaceDirection).xy);
 float filmEdge=smoothstep(0.985-max(fwidth(surfaceRadius),0.001),0.999,surfaceRadius)*max(uPicker,fullBody);
 vec3 pearlLight=mix(sharpLight,vec3(sharpBrightness),0.28);
 color+=filmEdge*(pearlLight*(0.20+sharpSource*0.40)+film*0.12*broadSource);
 alpha=max(alpha,filmEdge*(0.48+0.30*sharpSource));
 // Thin-film color follows curvature and varies across the surface.
 float opticalRim=pow(1.0-facing,2.8)*fullBody;
 float filmVariation=0.35+0.65*pow(0.5+0.5*sin(vLocal.y*5.0+vLocal.x*3.0+uSeed),2.0);
 color+=interference*opticalRim*filmVariation*0.19;
 color+=vec3(0.16,0.20,0.27)*opticalRim*0.22;
 vec3 ambientPearl=mix(vec3(0.21,0.24,0.32),softLight,0.30);
 float ambientCurve=pow(1.0-facing,1.5);
 color+=ambientPearl*(0.035+0.16*ambientCurve)*fullBody*smoothstep(0.008,0.085,environmentLuminance);
 // Thin soap-film shell. A narrow contour and separate interior glints describe
 // a transparent sphere, without turning the whole perimeter into frosted glass.
 if(max(uRound,fullBody)>0.5){
   float azimuth=atan(normal.y,normal.x);
   float arcs=pow(0.5+0.5*sin(azimuth*3.0+uSeed),7.0);
   float secondArc=pow(0.5+0.5*cos(azimuth*5.0-uSeed*0.6),12.0);
   float lineWidth=max(fwidth(surfaceRadius)*1.1,0.0025);
   float fineEdge=exp(-pow((surfaceRadius-0.991)/lineWidth,2.0));
   float filmBand=exp(-pow((surfaceRadius-0.972)/0.014,2.0));
   vec3 violet=vec3(0.56,0.32,1.0);
   vec3 cyan=vec3(0.22,0.79,1.0);
   vec3 peach=vec3(1.0,0.64,0.58);
   vec3 rainbow=mix(violet,cyan,0.5+0.5*sin(azimuth*2.0+uSeed));
   rainbow=mix(rainbow,peach,secondArc*0.5);
   float envLuma=dot(softLight,vec3(0.2126,0.7152,0.0722));
   vec3 environmentTint=clamp((softLight+0.05)/(envLuma+0.05),0.65,1.3);
   rainbow*=mix(vec3(1.0),environmentTint,0.23);
   color+=rainbow*(filmBand*(0.09+arcs*0.50)+fineEdge*(0.10+arcs*0.65));
   vec3 dome=normalize(mix(normal,normalize(vSurfaceDirection),0.65));
   float glintA=pow(max(0.0,dot(dome,normalize(vec3(-0.46,0.68,0.57)))),260.0);
   float glintB=pow(max(0.0,dot(dome,normalize(vec3(-0.63,0.54,0.56)))),430.0);
   float glintC=pow(max(0.0,dot(dome,normalize(vec3(0.78,-0.45,0.44)))),320.0);
   float softSheen=pow(max(0.0,dot(dome,normalize(vec3(-0.38,0.64,0.67)))),38.0);
   float glints=glintA+glintB*0.65+glintC*0.55;
   color+=vec3(0.88,0.91,1.0)*(glints*1.65+softSheen*0.10);
   alpha=max(alpha,max(glints*0.95,fineEdge*(0.44+arcs*0.44)));
 }
 if(fullBody>0.5){
   // A broad clear collar and a finer silver line describe the film thickness.
   // The highlights vary in strength around the rim; the center stays clear.
   float collar=exp(-pow((surfaceRadius-0.948)/0.036,2.0));
   float angle=atan(normal.y,normal.x);
   float patches=pow(0.5+0.5*sin(angle*3.0+uSeed),5.0);
   float ambientLuma=dot(softLight,vec3(0.2126,0.7152,0.0722));
   vec3 rimTint=clamp((softLight+vec3(0.025))/(ambientLuma+0.025),vec3(0.65),vec3(1.4));
   vec3 opal=rimTint*0.48+interference*0.10;
   color+=collar*(opal*(0.09+patches*0.20)+softLight*0.35);
   float silver=exp(-pow((surfaceRadius-0.991)/max(0.003,fwidth(surfaceRadius)*1.2),2.0));
   color+=silver*mix(vec3(0.27,0.31,0.53),vec3(0.85,0.88,1.0),patches)*0.65;
   // Several reflections of small light sources sit on the domed film.
   float sparkleA=pow(max(0.0,dot(ray,normalize(vec3(-0.62,0.50,-0.60)))),180.0);
   float sparkleB=pow(max(0.0,dot(ray,normalize(vec3(0.74,0.42,-0.53)))),240.0);
   float sparkleC=pow(max(0.0,dot(ray,normalize(vec3(-0.40,-0.75,-0.52)))),150.0);
   color+=mix(vec3(0.85,0.87,1.0),rimTint,0.65)*(sparkleA*1.2+sparkleB+sparkleC*0.8)*(0.35+0.65*broadSource);
   alpha=max(alpha,max(sparkleA,max(sparkleB,sparkleC))*0.96);
 }
 if(uTextSurface>0.5){
   float textCore=1.0-smoothstep(0.62,0.98,surfaceRadius);
   vec3 sceneryReflection=softLight*0.16;
   vec3 readableFilm=vec3(0.048,0.043,0.085)+min(sceneryReflection,vec3(0.055));
   color=mix(color,readableFilm,textCore);
   alpha=mix(min(alpha,0.78),0.76,textCore);
 }
 alpha*=1.0-uTension*0.28*(1.0-fresnel);
 color+=vec3(0.08,0.085,0.10)*fresnel*uTension;
 alpha*=mix(1.0,0.82,vContactFilm)*contactCoverage;
 if(uPop>0.0)alpha*=pow(1.0-uPop,2.0);
 gl_FragColor = vec4(color, clamp(alpha,0.0,mix(0.96,0.98,uTextSurface))*uFaceOpacity);
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
}`;function yl({scope:e,container:t,getEnvironment:n,dialog:r=!1,memoryOnly:i=!1}){r||document.body.classList.remove(`webgl-fallback`);let a;try{a=new ul({alpha:!0,antialias:!0,powerPreference:`low-power`})}catch{return document.body.classList.add(`webgl-fallback`),{dispose(){}}}a.debug.onShaderError=(e,t,n,r)=>{document.body.classList.add(`webgl-fallback`),console.error(`Bubble shader failed to compile`,e.getShaderInfoLog(n),e.getShaderInfoLog(r))},a.setClearColor(0,0),a.setPixelRatio(Math.min(devicePixelRatio,2)),a.domElement.className=i?`bubble-canvas memory-canvas`:`bubble-canvas`,a.domElement.setAttribute(`aria-hidden`,`true`),t.prepend(a.domElement);let o=new nr,s=new Oa;s.position.z=1e3,s.near=.1,s.far=2e3;let c=new Fi(1,112,80),l=new ya,u=new Map,d=new Map,f=new Ci(new Uint8Array([100,110,150,255]),1,1);f.needsUpdate=!0;let p=null,m=null,h=0,g=performance.now(),_=!1,v=e=>{if(!e)return f;if(!u.has(e)){let t=l.load(e);t.colorSpace=st,t.anisotropy=Math.min(8,a.capabilities.getMaxAnisotropy()),u.set(e,t)}return u.get(e)};function y(e,t,n){return new Wi({vertexShader:_l,fragmentShader:vl,transparent:!0,depthWrite:!1,side:0,uniforms:{uTime:{value:0},uRound:{value:+!!e},uSeed:{value:t},uImpulse:{value:0},uPress:{value:0},uPop:{value:0},uTension:{value:0},uTouch:{value:new G},uDrag:{value:new G},uContactPlanes:{value:Array.from({length:15},()=>new Y)},uPlaneCount:{value:0},uEnvironment:{value:f},uPhoto:{value:f},uPhotoRegion:{value:new Y(0,0,1,1)},uFaceOpacity:{value:1},uPicker:{value:0},uHasPhoto:{value:0},uTextSurface:{value:0},uPost:{value:+!!n},uScreen:{value:new G},uWorldViewport:{value:new Y},uEnvSize:{value:new G(1,1)},uEnvironmentAnchor:{value:new G(.5,.5)},uPhotoSize:{value:new G(1,1)},uClip:{value:new Y},uPointer:{value:new G(3,3)},uHover:{value:0}}})}let b=i?`.user-orb, .dm-orb, .dm-world-memory`:r?`.message`:`.memory-bubble, .reply-glass, .reply-form, .filter, .header-tools .round, .chip, .world-nav, footer button, .dm-chat-surface, .dm-scene-avatar, .dm-scene-control`;function x(){let t=new Set(e.querySelectorAll(b));for(let[e,n]of d)t.has(e)||(o.remove(n.mesh),n.mesh.material.dispose(),n.photoVideoTexture?.dispose(),d.delete(e));for(let e of t)if(!d.has(e)){let t=Number(e.dataset.lightingSeed??Math.random()*6);e.dataset.lightingSeed=String(t);let n=y(e.classList.contains(`user-orb`)||e.classList.contains(`dm-orb`)||e.classList.contains(`dm-world-memory`)||e.classList.contains(`dm-scene-avatar`)||e.classList.contains(`dm-scene-control`)||e.classList.contains(`round`)||e.classList.contains(`world-nav`),t,e.classList.contains(`memory-bubble`)),r=new bi(c,n);r.frustumCulled=!1,d.set(e,{mesh:r,state:{displacement:0,velocity:0},growing:e.classList.contains(`growing`)}),o.add(r)}}let S=new MutationObserver(x);S.observe(e,{childList:!0,subtree:!0}),x();let C={x:-1e4,y:-1e4},w=e=>{C.x=e.clientX,C.y=e.clientY},T=()=>{C.x=C.y=-1e4};e.addEventListener(`pointermove`,w),e.addEventListener(`pointerleave`,T);let E=e=>{let t=e.target.closest(b),n=d.get(t);if(n){let r=t.getBoundingClientRect();n.mesh.material.uniforms.uTouch.value.set((e.clientX-r.left)/r.width*2-1,1-(e.clientY-r.top)/r.height*2),n.state.velocity=2.8,n.held=!0,n.pressStarted=performance.now()}};e.addEventListener(`pointerdown`,E);let D=()=>{for(let e of d.values())e.held&&(e.state.velocity+=performance.now()-(e.pressStarted||0)<250?1.1:-.8*(e.pressDepth||0)),e.held=!1};e.addEventListener(`pointerup`,D),e.addEventListener(`pointercancel`,D),e.addEventListener(`lostpointercapture`,D),window.addEventListener(`blur`,D),a.domElement.addEventListener(`webglcontextlost`,e=>{e.preventDefault(),document.body.classList.add(`webgl-fallback`)});function O(i){if(_)return;h=requestAnimationFrame(O);let c=n(),l=Math.min((i-g)/1e3,1/30);if(g=i,r&&!e.open)return;let f=r?t.getBoundingClientRect():{left:0,top:0,width:innerWidth,height:innerHeight},y=Math.max(1,f.width),b=Math.max(1,f.height);(a.domElement.width!==Math.round(y*a.getPixelRatio())||a.domElement.height!==Math.round(b*a.getPixelRatio()))&&(a.setSize(y,b,!1),s.left=0,s.right=y,s.top=b,s.bottom=0,s.updateProjectionMatrix());let x=v(c.background);c.video&&c.video!==m&&(p?.dispose(),m=c.video,p=new Oi(m),p.colorSpace=st),!c.video&&m&&(p?.dispose(),p=null,m=null),p&&(x=p);let S=x.image||{};for(let[e,t]of d){let n=e.getBoundingClientRect(),r=n.left-f.left,o=n.top-f.top,s=n.width>0&&n.height>0&&o+n.height>0&&o<b&&r+n.width>0&&r<y,u=!!e.closest(`.shared-dm-world`)||e.classList.contains(`dm-entry-orb`);if(t.mesh.visible=s&&e.dataset.entrySuppressed!==`1`&&(e.classList.contains(`dm-entry-orb`)||(c.dm?u:!u)),!t.mesh.visible)continue;let d=t.mesh.material.uniforms;d.uTextSurface.value=+!!e.classList.contains(`dm-chat-surface`),d.uFaceOpacity.value=Number(e.closest(`.social-face`)?.dataset.faceOpacity??1),d.uPicker.value=+!!e.matches(`.dm-orb,.dm-world-memory,.dm-chat-surface,.dm-scene-avatar,.dm-scene-control`);let p=(e.dataset.photoRegion||`0,0,1,1`).split(`,`).map(Number);d.uPhotoRegion.value.set(...p),e.classList.contains(`dm-entry-orb`)&&(d.uFaceOpacity.value*=Number(getComputedStyle(e).opacity));let m=C.x>=n.left&&C.x<=n.right&&C.y>=n.top&&C.y<=n.bottom;d.uHover.value+=(Number(m)-d.uHover.value)*.12,d.uPointer.value.set((C.x-n.left)/n.width*2-1,1-(C.y-n.top)/n.height*2);let h=e.classList.contains(`user-orb`),g=c.paused?0:i/1e3,_=e.classList.contains(`growing`);t.growing&&!_&&(t.state.velocity=.8),t.growing=_,pl(t.state,l);let w=h&&!c.paused&&Number(e.dataset.contactStrength||0)<.1?Math.sin(g*.65+d.uSeed.value)*3:0;t.mesh.position.set(r+n.width/2,b-o-n.height/2+w,0),t.mesh.scale.set(n.width/2*1.018,n.height/2*1.025,Math.min(n.width,n.height)/2);let T=Number(e.dataset.pressure||0);t.lastPressure=T,d.uTension.value+=(T-d.uTension.value)*.18,t.pressDepth=(t.pressDepth||0)+((t.held?.65+T*.55:0)-(t.pressDepth||0))*.22,d.uPress.value=t.pressDepth,d.uDrag.value.lerp(new G(Number(e.dataset.dragX||0),Number(e.dataset.dragY||0)),.18),d.uPop.value=e.classList.contains(`popping`)?Math.min(1,(i-Number(e.dataset.popAt||i))/280):0;let E=(e._bubbleContacts||[]).filter(e=>e.isConnected).slice(0,15);d.uPlaneCount.value=E.length;let D=r+n.width/2,O=b-o-n.height/2;for(let t=0;t<E.length;t++){let r=E[t].getBoundingClientRect(),i=r.left-f.left+r.width/2,a=b-(r.top-f.top)-r.height/2,o=i-D,s=a-O,c=Math.hypot(o,s);c<.001&&(o=e.dataset.bubbleId<E[t].dataset.bubbleId?1:-1,s=0,c=1),o/c,s/c;let l=n.width/2*1.018,u=r.width/2*1.018,p=gl(D,O,l,D+o,O+s,u);d.uContactPlanes.value[t].set(p.x,p.y,p.offset,0)}let k=Number(e.dataset.releaseKick||0);k&&k!==t.releaseKick&&(t.releaseKick=k,t.state.velocity=2);let A=a.getPixelRatio();d.uWorldViewport.value.set(f.left*A,(innerHeight-f.top-b)*A,innerWidth*A,innerHeight*A),d.uEnvironmentAnchor.value.set((n.left+n.width/2)/Math.max(1,innerWidth),1-(n.top+n.height/2-w)/Math.max(1,innerHeight)),d.uTime.value=g,d.uImpulse.value=t.state.displacement,d.uEnvironment.value=x,d.uScreen.value.set(y*a.getPixelRatio(),b*a.getPixelRatio()),d.uEnvSize.value.set(S.videoWidth||S.width||1,S.videoHeight||S.height||1);let j=e.closest(`.message-log, .bubble-garden, .dm-scene-log`)?.getBoundingClientRect()||{left:f.left,top:f.top,right:f.left+y,bottom:f.top+b},M=a.getPixelRatio();d.uClip.value.set(Math.max(0,j.left-f.left)*M,Math.max(0,b-(j.bottom-f.top))*M,Math.min(y,j.right-f.left)*M,Math.min(b,b-(j.top-f.top))*M);let N=e._bubbleVideo;N!==t.photoVideoElement&&(t.photoVideoTexture?.dispose(),t.photoVideoTexture=null,t.photoVideoElement=N,N&&(t.photoVideoTexture=new Oi(N),t.photoVideoTexture.colorSpace=st));let P=N&&N.readyState>=2?t.photoVideoTexture:v(e.dataset.image);d.uHasPhoto.value=N&&N.readyState>=2||e.dataset.image?1:0,d.uPhoto.value=P,d.uPhotoSize.value.set(P.image?.videoWidth||P.image?.width||1,P.image?.videoHeight||P.image?.height||1)}let w=new Set([...d.keys()].map(e=>e.dataset.image).filter(Boolean));for(let[e,t]of u)e.startsWith(`blob:`)&&!w.has(e)&&e!==c.background&&(t.dispose(),u.delete(e));a.render(o,s)}return h=requestAnimationFrame(O),{dispose(){_=!0,cancelAnimationFrame(h),S.disconnect(),e.removeEventListener(`pointerdown`,E),e.removeEventListener(`pointerup`,D),e.removeEventListener(`pointercancel`,D),e.removeEventListener(`lostpointercapture`,D),window.removeEventListener(`blur`,D),e.removeEventListener(`pointermove`,w),e.removeEventListener(`pointerleave`,T);for(let e of d.values())e.mesh.material.dispose(),e.photoVideoTexture?.dispose();c.dispose();for(let e of u.values())e.dispose();p?.dispose(),f.dispose(),a.dispose(),a.domElement.remove()}}}var bl=`
uniform float uTime;
uniform float uPicker;
uniform float uTextSurface;
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
 if(uTextSurface>0.5){
   // Gently pinched, unequal lobes give text bubbles a living film silhouette.
   // The contour and its normals change together, so gloss follows the shape.
   float contourX=p.x;
   float contourPhase=uTime*0.72+uSeed;
   float waist=exp(-contourX*contourX*3.0);
   float profile=1.0-0.10*waist+0.055*sin(contourX*4.0+contourPhase);
   float profileSlope=0.60*contourX*waist+0.22*cos(contourX*4.0+contourPhase);
   float centerEnvelope=max(0.0,1.0-contourX*contourX);
   float bendPhase=contourX*3.0+contourPhase*0.8;
   float bend=0.035*sin(bendPhase)*centerEnvelope;
   float bendSlope=0.035*(3.0*cos(bendPhase)*centerEnvelope-2.0*contourX*sin(bendPhase));
   n.x-=n.y*(p.y*profileSlope+bendSlope)/profile;
   n.y/=profile;
   p.y=p.y*profile+bend;
 }
 float wave = sin(p.y * 4.4 + uTime * 1.3 + uSeed) * sin(p.x * 3.2 - uTime * 0.9 + uSeed);
 float amount = mix(0.025,0.015,uPicker);
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
}`,xl=`
uniform sampler2D uEnvironment;
uniform sampler2D uPhoto;
uniform vec4 uPhotoRegion;
uniform float uFaceOpacity;
uniform float uPicker;
uniform float uHasPhoto;
uniform float uTextSurface;
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
 // Keep a domed optical skin inside the flattened post silhouette.
 vec3 normal = normalize(mix(vSmoothNormal, normalize(vSurfaceDirection), uPost*0.72));
 if(normal.z < 0.0) normal = -normal;
 float facing = clamp(normal.z, 0.0, 1.0);
 float fresnel = pow(1.0 - facing, mix(1.8,1.35,uPost));
 vec3 reflected = reflect(vec3(0.0, 0.0, -1.0), normal);
 // Reflect the view direction about the curved optical surface.
 vec3 ray=normalize(reflected);
 vec2 curvature=ray.xy/(1.0+abs(ray.z));
 // A continuous reflection projection for a flat scenery source: no longitude
 // wrap, joined image edges or polar seam. The reflected ray still bends the
 // scene across the dome; its denominator stays positive over the whole film.
 vec2 sphericalUV=vec2(0.5)+ray.xy*0.43/(1.0+0.22*ray.z)+(uEnvironmentAnchor-0.5)*0.06;
 vec2 localUV=cover(uEnvironmentAnchor+curvature*vec2(0.28,0.24),uEnvSize,uWorldViewport.z/max(1.0,uWorldViewport.w));
 float fullBody=uPost*(1.0-uTextSurface);
 vec2 environmentUV=mix(localUV,sphericalUV,fullBody);
 environmentUV=clamp(environmentUV,vec2(0.001),vec2(0.999));
 vec3 environment=texture2D(uEnvironment,environmentUV).rgb; float thickness = 460.0 + 95.0 * sin(vLocal.y * 3.0 + uTime * 0.18 + uSeed) + 48.0 * vLocal.x;
 vec3 wavelengths = vec3(650.0, 510.0, 475.0);
 vec3 film = 0.5 + 0.5 * cos(6.283185 * 2.0 * 1.33 * thickness * max(0.15, facing) / wavelengths);

 // Illumination comes from the sampled scenery, without fixed white lights.
 float environmentLuminance=dot(environment,vec3(0.2126,0.7152,0.0722));
 float sceneryLight=smoothstep(0.025,0.60,environmentLuminance);
 vec3 interference=film;
 film=environment*0.90+film*0.035*sceneryLight;
 vec3 color=environment*mix(1.05,1.12,uPost)+film*fresnel*(0.10+0.18*sceneryLight);
 float alpha=mix(0.30,0.46,uPost)+fresnel*mix(0.42,0.60,sceneryLight);
 // Continuous reflective body with a clear center and denser grazing film.
 vec3 exposedEnvironment=environment*1.65/(vec3(1.0)+environment*0.55);
 color=mix(color,exposedEnvironment,fullBody*0.85);
 alpha=mix(alpha,0.48+0.42*fresnel,fullBody);
 if(fullBody>0.5){
   // Preserve the reflected world's dark silhouettes. Lift highlights and
   // midtones selectively instead of washing the entire face with lavender.
   float sceneLuma=dot(environment,vec3(0.2126,0.7152,0.0722));
   vec3 sceneTint=clamp((environment+vec3(0.025))/(sceneLuma+0.025),vec3(0.65),vec3(1.35));
   // Preserve low-light detail instead of adding a gray floor or crushing it.
   float shadowProtection=smoothstep(0.008,0.085,sceneLuma);
   vec3 contrastedScene=mix(environment*0.90,max(vec3(0.0),(environment-vec3(0.075))*1.28+vec3(0.075)),shadowProtection);
   float sourceLift=1.0+0.18*shadowProtection+0.60*smoothstep(0.025,0.40,sceneLuma);
   vec3 reflectedScene=contrastedScene*sourceLift;
   vec3 ambientFilm=mix(vec3(sceneLuma),environment,0.55)*0.25+sceneTint*0.022;
   color=reflectedScene+ambientFilm*shadowProtection;
   alpha=0.77+0.19*fresnel;
   // Very small color separation is confined to the curved outer film.
   vec2 separation=normal.xy*0.004*pow(1.0-facing,1.6);
   float redScene=texture2D(uEnvironment,clamp(environmentUV+separation,0.001,0.999)).r;
   float blueScene=texture2D(uEnvironment,clamp(environmentUV-separation,0.001,0.999)).b;
   color+=vec3(redScene-environment.r,0.0,blueScene-environment.b)*0.75;
 }
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
 // Picker worlds sit visually behind a thin film, rather than being washed
 // with a broad reflection across their centers. Keep existing memories intact.
 float thinGrazing=pow(1.0-facing,4.2);
 rimReflection=mix(rimReflection,(sharpLight*sharpSource*2.0+softLight*broadSource*0.55)*thinGrazing,uPicker);
 rimCoverage=mix(rimCoverage,thinGrazing*(0.22+0.35*sharpSource),uPicker);
 float interiorMemory=uRound*uHasPhoto*(1.0-uPicker);
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
   // A world bubble is a window into a wide scene: preserve its proportions
   // instead of squeezing the full panorama into a square spherical map.
   if(uPicker>0.5)uv=cover(uv,uPhotoSize,1.0);
   if(interiorMemory>0.5){
     // An inset image plane sits behind the glass. Preserve its proportions:
     // the shell bends the environment, rather than stretching the photograph.
     vec2 interiorUV=surface.xy/0.91;
     interiorUV*=1.0+0.025*dot(interiorUV,interiorUV);
     uv=cover(interiorUV*0.5+0.5,uPhotoSize,1.0);
   }
   // Map the complete photo edge-to-edge onto the hemisphere, without a cover crop.
   vec3 photo = texture2D(uPhoto, uPhotoRegion.xy+clamp(uv,0.002,0.998)*uPhotoRegion.zw).rgb;
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
   photo*=mix(vec3(1.0),lightTint,mix(0.40+edgeLighting*0.18,edgeLighting*0.08,uPicker));
   photo*=mix(mix(mix(0.72,0.86,interiorMemory),1.04,ambientDaylight),1.04,uPicker)*(0.96+0.04*facing);
   float litLuminance=dot(photo,vec3(0.2126,0.7152,0.0722));
   photo=mix(vec3(litLuminance),photo,mix(mix(0.90,1.0,ambientDaylight),1.0,uPicker));
   // Protect the image center; let local scenery define the curved outer film.
   float memoryEnvelope=1.0-smoothstep(0.78,0.985,length(surface.xy));
   memoryEnvelope=mix(memoryEnvelope,1.0-smoothstep(0.90,0.998,length(surface.xy)),uPicker);
   if(interiorMemory>0.5)memoryEnvelope=1.0-smoothstep(0.81,0.955,length(surface.xy));
   float photoLuminance=dot(photo,vec3(0.2126,0.7152,0.0722));
   float imagePriority=0.87+0.06*smoothstep(0.05,0.65,photoLuminance)-0.025*sceneryLight;
   float memoryWeight=imagePriority*memoryEnvelope*(1.0-0.14*edgeLighting);
   memoryWeight=mix(memoryWeight,0.96*memoryEnvelope,uPicker);
   color=mix(color,photo,memoryWeight);
   alpha=mix(alpha,mix(0.84,0.92,uPicker),memoryEnvelope);
 }
 // A separate optical coat stays visible over the world. Its Fresnel response
 // uses the deformed surface normal: reflections bend and strengthen toward
 // the sides, while the central scenery remains readable.
 float coatReflectance=0.025+0.50*pow(1.0-facing,2.6);
 vec3 coatReflection=environment*(1.05+0.45*sceneryLight);
 color=mix(color,coatReflection,coatReflectance*uPicker);
 // A restrained curved environment coat over uploaded memories. Strongest
 // near the sides; the image center and its fine detail remain readable.
 if(uHasPhoto>0.5 && uPicker<0.5){
   float imageCoat=0.018+0.12*pow(1.0-facing,2.0);
   if(interiorMemory>0.5){
     // Independent front film: its curved, position-dependent scenery survives
     // across the photo face, with stronger reflections toward grazing angles.
     imageCoat=0.10+0.16*sceneryLight+0.40*pow(1.0-facing,2.0);
     vec3 frontReflection=environment*(1.30+0.50*sceneryLight);
     color=mix(color,frontReflection,imageCoat);
     alpha=max(alpha,0.82+0.14*fresnel);
   }else color=mix(color,coatReflection,imageCoat);
 }
 // Add the world reflection over the memory, restricted to grazing film.
 color+=rimReflection;
 alpha+=rimCoverage*(1.0-alpha);
 // A fine, anti-aliased film edge catches the actual scenery's light.
 float surfaceRadius=length(normalize(vSurfaceDirection).xy);
 float filmEdge=smoothstep(0.985-max(fwidth(surfaceRadius),0.001),0.999,surfaceRadius)*max(uPicker,fullBody);
 vec3 pearlLight=mix(sharpLight,vec3(sharpBrightness),0.28);
 color+=filmEdge*(pearlLight*(0.80+sharpSource*1.40)+film*0.12*broadSource);
 alpha=max(alpha,filmEdge*(0.48+0.30*sharpSource));
 // Thin-film color follows curvature and varies across the surface.
 float opticalRim=pow(1.0-facing,2.8)*fullBody;
 float filmVariation=0.35+0.65*pow(0.5+0.5*sin(vLocal.y*5.0+vLocal.x*3.0+uSeed),2.0);
 color+=interference*opticalRim*filmVariation*0.19;
 color+=vec3(0.16,0.20,0.27)*opticalRim*0.22;
 vec3 ambientPearl=mix(vec3(0.21,0.24,0.32),softLight,0.30);
 float ambientCurve=pow(1.0-facing,1.5);
 color+=ambientPearl*(0.035+0.16*ambientCurve)*fullBody*smoothstep(0.008,0.085,environmentLuminance);
 if(max(uPicker,fullBody)>0.5){
   // Two soft area lights reflected by the actual curved surface. Angular
   // light footprints bend naturally across the sphere and its deformation.
   vec3 keyDirection=normalize(vec3(-0.56,0.72,-0.41));
   vec3 keyTangent=normalize(vec3(0.72,0.56,0.0));
   vec3 keyBinormal=normalize(cross(keyDirection,keyTangent));
   float keyReflection=exp(-pow(dot(ray,keyTangent)/0.34,2.0)-pow(dot(ray,keyBinormal)/0.065,2.0));
   keyReflection*=smoothstep(0.5,0.9,dot(ray,keyDirection));
   vec3 fillDirection=normalize(vec3(0.86,0.22,-0.46));
   vec3 fillTangent=normalize(vec3(-0.22,0.86,0.0));
   vec3 fillBinormal=normalize(cross(fillDirection,fillTangent));
   float fillReflection=exp(-pow(dot(ray,fillTangent)/0.40,2.0)-pow(dot(ray,fillBinormal)/0.045,2.0));
   fillReflection*=smoothstep(0.5,0.9,dot(ray,fillDirection));
   float edgeGloss=smoothstep(0.58,0.85,surfaceRadius);
   edgeGloss*=mix(0.48,1.0,uPicker);
   vec3 pearlKey=mix(vec3(0.90,0.92,1.0),sharpLight,0.10);
   vec3 pearlFill=mix(vec3(0.88,0.83,1.0),softLight,0.13);
   color+=edgeGloss*(pearlKey*keyReflection*1.25+pearlFill*fillReflection*0.65);
   alpha=max(alpha,edgeGloss*max(keyReflection,fillReflection)*0.94);
 }
 if(fullBody>0.5){
   // A broad clear collar and a finer silver line describe the film thickness.
   // The highlights vary in strength around the rim; the center stays clear.
   float collar=exp(-pow((surfaceRadius-0.948)/0.036,2.0));
   float angle=atan(normal.y,normal.x);
   float patches=pow(0.5+0.5*sin(angle*3.0+uSeed),5.0);
   float ambientLuma=dot(softLight,vec3(0.2126,0.7152,0.0722));
   vec3 rimTint=clamp((softLight+vec3(0.025))/(ambientLuma+0.025),vec3(0.65),vec3(1.4));
   vec3 opal=rimTint*0.48+interference*0.10;
   color+=collar*(opal*(0.09+patches*0.20)+softLight*0.35);
   float silver=exp(-pow((surfaceRadius-0.991)/max(0.003,fwidth(surfaceRadius)*1.2),2.0));
   color+=silver*mix(vec3(0.27,0.31,0.53),vec3(0.85,0.88,1.0),patches)*0.65;
   // Several reflections of small light sources sit on the domed film.
   float sparkleA=pow(max(0.0,dot(ray,normalize(vec3(-0.62,0.50,-0.60)))),180.0);
   float sparkleB=pow(max(0.0,dot(ray,normalize(vec3(0.74,0.42,-0.53)))),240.0);
   float sparkleC=pow(max(0.0,dot(ray,normalize(vec3(-0.40,-0.75,-0.52)))),150.0);
   color+=mix(vec3(0.85,0.87,1.0),rimTint,0.65)*(sparkleA*1.2+sparkleB+sparkleC*0.8)*(0.35+0.65*broadSource);
   alpha=max(alpha,max(sparkleA,max(sparkleB,sparkleC))*0.96);
 }
 if(uTextSurface>0.5){
   float textCore=1.0-smoothstep(0.62,0.98,surfaceRadius);
   vec3 sceneryReflection=softLight*0.16;
   vec3 readableFilm=vec3(0.048,0.043,0.085)+min(sceneryReflection,vec3(0.055));
   color=mix(color,readableFilm,textCore);
   alpha=mix(min(alpha,0.78),0.76,textCore);
 }
 alpha*=1.0-uTension*0.28*(1.0-fresnel);
 color+=vec3(0.08,0.085,0.10)*fresnel*uTension;
 alpha*=mix(1.0,0.82,vContactFilm)*contactCoverage;
 if(uPop>0.0)alpha*=pow(1.0-uPop,2.0);
 gl_FragColor = vec4(color, clamp(alpha,0.0,mix(0.96,0.98,uTextSurface))*uFaceOpacity);
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
}`;function Sl({scope:e,container:t,getEnvironment:n,dialog:r=!1,memoryOnly:i=!1}){r||document.body.classList.remove(`webgl-fallback`);let a;try{a=new ul({alpha:!0,antialias:!0,powerPreference:`low-power`})}catch{return document.body.classList.add(`webgl-fallback`),{dispose(){}}}a.debug.onShaderError=(e,t,n,r)=>{document.body.classList.add(`webgl-fallback`),console.error(`Bubble shader failed to compile`,e.getShaderInfoLog(n),e.getShaderInfoLog(r))},a.setClearColor(0,0),a.setPixelRatio(Math.min(devicePixelRatio,2)),a.domElement.className=i?`bubble-canvas memory-canvas`:`bubble-canvas`,a.domElement.setAttribute(`aria-hidden`,`true`),t.prepend(a.domElement);let o=new nr,s=new Oa;s.position.z=1e3,s.near=.1,s.far=2e3;let c=new Fi(1,112,80),l=new ya,u=new Map,d=new Map,f=new Ci(new Uint8Array([100,110,150,255]),1,1);f.needsUpdate=!0;let p=null,m=null,h=0,g=performance.now(),_=!1,v=e=>{if(!e)return f;if(!u.has(e)){let t=l.load(e);t.colorSpace=st,t.anisotropy=Math.min(8,a.capabilities.getMaxAnisotropy()),u.set(e,t)}return u.get(e)};function y(e,t,n){return new Wi({vertexShader:bl,fragmentShader:xl,transparent:!0,depthWrite:!1,side:0,uniforms:{uTime:{value:0},uRound:{value:+!!e},uSeed:{value:t},uImpulse:{value:0},uPress:{value:0},uPop:{value:0},uTension:{value:0},uTouch:{value:new G},uDrag:{value:new G},uContactPlanes:{value:Array.from({length:15},()=>new Y)},uPlaneCount:{value:0},uEnvironment:{value:f},uPhoto:{value:f},uPhotoRegion:{value:new Y(0,0,1,1)},uFaceOpacity:{value:1},uPicker:{value:0},uHasPhoto:{value:0},uTextSurface:{value:0},uPost:{value:+!!n},uScreen:{value:new G},uWorldViewport:{value:new Y},uEnvSize:{value:new G(1,1)},uEnvironmentAnchor:{value:new G(.5,.5)},uPhotoSize:{value:new G(1,1)},uClip:{value:new Y},uPointer:{value:new G(3,3)},uHover:{value:0}}})}let b=i?`.user-orb, .dm-orb, .dm-world-memory`:r?`.message`:`.memory-bubble, .reply-glass, .reply-form, .filter, .header-tools .round, .chip, .world-nav, footer button, .dm-chat-surface, .dm-scene-avatar, .dm-scene-control`;function x(){let t=new Set(e.querySelectorAll(b));for(let[e,n]of d)t.has(e)||(o.remove(n.mesh),n.mesh.material.dispose(),n.photoVideoTexture?.dispose(),d.delete(e));for(let e of t)if(!d.has(e)){let t=Number(e.dataset.lightingSeed??Math.random()*6);e.dataset.lightingSeed=String(t);let n=y(e.classList.contains(`user-orb`)||e.classList.contains(`dm-orb`)||e.classList.contains(`dm-world-memory`)||e.classList.contains(`dm-scene-avatar`)||e.classList.contains(`dm-scene-control`)||e.classList.contains(`round`)||e.classList.contains(`world-nav`),t,e.classList.contains(`memory-bubble`)),r=new bi(c,n);r.frustumCulled=!1,d.set(e,{mesh:r,state:{displacement:0,velocity:0},growing:e.classList.contains(`growing`)}),o.add(r)}}let S=new MutationObserver(x);S.observe(e,{childList:!0,subtree:!0}),x();let C={x:-1e4,y:-1e4},w=e=>{C.x=e.clientX,C.y=e.clientY},T=()=>{C.x=C.y=-1e4};e.addEventListener(`pointermove`,w),e.addEventListener(`pointerleave`,T);let E=e=>{let t=e.target.closest(b),n=d.get(t);if(n){let r=t.getBoundingClientRect();n.mesh.material.uniforms.uTouch.value.set((e.clientX-r.left)/r.width*2-1,1-(e.clientY-r.top)/r.height*2),n.state.velocity=2.8,n.held=!0,n.pressStarted=performance.now()}};e.addEventListener(`pointerdown`,E);let D=()=>{for(let e of d.values())e.held&&(e.state.velocity+=performance.now()-(e.pressStarted||0)<250?1.1:-.8*(e.pressDepth||0)),e.held=!1};e.addEventListener(`pointerup`,D),e.addEventListener(`pointercancel`,D),e.addEventListener(`lostpointercapture`,D),window.addEventListener(`blur`,D),a.domElement.addEventListener(`webglcontextlost`,e=>{e.preventDefault(),document.body.classList.add(`webgl-fallback`)});function O(i){if(_)return;h=requestAnimationFrame(O);let c=n(),l=Math.min((i-g)/1e3,1/30);if(g=i,r&&!e.open)return;let f=r?t.getBoundingClientRect():{left:0,top:0,width:innerWidth,height:innerHeight},y=Math.max(1,f.width),b=Math.max(1,f.height);(a.domElement.width!==Math.round(y*a.getPixelRatio())||a.domElement.height!==Math.round(b*a.getPixelRatio()))&&(a.setSize(y,b,!1),s.left=0,s.right=y,s.top=b,s.bottom=0,s.updateProjectionMatrix());let x=v(c.background);c.video&&c.video!==m&&(p?.dispose(),m=c.video,p=new Oi(m),p.colorSpace=st),!c.video&&m&&(p?.dispose(),p=null,m=null),p&&(x=p);let S=x.image||{};for(let[e,t]of d){let n=e.getBoundingClientRect(),r=n.left-f.left,o=n.top-f.top,s=n.width>0&&n.height>0&&o+n.height>0&&o<b&&r+n.width>0&&r<y,u=!!e.closest(`.shared-dm-world`)||e.classList.contains(`dm-entry-orb`);if(t.mesh.visible=s&&e.dataset.entrySuppressed!==`1`&&(e.classList.contains(`dm-entry-orb`)||(c.dm?u:!u)),!t.mesh.visible)continue;let d=t.mesh.material.uniforms;d.uTextSurface.value=+!!e.classList.contains(`dm-chat-surface`),d.uFaceOpacity.value=Number(e.closest(`.social-face`)?.dataset.faceOpacity??1),d.uPicker.value=+!!e.matches(`.dm-orb,.dm-world-memory,.dm-chat-surface,.dm-scene-avatar,.dm-scene-control`);let p=(e.dataset.photoRegion||`0,0,1,1`).split(`,`).map(Number);d.uPhotoRegion.value.set(...p),e.classList.contains(`dm-entry-orb`)&&(d.uFaceOpacity.value*=Number(getComputedStyle(e).opacity));let m=C.x>=n.left&&C.x<=n.right&&C.y>=n.top&&C.y<=n.bottom;d.uHover.value+=(Number(m)-d.uHover.value)*.12,d.uPointer.value.set((C.x-n.left)/n.width*2-1,1-(C.y-n.top)/n.height*2);let h=e.classList.contains(`user-orb`),g=c.paused?0:i/1e3,_=e.classList.contains(`growing`);t.growing&&!_&&(t.state.velocity=.8),t.growing=_,pl(t.state,l);let w=h&&!c.paused&&Number(e.dataset.contactStrength||0)<.1?Math.sin(g*.65+d.uSeed.value)*3:0;t.mesh.position.set(r+n.width/2,b-o-n.height/2+w,0),t.mesh.scale.set(n.width/2*1.018,n.height/2*1.025,Math.min(n.width,n.height)/2);let T=Number(e.dataset.pressure||0);t.lastPressure=T,d.uTension.value+=(T-d.uTension.value)*.18,t.pressDepth=(t.pressDepth||0)+((t.held?.65+T*.55:0)-(t.pressDepth||0))*.22,d.uPress.value=t.pressDepth,d.uDrag.value.lerp(new G(Number(e.dataset.dragX||0),Number(e.dataset.dragY||0)),.18),d.uPop.value=e.classList.contains(`popping`)?Math.min(1,(i-Number(e.dataset.popAt||i))/280):0;let E=(e._bubbleContacts||[]).filter(e=>e.isConnected).slice(0,15);d.uPlaneCount.value=E.length;let D=r+n.width/2,O=b-o-n.height/2;for(let t=0;t<E.length;t++){let r=E[t].getBoundingClientRect(),i=r.left-f.left+r.width/2,a=b-(r.top-f.top)-r.height/2,o=i-D,s=a-O,c=Math.hypot(o,s);c<.001&&(o=e.dataset.bubbleId<E[t].dataset.bubbleId?1:-1,s=0,c=1),o/c,s/c;let l=n.width/2*1.018,u=r.width/2*1.018,p=gl(D,O,l,D+o,O+s,u);d.uContactPlanes.value[t].set(p.x,p.y,p.offset,0)}let k=Number(e.dataset.releaseKick||0);k&&k!==t.releaseKick&&(t.releaseKick=k,t.state.velocity=2);let A=a.getPixelRatio();d.uWorldViewport.value.set(f.left*A,(innerHeight-f.top-b)*A,innerWidth*A,innerHeight*A),d.uEnvironmentAnchor.value.set((n.left+n.width/2)/Math.max(1,innerWidth),1-(n.top+n.height/2-w)/Math.max(1,innerHeight)),d.uTime.value=g,d.uImpulse.value=t.state.displacement,d.uEnvironment.value=x,d.uScreen.value.set(y*a.getPixelRatio(),b*a.getPixelRatio()),d.uEnvSize.value.set(S.videoWidth||S.width||1,S.videoHeight||S.height||1);let j=e.closest(`.message-log, .bubble-garden, .dm-scene-log`)?.getBoundingClientRect()||{left:f.left,top:f.top,right:f.left+y,bottom:f.top+b},M=a.getPixelRatio();d.uClip.value.set(Math.max(0,j.left-f.left)*M,Math.max(0,b-(j.bottom-f.top))*M,Math.min(y,j.right-f.left)*M,Math.min(b,b-(j.top-f.top))*M);let N=e._bubbleVideo;N!==t.photoVideoElement&&(t.photoVideoTexture?.dispose(),t.photoVideoTexture=null,t.photoVideoElement=N,N&&(t.photoVideoTexture=new Oi(N),t.photoVideoTexture.colorSpace=st));let P=N&&N.readyState>=2?t.photoVideoTexture:v(e.dataset.image);d.uHasPhoto.value=N&&N.readyState>=2||e.dataset.image?1:0,d.uPhoto.value=P,d.uPhotoSize.value.set(P.image?.videoWidth||P.image?.width||1,P.image?.videoHeight||P.image?.height||1)}let w=new Set([...d.keys()].map(e=>e.dataset.image).filter(Boolean));for(let[e,t]of u)e.startsWith(`blob:`)&&!w.has(e)&&e!==c.background&&(t.dispose(),u.delete(e));a.render(o,s)}return h=requestAnimationFrame(O),{dispose(){_=!0,cancelAnimationFrame(h),S.disconnect(),e.removeEventListener(`pointerdown`,E),e.removeEventListener(`pointerup`,D),e.removeEventListener(`pointercancel`,D),e.removeEventListener(`lostpointercapture`,D),window.removeEventListener(`blur`,D),e.removeEventListener(`pointermove`,w),e.removeEventListener(`pointerleave`,T);for(let e of d.values())e.mesh.material.dispose(),e.photoVideoTexture?.dispose();c.dispose();for(let e of u.values())e.dispose();p?.dispose(),f.dispose(),a.dispose(),a.domElement.remove()}}}var Cl=`
uniform float uTime;
uniform float uPicker;
uniform float uTextSurface;
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
 if(uTextSurface>0.5){
   // Gently pinched, unequal lobes give text bubbles a living film silhouette.
   // The contour and its normals change together, so gloss follows the shape.
   float contourX=p.x;
   float contourPhase=uTime*0.72+uSeed;
   float waist=exp(-contourX*contourX*3.0);
   float profile=1.0-0.10*waist+0.055*sin(contourX*4.0+contourPhase);
   float profileSlope=0.60*contourX*waist+0.22*cos(contourX*4.0+contourPhase);
   float centerEnvelope=max(0.0,1.0-contourX*contourX);
   float bendPhase=contourX*3.0+contourPhase*0.8;
   float bend=0.035*sin(bendPhase)*centerEnvelope;
   float bendSlope=0.035*(3.0*cos(bendPhase)*centerEnvelope-2.0*contourX*sin(bendPhase));
   n.x-=n.y*(p.y*profileSlope+bendSlope)/profile;
   n.y/=profile;
   p.y=p.y*profile+bend;
 }
 float wave = sin(p.y * 4.4 + uTime * 1.3 + uSeed) * sin(p.x * 3.2 - uTime * 0.9 + uSeed);
 float amount = mix(0.025,0.015,uPicker);
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
}`,wl=`
uniform sampler2D uEnvironment;
uniform sampler2D uPhoto;
uniform vec4 uPhotoRegion;
uniform float uFaceOpacity;
uniform float uPicker;
uniform float uHasPhoto;
uniform float uTextSurface;
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
 // Picker worlds sit visually behind a thin film, rather than being washed
 // with a broad reflection across their centers. Keep existing memories intact.
 float thinGrazing=pow(1.0-facing,4.2);
 rimReflection=mix(rimReflection,(sharpLight*sharpSource*2.0+softLight*broadSource*0.55)*thinGrazing,uPicker);
 rimCoverage=mix(rimCoverage,thinGrazing*(0.22+0.35*sharpSource),uPicker);
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
   // A world bubble is a window into a wide scene: preserve its proportions
   // instead of squeezing the full panorama into a square spherical map.
   if(uPicker>0.5)uv=cover(uv,uPhotoSize,1.0);
   // Map the complete photo edge-to-edge onto the hemisphere, without a cover crop.
   vec3 photo = texture2D(uPhoto, uPhotoRegion.xy+clamp(uv,0.002,0.998)*uPhotoRegion.zw).rgb;
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
   photo*=mix(vec3(1.0),lightTint,mix(0.30+edgeLighting*0.20,edgeLighting*0.08,uPicker));
   photo*=mix(mix(0.72,1.04,ambientDaylight),1.04,uPicker)*(0.96+0.04*facing);
   float litLuminance=dot(photo,vec3(0.2126,0.7152,0.0722));
   photo=mix(vec3(litLuminance),photo,mix(mix(0.90,1.0,ambientDaylight),1.0,uPicker));
   // Protect the image center; let local scenery define the curved outer film.
   float memoryEnvelope=1.0-smoothstep(0.78,0.985,length(surface.xy));
   memoryEnvelope=mix(memoryEnvelope,1.0-smoothstep(0.90,0.998,length(surface.xy)),uPicker);
   float photoLuminance=dot(photo,vec3(0.2126,0.7152,0.0722));
   float imagePriority=0.87+0.06*smoothstep(0.05,0.65,photoLuminance)-0.025*sceneryLight;
   float memoryWeight=imagePriority*memoryEnvelope*(1.0-0.14*edgeLighting);
   memoryWeight=mix(memoryWeight,0.96*memoryEnvelope,uPicker);
   color=mix(color,photo,memoryWeight);
   alpha=mix(alpha,mix(0.84,0.92,uPicker),memoryEnvelope);
 }
 // A separate optical coat stays visible over the world. Its Fresnel response
 // uses the deformed surface normal: reflections bend and strengthen toward
 // the sides, while the central scenery remains readable.
 float coatReflectance=0.025+0.50*pow(1.0-facing,2.6);
 vec3 coatReflection=environment*(1.05+0.45*sceneryLight);
 color=mix(color,coatReflection,coatReflectance*uPicker);
 // Add the world reflection over the memory, restricted to grazing film.
 color+=rimReflection;
 alpha+=rimCoverage*(1.0-alpha);
 // A fine, anti-aliased film edge catches the actual scenery's light. No
 // uniform white gloss spot or colored selection ring over the interior.
 float surfaceRadius=length(normalize(vSurfaceDirection).xy);
 float filmEdge=smoothstep(0.988-max(fwidth(surfaceRadius),0.001),0.999,surfaceRadius)*uPicker;
 vec3 pearlLight=mix(sharpLight,vec3(sharpBrightness),0.28);
 color+=filmEdge*(pearlLight*(0.80+sharpSource*1.40)+film*0.12*broadSource);
 alpha=max(alpha,filmEdge*(0.48+0.30*sharpSource));
 if(uPicker>0.5){
   // Two soft area lights reflected by the actual curved surface. Angular
   // light footprints bend naturally across the sphere and its deformation.
   vec3 keyDirection=normalize(vec3(-0.56,0.72,-0.41));
   vec3 keyTangent=normalize(vec3(0.72,0.56,0.0));
   vec3 keyBinormal=normalize(cross(keyDirection,keyTangent));
   float keyReflection=exp(-pow(dot(ray,keyTangent)/0.34,2.0)-pow(dot(ray,keyBinormal)/0.065,2.0));
   keyReflection*=smoothstep(0.5,0.9,dot(ray,keyDirection));
   vec3 fillDirection=normalize(vec3(0.86,0.22,-0.46));
   vec3 fillTangent=normalize(vec3(-0.22,0.86,0.0));
   vec3 fillBinormal=normalize(cross(fillDirection,fillTangent));
   float fillReflection=exp(-pow(dot(ray,fillTangent)/0.40,2.0)-pow(dot(ray,fillBinormal)/0.045,2.0));
   fillReflection*=smoothstep(0.5,0.9,dot(ray,fillDirection));
   float edgeGloss=smoothstep(0.67,0.85,surfaceRadius);
   vec3 pearlKey=mix(vec3(0.90,0.92,1.0),sharpLight,0.10);
   vec3 pearlFill=mix(vec3(0.88,0.83,1.0),softLight,0.13);
   color+=edgeGloss*(pearlKey*keyReflection*1.25+pearlFill*fillReflection*0.65);
   alpha=max(alpha,edgeGloss*max(keyReflection,fillReflection)*0.94);
 }
 if(uTextSurface>0.5){
   float textCore=1.0-smoothstep(0.62,0.98,surfaceRadius);
   vec3 sceneryReflection=softLight*0.16;
   vec3 readableFilm=vec3(0.048,0.043,0.085)+min(sceneryReflection,vec3(0.055));
   color=mix(color,readableFilm,textCore);
   alpha=mix(min(alpha,0.78),0.76,textCore);
 }
 alpha*=1.0-uTension*0.28*(1.0-fresnel);
 color+=vec3(0.08,0.085,0.10)*fresnel*uTension;
 alpha*=mix(1.0,0.82,vContactFilm)*contactCoverage;
 if(uPop>0.0)alpha*=pow(1.0-uPop,2.0);
 gl_FragColor = vec4(color, clamp(alpha,0.0,mix(0.96,0.98,uTextSurface))*uFaceOpacity);
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
}`;function Tl({scope:e,container:t,getEnvironment:n,dialog:r=!1,memoryOnly:i=!1}){r||document.body.classList.remove(`webgl-fallback`);let a;try{a=new ul({alpha:!0,antialias:!0,powerPreference:`low-power`})}catch{return document.body.classList.add(`webgl-fallback`),{dispose(){}}}a.debug.onShaderError=(e,t,n,r)=>{document.body.classList.add(`webgl-fallback`),console.error(`Bubble shader failed to compile`,e.getShaderInfoLog(n),e.getShaderInfoLog(r))},a.setClearColor(0,0),a.setPixelRatio(Math.min(devicePixelRatio,2)),a.domElement.className=i?`bubble-canvas memory-canvas`:`bubble-canvas`,a.domElement.setAttribute(`aria-hidden`,`true`),t.prepend(a.domElement);let o=new nr,s=new Oa;s.position.z=1e3,s.near=.1,s.far=2e3;let c=new Fi(1,112,80),l=new ya,u=new Map,d=new Map,f=new Ci(new Uint8Array([100,110,150,255]),1,1);f.needsUpdate=!0;let p=null,m=null,h=0,g=performance.now(),_=!1,v=e=>{if(!e)return f;if(!u.has(e)){let t=l.load(e);t.colorSpace=st,t.anisotropy=Math.min(8,a.capabilities.getMaxAnisotropy()),u.set(e,t)}return u.get(e)};function y(e,t,n){return new Wi({vertexShader:Cl,fragmentShader:wl,transparent:!0,depthWrite:!1,side:0,uniforms:{uTime:{value:0},uRound:{value:+!!e},uSeed:{value:t},uImpulse:{value:0},uPress:{value:0},uPop:{value:0},uTension:{value:0},uTouch:{value:new G},uDrag:{value:new G},uContactPlanes:{value:Array.from({length:15},()=>new Y)},uPlaneCount:{value:0},uEnvironment:{value:f},uPhoto:{value:f},uPhotoRegion:{value:new Y(0,0,1,1)},uFaceOpacity:{value:1},uPicker:{value:0},uHasPhoto:{value:0},uTextSurface:{value:0},uPost:{value:+!!n},uScreen:{value:new G},uWorldViewport:{value:new Y},uEnvSize:{value:new G(1,1)},uEnvironmentAnchor:{value:new G(.5,.5)},uPhotoSize:{value:new G(1,1)},uClip:{value:new Y},uPointer:{value:new G(3,3)},uHover:{value:0}}})}let b=i?`.user-orb, .dm-orb, .dm-world-memory`:r?`.message`:`.memory-bubble, .reply-glass, .reply-form, .filter, .header-tools .round, .chip, .world-nav, footer button, .dm-chat-surface, .dm-scene-avatar, .dm-scene-control`;function x(){let t=new Set(e.querySelectorAll(b));for(let[e,n]of d)t.has(e)||(o.remove(n.mesh),n.mesh.material.dispose(),n.photoVideoTexture?.dispose(),d.delete(e));for(let e of t)if(!d.has(e)){let t=y(e.classList.contains(`user-orb`)||e.classList.contains(`dm-orb`)||e.classList.contains(`dm-world-memory`)||e.classList.contains(`dm-scene-avatar`)||e.classList.contains(`dm-scene-control`)||e.classList.contains(`round`)||e.classList.contains(`world-nav`),Math.random()*6,e.classList.contains(`memory-bubble`)),n=new bi(c,t);n.frustumCulled=!1,d.set(e,{mesh:n,state:{displacement:0,velocity:0},growing:e.classList.contains(`growing`)}),o.add(n)}}let S=new MutationObserver(x);S.observe(e,{childList:!0,subtree:!0}),x();let C={x:-1e4,y:-1e4},w=e=>{C.x=e.clientX,C.y=e.clientY},T=()=>{C.x=C.y=-1e4};e.addEventListener(`pointermove`,w),e.addEventListener(`pointerleave`,T);let E=e=>{let t=e.target.closest(b),n=d.get(t);if(n){let r=t.getBoundingClientRect();n.mesh.material.uniforms.uTouch.value.set((e.clientX-r.left)/r.width*2-1,1-(e.clientY-r.top)/r.height*2),n.state.velocity=2.8,n.held=!0,n.pressStarted=performance.now()}};e.addEventListener(`pointerdown`,E);let D=()=>{for(let e of d.values())e.held&&(e.state.velocity+=performance.now()-(e.pressStarted||0)<250?1.1:-.8*(e.pressDepth||0)),e.held=!1};e.addEventListener(`pointerup`,D),e.addEventListener(`pointercancel`,D),e.addEventListener(`lostpointercapture`,D),window.addEventListener(`blur`,D),a.domElement.addEventListener(`webglcontextlost`,e=>{e.preventDefault(),document.body.classList.add(`webgl-fallback`)});function O(i){if(_)return;h=requestAnimationFrame(O);let c=n(),l=Math.min((i-g)/1e3,1/30);if(g=i,r&&!e.open)return;let f=r?t.getBoundingClientRect():{left:0,top:0,width:innerWidth,height:innerHeight},y=Math.max(1,f.width),b=Math.max(1,f.height);(a.domElement.width!==Math.round(y*a.getPixelRatio())||a.domElement.height!==Math.round(b*a.getPixelRatio()))&&(a.setSize(y,b,!1),s.left=0,s.right=y,s.top=b,s.bottom=0,s.updateProjectionMatrix());let x=v(c.background);c.video&&c.video!==m&&(p?.dispose(),m=c.video,p=new Oi(m),p.colorSpace=st),!c.video&&m&&(p?.dispose(),p=null,m=null),p&&(x=p);let S=x.image||{};for(let[e,t]of d){let n=e.getBoundingClientRect(),r=n.left-f.left,o=n.top-f.top,s=n.width>0&&n.height>0&&o+n.height>0&&o<b&&r+n.width>0&&r<y,u=!!e.closest(`.shared-dm-world`)||e.classList.contains(`dm-entry-orb`);if(t.mesh.visible=s&&e.dataset.entrySuppressed!==`1`&&(e.classList.contains(`dm-entry-orb`)||(c.dm?u:!u)),!t.mesh.visible)continue;let d=t.mesh.material.uniforms;d.uTextSurface.value=+!!e.classList.contains(`dm-chat-surface`),d.uFaceOpacity.value=Number(e.closest(`.social-face`)?.dataset.faceOpacity??1),d.uPicker.value=+!!e.matches(`.dm-orb,.dm-world-memory,.dm-chat-surface,.dm-scene-avatar,.dm-scene-control`);let p=(e.dataset.photoRegion||`0,0,1,1`).split(`,`).map(Number);d.uPhotoRegion.value.set(...p),e.classList.contains(`dm-entry-orb`)&&(d.uFaceOpacity.value*=Number(getComputedStyle(e).opacity));let m=C.x>=n.left&&C.x<=n.right&&C.y>=n.top&&C.y<=n.bottom;d.uHover.value+=(Number(m)-d.uHover.value)*.12,d.uPointer.value.set((C.x-n.left)/n.width*2-1,1-(C.y-n.top)/n.height*2);let h=e.classList.contains(`user-orb`),g=c.paused?0:i/1e3,_=e.classList.contains(`growing`);t.growing&&!_&&(t.state.velocity=.8),t.growing=_,pl(t.state,l);let w=h&&!c.paused&&Number(e.dataset.contactStrength||0)<.1?Math.sin(g*.65+d.uSeed.value)*3:0;t.mesh.position.set(r+n.width/2,b-o-n.height/2+w,0),t.mesh.scale.set(n.width/2*1.018,n.height/2*1.025,Math.min(n.width,n.height)/2);let T=Number(e.dataset.pressure||0);t.lastPressure=T,d.uTension.value+=(T-d.uTension.value)*.18,t.pressDepth=(t.pressDepth||0)+((t.held?.65+T*.55:0)-(t.pressDepth||0))*.22,d.uPress.value=t.pressDepth,d.uDrag.value.lerp(new G(Number(e.dataset.dragX||0),Number(e.dataset.dragY||0)),.18),d.uPop.value=e.classList.contains(`popping`)?Math.min(1,(i-Number(e.dataset.popAt||i))/280):0;let E=(e._bubbleContacts||[]).filter(e=>e.isConnected).slice(0,15);d.uPlaneCount.value=E.length;let D=r+n.width/2,O=b-o-n.height/2;for(let t=0;t<E.length;t++){let r=E[t].getBoundingClientRect(),i=r.left-f.left+r.width/2,a=b-(r.top-f.top)-r.height/2,o=i-D,s=a-O,c=Math.hypot(o,s);c<.001&&(o=e.dataset.bubbleId<E[t].dataset.bubbleId?1:-1,s=0,c=1),o/c,s/c;let l=n.width/2*1.018,u=r.width/2*1.018,p=gl(D,O,l,D+o,O+s,u);d.uContactPlanes.value[t].set(p.x,p.y,p.offset,0)}let k=Number(e.dataset.releaseKick||0);k&&k!==t.releaseKick&&(t.releaseKick=k,t.state.velocity=2);let A=a.getPixelRatio();d.uWorldViewport.value.set(f.left*A,(innerHeight-f.top-b)*A,innerWidth*A,innerHeight*A),d.uEnvironmentAnchor.value.set((n.left+n.width/2)/Math.max(1,innerWidth),1-(n.top+n.height/2-w)/Math.max(1,innerHeight)),d.uTime.value=g,d.uImpulse.value=t.state.displacement,d.uEnvironment.value=x,d.uScreen.value.set(y*a.getPixelRatio(),b*a.getPixelRatio()),d.uEnvSize.value.set(S.videoWidth||S.width||1,S.videoHeight||S.height||1);let j=e.closest(`.message-log, .bubble-garden, .dm-scene-log`)?.getBoundingClientRect()||{left:f.left,top:f.top,right:f.left+y,bottom:f.top+b},M=a.getPixelRatio();d.uClip.value.set(Math.max(0,j.left-f.left)*M,Math.max(0,b-(j.bottom-f.top))*M,Math.min(y,j.right-f.left)*M,Math.min(b,b-(j.top-f.top))*M);let N=e._bubbleVideo;N!==t.photoVideoElement&&(t.photoVideoTexture?.dispose(),t.photoVideoTexture=null,t.photoVideoElement=N,N&&(t.photoVideoTexture=new Oi(N),t.photoVideoTexture.colorSpace=st));let P=N&&N.readyState>=2?t.photoVideoTexture:v(e.dataset.image);d.uHasPhoto.value=N&&N.readyState>=2||e.dataset.image?1:0,d.uPhoto.value=P,d.uPhotoSize.value.set(P.image?.videoWidth||P.image?.width||1,P.image?.videoHeight||P.image?.height||1)}let w=new Set([...d.keys()].map(e=>e.dataset.image).filter(Boolean));for(let[e,t]of u)e.startsWith(`blob:`)&&!w.has(e)&&e!==c.background&&(t.dispose(),u.delete(e));a.render(o,s)}return h=requestAnimationFrame(O),{dispose(){_=!0,cancelAnimationFrame(h),S.disconnect(),e.removeEventListener(`pointerdown`,E),e.removeEventListener(`pointerup`,D),e.removeEventListener(`pointercancel`,D),e.removeEventListener(`lostpointercapture`,D),window.removeEventListener(`blur`,D),e.removeEventListener(`pointermove`,w),e.removeEventListener(`pointerleave`,T);for(let e of d.values())e.mesh.material.dispose(),e.photoVideoTexture?.dispose();c.dispose();for(let e of u.values())e.dispose();p?.dispose(),f.dispose(),a.dispose(),a.domElement.remove()}}}function El(e){let t,n,r=!1;function i(){if(r)return;let i=[`pastel`,`developmental`].includes(document.documentElement.dataset.design)?document.documentElement.dataset.design:`original`;i!==t&&(n?.dispose(),t=i,n=(i===`pastel`?Tl:i===`developmental`?yl:Sl)(e))}let a=new MutationObserver(i);return a.observe(document.documentElement,{attributes:!0,attributeFilter:[`data-design`]}),i(),{dispose(){r=!0,a.disconnect(),n?.dispose()}}}function Dl(e,t,n=56){let r=Math.hypot(t.x-e.x,t.y-e.y),i=Math.floor(r/n);return Array.from({length:i},(i,a)=>({x:e.x+(t.x-e.x)*((a+1)*n/r),y:e.y+(t.y-e.y)*((a+1)*n/r)}))}function Ol({root:e,getServer:t,imageField:n,toast:r,initialImages:o=[],rememberPop:s}){let c=[],l=new Set,u=new Set,d=null,f=null,p=null,m=null,h=0,g=performance.now(),_=!1,v=!1,y=0,b=document.createElement(`div`);b.className=`bubble-world`,b.setAttribute(`aria-label`,`Your memory bubbles`),e.append(b),e.tabIndex=0;let x=(e,t,n)=>{let r=document.createElement(e);return r.className=t,n!==void 0&&(r.textContent=n),r},S=e=>{let t=x(`div`,`user-orb`);t.dataset.bubbleId=e.id,t.dataset.image=e.image||``,t.style.setProperty(`--bubble-photo-fallback`,e.image?`url(`+JSON.stringify(e.image)+`)`:`none`),t.setAttribute(`role`,`group`),t.setAttribute(`aria-label`,`Memory bubble. Tap to write; drag the film to move; hold the film to pop.`);let o=x(`textarea`,`bubble-writing`);o.hidden=!0,o.value=e.text||``,o.maxLength=1500,o.placeholder=`write a little memory…`,o.setAttribute(`aria-label`,`Write directly inside this memory bubble`),o.oninput=()=>{e.text=o.value,u.textContent=e.text};let s=x(`button`,`bubble-photo`,`✧`);s.type=`button`,s.setAttribute(`aria-label`,`Change image inside this bubble`);let c=n(n=>{if(_){URL.revokeObjectURL(n);return}l.add(n),e.image=n,t.dataset.image=n,t.style.setProperty(`--bubble-photo-fallback`,`url(`+JSON.stringify(n)+`)`),t.classList.remove(`audio-only`)});c.className=`inline-upload`,c.hidden=!0,s.onclick=()=>c.querySelector(`input`).click();let u=x(`span`,`memory-hover-text`,e.text||``),d=x(`button`,`bubble-detach`,`∿`);d.type=`button`,d.setAttribute(`aria-label`,`Release this bubble from its neighbours`),d.title=`release bubble`,d.hidden=!0,d.onclick=n=>{n.stopPropagation(),T(e,t)},t.append(u,o,s,d,c),t.onclick=e=>{performance.now()>y&&e.target===t&&!t.classList.contains(`dragging`)&&!t.classList.contains(`popping`)&&w(t)},t.onkeydown=e=>{e.target===t&&e.code===`Enter`&&w(t)},t.tabIndex=0,a(e,t,l,r);let f=x(`button`,`bubble-add-media`,`♫ / ▷`);f.type=`button`,f.setAttribute(`aria-label`,`Add video or audio to this bubble`);let p=i(t=>{if(_){t.element.pause(),URL.revokeObjectURL(t.url);return}e.media&&(e.media.element.pause(),l.delete(e.media.url),URL.revokeObjectURL(e.media.url)),l.add(t.url),e.media=t,D()},r);return p.hidden=!0,p.className=`inline-upload`,f.onclick=()=>p.querySelector(`input`).click(),t.append(f,p),E(e,t),t};function C(){m&&=(m.querySelector(`textarea`).blur(),m.querySelector(`textarea`).hidden=!0,m.classList.remove(`editing`),null)}function w(e){m!==e&&C(),m=e,e.classList.add(`editing`);let t=e.querySelector(`textarea`);t.hidden=!1,t.focus()}function T(e,t){for(let t of[...u])t.split(`:`).includes(e.id)&&u.delete(t);e.detachedUntil=1/0;let n=c.filter(t=>t!==e&&t.server===e.server&&!t.popped),i=null,a=1/0,o=ml(e.x*innerWidth,e.y*innerHeight,e.diameter,innerWidth,innerHeight);for(let t=1;t<=5&&!i;t++)for(let r=0;r<32;r++){let s=r*Math.PI*2/32,c=ml(o.x+Math.cos(s)*e.diameter*.65*t,o.y+Math.sin(s)*e.diameter*.65*t,e.diameter,innerWidth,innerHeight);if(n.every(e=>{let t=ml(e.x*innerWidth,e.y*innerHeight,e.diameter,innerWidth,innerHeight);return Math.hypot(c.x-t.x,c.y-t.y)>(c.diameter+t.diameter)*.55+8})){let e=Math.hypot(c.x-o.x,c.y-o.y);e<a&&(a=e,i=c)}}i&&(e.x=i.x/innerWidth,e.y=i.y/innerHeight),e.vx=e.vy=0,t._bubbleContacts=[],t.dataset.contactStrength=`0`,t.dataset.releaseKick=String(performance.now()),E(e,t),t.querySelector(`.bubble-detach`).hidden=!0,r(`Bubble released.`)}function E(e,t){let n=ml(e.x*innerWidth,e.y*innerHeight,e.diameter,innerWidth,innerHeight);t.style.width=t.style.height=n.diameter+`px`,t.style.left=n.x-n.diameter/2+`px`,t.style.top=n.y-n.diameter/2+`px`}function D(){C(),O(),c.forEach(e=>e.media?.element.pause()),b.replaceChildren(),c.filter(e=>e.server===t().id&&!e.popped).forEach(e=>b.append(S(e)))}function O(){if(d=null,f){for(let e of[...u])e.split(`:`).includes(f.bubble.id)&&u.delete(e);f.node.remove(),f=null}p&&=(p.node.classList.remove(`dragging`),p.node.dataset.dragX=p.node.dataset.dragY=`0`,null),e.classList.remove(`inflating-world`)}function k(n){if(e.dataset.memoryWatching||e.dataset.socialFace===`picker`||e.dataset.sharedDM||f||p||document.querySelector(`#panel`).open||n.button!==void 0&&n.button!==0||n.target.closest(`button,input,textarea,select,main,header,footer,dialog,.user-orb`))return;n.preventDefault(),n.pointerId!==void 0&&e.setPointerCapture(n.pointerId);let r={id:crypto.randomUUID(),server:t().id,x:(n.clientX??innerWidth*.18)/innerWidth,y:(n.clientY??innerHeight*.48)/innerHeight,diameter:44,text:``,image:null,visibility:`private`,vx:0,vy:0},i=S(r);i.classList.add(`growing`),b.append(i),f={bubble:r,node:i,started:performance.now()},e.classList.add(`inflating-world`)}function A(e,n){let r={id:crypto.randomUUID(),server:t().id,x:e/innerWidth,y:n/innerHeight,expiresAt:performance.now()+5e3,diameter:64+Math.random()*24,text:``,image:null,visibility:`private`,vx:0,vy:0};c.push(r);let i=S(r);b.append(i),i.dataset.releaseKick=String(performance.now())}function j(t){f||p||d||document.querySelector(`#panel`).open||t.target.closest(`button,input,textarea,select,header,footer,dialog,a`)||(t.preventDefault(),C(),e.setPointerCapture(t.pointerId),d={id:t.pointerId,x:t.clientX,y:t.clientY},A(d.x,d.y))}let M=t=>{t.button===1&&!e.dataset.sharedDM&&e.dataset.socialFace!==`picker`&&!document.querySelector(`#panel`).open&&t.preventDefault()},N=t=>{if(e.dataset.memoryWatching||e.dataset.socialFace===`picker`||e.dataset.sharedDM)return;if(t.button===1){j(t);return}let n=t.target.closest(`.user-orb`);if(m&&!m.contains(t.target)&&(C(),!n)){t.preventDefault(),v=!0;return}if(n&&!t.target.closest(`textarea,input,button`)&&!n.classList.contains(`popping`)){if(t.button!==0)return;let r=c.find(e=>e.id===n.dataset.bubbleId);if(!r)return;t.preventDefault(),e.setPointerCapture(t.pointerId),p={bubble:r,node:n,startX:t.clientX,startY:t.clientY,oldX:r.x,oldY:r.y,lastX:t.clientX,lastY:t.clientY,moved:!1};return}k(t)},P=e=>{if(d){if(e.pointerId!==d.id)return;if(!(e.buttons&4)){d=null;return}e.preventDefault();for(let t of Dl(d,{x:e.clientX,y:e.clientY}))A(t.x,t.y),d.x=t.x,d.y=t.y;return}if(!p)return;let t=e.clientX-p.startX,n=e.clientY-p.startY;if(Math.hypot(t,n)>7&&(p.moved=!0),!p.moved)return;p.bubble.detachedUntil=0;let r=Math.max(44,p.node.getBoundingClientRect().width);p.node.dataset.dragX=String(Math.max(-.6,Math.min(.6,(e.clientX-p.lastX)/r*6))),p.node.dataset.dragY=String(Math.max(-.6,Math.min(.6,-(e.clientY-p.lastY)/r*6))),p.lastX=e.clientX,p.lastY=e.clientY;let i=ml(p.oldX*innerWidth+t,p.oldY*innerHeight+n,p.bubble.diameter,innerWidth,innerHeight);p.bubble.x=i.x/innerWidth,p.bubble.y=i.y/innerHeight,p.bubble.vx=p.bubble.vy=0,E(p.bubble,p.node),p.node.classList.add(`dragging`)},F=t=>{if(d){if(t&&t.pointerId!==d.id)return;let n=d.id;d=null,y=performance.now()+350,e.hasPointerCapture(n)&&e.releasePointerCapture(n);return}if(v){v=!1;return}if(p){let e=p;p=null,y=performance.now()+350,e.node.classList.remove(`dragging`),e.node.dataset.dragX=e.node.dataset.dragY=`0`,!e.moved&&!e.node.classList.contains(`popping`)&&w(e.node);return}if(f){let{bubble:t,node:n}=f;f=null,c.push(t),n.classList.remove(`growing`),e.classList.remove(`inflating-world`)}},ee=t=>{t.code===`Escape`&&(C(),O()),t.target===e&&(t.code===`Space`||t.code===`Enter`)&&!t.repeat&&k(t)},te=e=>{f&&(e.code===`Space`||e.code===`Enter`)&&(e.preventDefault(),F())},ne=e=>{let t=e.target.closest(`.user-orb`);if(!t)return;let n=c.find(e=>e.id===t.dataset.bubbleId);if(n){if(n.popped=!0,n.media?.element.pause(),p?.bubble===n&&(p=null),n.expiresAt){n.removeAt=performance.now()+300;return}s?.(()=>{n.popped=!1,n.vx=n.vy=0,D()})}};function re(e){for(let t=c.length-1;t>=0;t--){let n=c[t];if(n.expiresAt){if(!n.removeAt&&e>=n.expiresAt){n.popped=!0,n.media?.element.pause(),n.removeAt=e+300;let t=b.querySelector(`[data-bubble-id="`+n.id+`"]`);t&&(m===t&&C(),p?.bubble===n&&(p=null,t.classList.remove(`dragging`)),t.classList.add(`popping`),t.dataset.pressure=`0`,t.dataset.popAt=String(e),t.dispatchEvent(new CustomEvent(`bubblepop`,{bubbles:!0,detail:{automatic:!0}})))}if(n.removeAt&&e>=n.removeAt){b.querySelector(`[data-bubble-id="`+n.id+`"]`)?.remove();for(let e of[...u])e.split(`:`).includes(n.id)&&u.delete(e);n.media&&(n.media.element.pause(),l.delete(n.media.url),URL.revokeObjectURL(n.media.url)),l.has(n.image)&&(URL.revokeObjectURL(n.image),l.delete(n.image)),c.splice(t,1)}}}}function ie(e){if(_)return;re(e),h=requestAnimationFrame(ie);let n=Math.min((e-g)/1e3,1/30);if(g=e,f){let t=Math.min(280,innerWidth*.44,innerHeight*.46);f.bubble.diameter=dl((e-f.started)/1e3,t),E(f.bubble,f.node)}let r=c.filter(e=>e.server===t().id&&!e.popped);f&&r.push(f.bubble);let i=new Map([...b.querySelectorAll(`.user-orb`)].map(e=>[e.dataset.bubbleId,e]));r.forEach(e=>{let t=i.get(e.id);t&&(t.dataset.contactStrength=`0`,t._bubbleContacts=[],t.querySelector(`.bubble-detach`).hidden=!0)});for(let t=0;t<r.length;t++)for(let a=t+1;a<r.length;a++){let o=r[t],s=r[a],c=ml(o.x*innerWidth,o.y*innerHeight,o.diameter,innerWidth,innerHeight),l=ml(s.x*innerWidth,s.y*innerHeight,s.diameter,innerWidth,innerHeight),d=l.x-c.x,m=l.y-c.y,h=Math.max(1,Math.hypot(d,m)),g=(c.diameter+l.diameter)/2,_=[o.id,s.id].sort().join(`:`);h<g*1.01&&e>(o.detachedUntil||0)&&e>(s.detachedUntil||0)&&u.add(_),h>g*1.45&&u.delete(_);let v=f?.bubble===o?o:f?.bubble===s?s:null;if(v){let e=v===o?s:o,t=v===o?c:l,r=v===o?l:c,i=fl({x:t.x,y:t.y,radius:t.diameter/2},{x:r.x,y:r.y,radius:r.diameter/2},n);if(p?.bubble!==e){let t=ml(r.x+i.x,r.y+i.y,r.diameter,innerWidth,innerHeight);e.x=t.x/innerWidth,e.y=t.y/innerHeight}}if(!u.has(_)&&(!v||h>g*1.08))continue;let y=Math.hypot(d,m)<1?1:d/h,b=Math.hypot(d,m)<1?0:m/h,x=(h-g*.93)*25*n;p?.bubble!==o&&f?.bubble!==o&&(o.vx=(o.vx||0)+y*x,o.vy=(o.vy||0)+b*x),p?.bubble!==s&&f?.bubble!==s&&(s.vx=(s.vx||0)-y*x,s.vy=(s.vy||0)-b*x);let S=hl(c.diameter/2,l.diameter/2,h),C=S.strength,w=i.get(o.id),T=i.get(s.id);w&&T&&(w.querySelector(`.bubble-detach`).hidden=f?.bubble===o,T.querySelector(`.bubble-detach`).hidden=f?.bubble===s,C>0&&(w._bubbleContacts.push(T),T._bubbleContacts.push(w)));for(let[e,t,n,r,a]of[[o,y,-b,c.diameter/2,l.diameter/2],[s,-y,b,l.diameter/2,c.diameter/2]]){let r=i.get(e.id);r&&C>Number(r.dataset.contactStrength||0)&&(r.dataset.contactX=String(t),r.dataset.contactY=String(n),r.dataset.contactStrength=String(C),r.dataset.contactPlane=String(e===o?S.planeA:S.planeB))}}for(let e of r){if(p?.bubble!==e&&f?.bubble!==e){e.vx=(e.vx||0)*Math.exp(-8*n),e.vy=(e.vy||0)*Math.exp(-8*n);let t=ml(e.x*innerWidth+e.vx*n,e.y*innerHeight+e.vy*n,e.diameter,innerWidth,innerHeight);e.x=t.x/innerWidth,e.y=t.y/innerHeight}let t=i.get(e.id);t&&E(e,t)}}e.addEventListener(`mousedown`,M),e.addEventListener(`auxclick`,M),e.addEventListener(`pointerdown`,N),e.addEventListener(`pointermove`,P),e.addEventListener(`pointerup`,F),e.addEventListener(`pointercancel`,O),e.addEventListener(`lostpointercapture`,O),e.addEventListener(`keydown`,ee),e.addEventListener(`keyup`,te),e.addEventListener(`bubblepop`,ne),o.forEach((e,n)=>c.push({id:crypto.randomUUID(),server:t().id,x:[.15,.86,.85][n],y:[.4,.3,.74][n],diameter:[135,150,115][n],image:e,text:``,visibility:`private`,vx:0,vy:0})),D(),h=requestAnimationFrame(ie);let ae=()=>O(),oe=()=>{document.hidden&&O()};return window.addEventListener(`blur`,ae),document.addEventListener(`visibilitychange`,oe),window.addEventListener(`resize`,D),{createMediaBubble(e,n){l.add(e.url),n&&l.add(n);let r={id:crypto.randomUUID(),server:t().id,x:.76,y:.45,diameter:220,text:``,image:n||null,media:e,visibility:`private`,vx:0,vy:0};c.push(r),b.append(S(r))},refresh:D,startCreation:k,finishCreation:F,isEditing:()=>!!m,cancelCreation(){O(),C(),v=!1},dispose(){_=!0,cancelAnimationFrame(h),O();for(let[t,n]of[[`mousedown`,M],[`auxclick`,M],[`pointerdown`,N],[`pointermove`,P],[`pointerup`,F],[`pointercancel`,O],[`lostpointercapture`,O],[`keydown`,ee],[`keyup`,te],[`bubblepop`,ne]])e.removeEventListener(t,n);window.removeEventListener(`blur`,ae),window.removeEventListener(`resize`,D),document.removeEventListener(`visibilitychange`,oe),c.forEach(e=>{e.media&&(e.media.element.pause(),e.media.element.removeAttribute(`src`),e.media.element.load())}),b.remove(),l.forEach(e=>URL.revokeObjectURL(e))}}}function kl(e,t,n,r){return Math.abs(e)>=12&&Math.abs(e)>Math.abs(t)*1.35&&(r===0?e>0:e<0)}function Al(e,t,n,r){let i=t/Math.max(1,n);return Math.abs(t)>36&&Math.abs(i)>.45?+(t>0):Math.abs(e-r)<.16?r:+(e>=.5)}var jl=[[`luna`,`Moonlit ocean`,`Want to watch the moonrise?`,!0,`#c7b8ee`],[`noah`,`Lantern forest`,`This place feels like us.`,!0,`#b8ceb1`],[`mika`,`Neon rain`,`Still thinking about last night…`,!1,`#b1bbeb`],[`ari`,`Starlit lake`,`Look at these stars ✧`,!0,`#dab4dd`],[`river`,`Golden coast`,`The view reminded me of you.`,!0,`#e5bea1`],[`sol`,`Alpine twilight`,`Can’t wait for our next trip.`,!1,`#adc9e1`],[`ember`,`Candlelit library`,`This book is incredible…`,!0,`#d8b09f`],[`kai`,`Mistbound castle`,`Same place tomorrow?`,!1,`#b5b9d4`]];function Ml({root:t,garden:n,conversations:r,enterConversation:i}){let a=t.querySelector(`main`),o=t.querySelector(`.bubble-world`),s=document.createElement(`section`);s.className=`social-face feed-face`,s.setAttribute(`aria-label`,`Server world`),t.append(s),s.append(a),o.classList.add(`social-face`);let c=document.createElement(`section`);c.className=`social-face dm-picker-face`,c.setAttribute(`aria-label`,`Your shared conversation worlds`),c.innerHTML=`<div class="picker-heading"><h1>Who will you visit?</h1><p>Your shared worlds</p></div><div class="dm-world-grid"></div>`;let l=c.querySelector(`.dm-world-grid`),u=jl.map(([t,n,a,o,s],c)=>{r[t]||(r[t]=[{from:t,text:a}]);let u=document.createElement(`button`);u.type=`button`,u.className=`dm-orb`,u.dataset.image=e[c],u.dataset.photoRegion=`0,0,1,1`,u.style.setProperty(`--dm-avatar-color`,s),u.style.setProperty(`--world-atlas`,`url("${e[c]}")`),u.style.setProperty(`--atlas-x`,`${c%4/3*100}%`),u.style.setProperty(`--atlas-y`,c<4?`0%`:`100%`);let d=document.createElement(`span`);d.className=`dm-orb-description`;let f=document.createElement(`span`);f.className=`dm-world-name`,f.textContent=n;let p=document.createElement(`span`);p.className=`dm-orb-identity`;let m=document.createElement(`span`);m.className=`dm-contact-avatar`,m.textContent=t[0];let h=document.createElement(`span`);h.className=`dm-presence`+(o?` online`:``),h.setAttribute(`aria-hidden`,`true`),m.append(h);let g=document.createElement(`span`);g.className=`dm-contact-name`,g.textContent=t[0].toUpperCase()+t.slice(1);let _=document.createElement(`span`);return _.className=`dm-last-message`,p.append(m,g),d.append(f,p,_),u.append(d),u.addEventListener(`click`,()=>i(t,u)),l.append(u),{bubble:u,id:t,last:_,world:n,online:o}});t.append(c);let d=document.createElement(`p`);d.className=`world-travel-hint`,t.append(d);let f=document.createElement(`span`);f.className=`face-announcement`,f.setAttribute(`role`,`status`),f.setAttribute(`aria-live`,`polite`),t.append(f);let p=0,m=0,h=null,g=0,_=!1,v=!1,y=matchMedia(`(prefers-reduced-motion: reduce)`);function b(){for(let{bubble:e,id:t,last:n,world:i,online:a}of u){let o=(r[t]||[]).at(-1);n.textContent=o?(o.from===`you`?`You: `:``)+o.text:`Start a conversation`,e.setAttribute(`aria-label`,`${t}, ${i}, ${a?`online`:`offline`}. ${n.textContent}. Open conversation.`)}}function x(){let e=innerWidth<700?2:4,t=8/e,n=innerWidth<700?16:42,r=Math.max(44,Math.min(210,(innerWidth-64-n*(e-1))/e,(innerHeight-206-n*(t-1))/t));l.style.setProperty(`--dm-size`,`${r}px`),l.style.setProperty(`--dm-gap`,`${n}px`),l.style.setProperty(`--dm-columns`,e)}function S(e){p=Math.max(0,Math.min(1,e));let t=y.matches?0:11;s.style.transform=`translateX(${p*108}vw) rotateY(${-t*p}deg)`,o.style.transform=s.style.transform,c.style.transform=`translateX(${(p-1)*108}vw) rotateY(${t*(1-p)}deg)`;let n=1-p*p,r=1-(1-p)**2;s.style.opacity=s.dataset.faceOpacity=String(n),o.style.opacity=o.dataset.faceOpacity=String(n),c.style.opacity=c.dataset.faceOpacity=String(r),s.setAttribute(`aria-hidden`,String(p>.01)),c.setAttribute(`aria-hidden`,String(p<.99)),s.inert=v||!!h?.travel||p>.01,o.inert=s.inert,c.inert=v||!!h?.travel||p<.99,d.style.opacity=String(1-Math.sin(p*Math.PI)*.9)}function C(e){cancelAnimationFrame(g),v=!0;let n=p,r=performance.now(),i=y.matches?90:470;t.classList.add(`world-travelling`);function a(o){if(_)return;let s=Math.min(1,(o-r)/i),c=1-(1-s)**3;if(S(n+(e-n)*c),s<1){g=requestAnimationFrame(a);return}m=e,v=!1,t.dataset.socialFace=m?`picker`:`feed`,t.classList.remove(`world-travelling`),S(m),d.textContent=m?`← right-click + drag left to return to your world`:`right-click + drag right to visit your shared worlds →`,d.title=`You can also use the left and right arrow keys`,f.textContent=m?`Your shared conversation worlds`:`Back in the server world`}g=requestAnimationFrame(a)}let w=`button,input,textarea,select,a,header,footer,dialog,.user-orb,.memory-wrap,[contenteditable=true]`;function T(e){if(!(e.button!==2||t.dataset.memoryWatching||t.dataset.sharedDM||t.querySelector(`dialog`)?.open||e.target.closest(w)||v||h)){if(e.preventDefault(),e.stopImmediatePropagation(),n.isEditing()){n.cancelCreation();return}h={id:e.pointerId,x:e.clientX,y:e.clientY,started:performance.now(),origin:m,travel:!1,moved:!1,event:e},t.setPointerCapture(e.pointerId)}}function E(e){if(!h||e.pointerId!==h.id)return;e.preventDefault(),e.stopImmediatePropagation();let r=e.clientX-h.x,i=e.clientY-h.y;if(Math.hypot(r,i)>=12&&(h.moved=!0),!h.travel){if(!kl(r,i,performance.now()-h.started,h.origin))return;h.travel=!0,n.cancelCreation(),t.setPointerCapture(e.pointerId),t.classList.add(`world-travelling`),b()}e.preventDefault(),e.stopImmediatePropagation(),S(h.origin+r/Math.min(innerWidth*.68,650))}function D(e,n=!1){if(!h||e.pointerId!==h.id)return;e.preventDefault(),e.stopImmediatePropagation();let r=h;h=null,r.travel&&(e.preventDefault(),e.stopImmediatePropagation(),C(n?r.origin:Al(p,e.clientX-r.x,performance.now()-r.started,r.origin))),t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId)}let O=e=>D(e),k=e=>D(e,!0),A=e=>{h?.id===e.pointerId&&D(e,!0)},j=e=>{e.target.closest(w)||e.preventDefault()};function M(e){t.dataset.memoryWatching||t.dataset.sharedDM||e.target.closest(`input,textarea,select,dialog`)||t.querySelector(`dialog`)?.open||(e.key===`ArrowRight`&&!m&&(e.preventDefault(),h=null,n.cancelCreation(),b(),C(1)),(e.key===`ArrowLeft`||e.key===`Escape`)&&m&&(e.preventDefault(),h=null,n.cancelCreation(),C(0)),e.key===`Escape`&&h&&(e.preventDefault(),N()))}function N(){h?.travel&&C(h.origin),n.cancelCreation(),h=null}let P=[[`pointerdown`,T],[`pointermove`,E],[`pointerup`,O],[`pointercancel`,k],[`lostpointercapture`,A],[`contextmenu`,j],[`keydown`,M]];for(let[e,n]of P)t.addEventListener(e,n,!0);return window.addEventListener(`resize`,x),window.addEventListener(`blur`,N),t.dataset.socialFace=`feed`,d.textContent=`right-click + drag right to visit your shared worlds →`,b(),x(),S(0),{showPicker(){h=null,n.cancelCreation(),b(),C(1)},refresh:b,dispose(){_=!0,n.cancelCreation(),cancelAnimationFrame(g);for(let[e,n]of P)t.removeEventListener(e,n,!0);window.removeEventListener(`resize`,x),window.removeEventListener(`blur`,N),t.append(a),o.classList.remove(`social-face`),o.style.transform=``,o.style.opacity=``,o.inert=!1,delete o.dataset.faceOpacity,s.remove(),c.remove(),d.remove(),f.remove(),delete t.dataset.socialFace,t.classList.remove(`world-travelling`)}}}function Nl(e,t=window){let n=null,r=!1;function i(){let t=n?.id;n=null,e.classList.remove(`is-drag-scrolling`),t!==void 0&&e.hasPointerCapture(t)&&e.releasePointerCapture(t)}function a(t){t.button!==0||t.pointerType===`touch`||t.target.closest(`input,textarea,select,a`)||(r=!1,!(e.scrollHeight<=e.clientHeight)&&(n={id:t.pointerId,y:t.clientY,top:e.scrollTop,moved:!1},t.stopPropagation()))}function o(t){if(!n||t.pointerId!==n.id)return;let i=t.clientY-n.y;!n.moved&&Math.abs(i)<5||(n.moved||(n.moved=!0,e.setPointerCapture(t.pointerId)),r=!0,t.preventDefault(),e.classList.add(`is-drag-scrolling`),e.scrollTop=n.top-i)}function s(e){n?.id===e.pointerId&&i()}function c(e){r&&=(e.preventDefault(),e.stopImmediatePropagation(),!1)}let l=e=>e.preventDefault();return e.tabIndex=0,e.addEventListener(`pointerdown`,a,!0),e.addEventListener(`click`,c,!0),e.addEventListener(`dragstart`,l),e.addEventListener(`lostpointercapture`,s),t.addEventListener(`pointermove`,o,{passive:!1}),t.addEventListener(`pointerup`,s),t.addEventListener(`pointercancel`,s),t.addEventListener(`blur`,i),{reset:i,dispose(){i(),e.removeEventListener(`pointerdown`,a,!0),e.removeEventListener(`click`,c,!0),e.removeEventListener(`dragstart`,l),e.removeEventListener(`lostpointercapture`,s),t.removeEventListener(`pointermove`,o),t.removeEventListener(`pointerup`,s),t.removeEventListener(`pointercancel`,s),t.removeEventListener(`blur`,i)}}}var Pl=[`Moonlit currents`,`Rain on glass`,`Lantern lullaby`,`A distant shore`,`Between the stars`,`Winter hush`,`Pages after midnight`,`Mist and echoes`];function Fl(e=Math.random){return Pl[Math.min(Pl.length-1,Math.floor(e()*Pl.length))]}function Il(e){let t;try{t=new ul({alpha:!0,antialias:!0})}catch{return{setWorlds(){},dispose(){}}}t.domElement.className=`dm-enclosure-canvas`,e.append(t.domElement);let n=new nr,r=new Ca,i={uInside:{value:null},uOutside:{value:null},uInsideSize:{value:new G(1,1)},uOutsideSize:{value:new G(1,1)},uBoundary:{value:1},uReturn:{value:0},uReturnTarget:{value:new Y(.5,.5,.1,.1)},uWobble:{value:0},uTouch:{value:new G(-.94,.15)},uViewport:{value:new G(1,1)},uPixelRatio:{value:1}},a=new Wi({uniforms:i,depthTest:!1,depthWrite:!1,vertexShader:`varying vec2 vUv;
      void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}`,fragmentShader:`
      uniform sampler2D uInside, uOutside;
      uniform vec2 uInsideSize, uOutsideSize, uViewport;
      uniform float uPixelRatio, uWobble, uBoundary, uReturn;
      uniform vec4 uReturnTarget;
      uniform vec2 uTouch;
      varying vec2 vUv;
      vec2 cover(vec2 uv,vec2 size){
        float imageAspect=size.x/size.y, screenAspect=uViewport.x/uViewport.y;
        vec2 scale=vec2(min(screenAspect/imageAspect,1.),min(imageAspect/screenAspect,1.));
        return clamp((uv-.5)*scale+.5,vec2(.001),vec2(.999));
      }
      void main(){
        vec2 uv=vUv;

        // Curved silhouette leaves the surrounding world visible.
        vec2 radius=uViewport.x<800.?vec2(.465,1.12):vec2(.43,.76);
        vec2 sourceRadius=radius;
        vec2 startRadius=mix(vec2(1.),radius,uBoundary);
        radius=mix(startRadius,uReturnTarget.zw,uReturn);
        vec2 center=mix(vec2(.5),uReturnTarget.xy,uReturn);
        vec2 q=(uv-center)/radius;
        // Compact support in screen pixels: a poke cannot move the far side.
        vec2 pokeDelta=(uv-.5-uTouch*radius)*uViewport;
        float pokeRadius=min(120.,min(uViewport.x,uViewport.y)*.24);
        float support=max(0.,1.-dot(pokeDelta,pokeDelta)/(pokeRadius*pokeRadius));
        float influence=support*support*support;
        vec2 pushDirection=normalize(uTouch+vec2(.00001,.00001));
        q+=pushDirection*uWobble*influence*.45;
        float r=length(q);
        vec3 outside=texture2D(uOutside,cover(uv,uOutsideSize)).rgb;
        float edgeAA=max(fwidth(r)*1.5,.0008);
        float insideMask=1.-smoothstep(1.-edgeAA,1.+edgeAA,r);
        vec2 innerQ=q/max(1.,r);
        vec3 normal=normalize(vec3(innerQ,sqrt(max(.0001,1.-dot(innerQ,innerQ)))));
        // The dent changes the local surface slope, bending the reflected world.
        normal=normalize(normal+vec3(pokeDelta/pokeRadius*uWobble*influence*7.,-uWobble*influence));
        float facing=max(normal.z,.001);
        float periphery=smoothstep(.66,1.,r);
        // Keep the centre clear and compress the view near the tangent.
        vec2 lensUV=.5+q*sourceRadius*(1.-.105*periphery*periphery);
        vec3 inside=texture2D(uInside,cover(lensUV,uInsideSize)).rgb;
        vec3 reflected=reflect(normalize(vec3((uv-.5)*.18,-1.)),normal);
        vec3 reflection=texture2D(uOutside,cover(.5+reflected.xy*.46,uOutsideSize)).rgb;
        // Neutral reflective glass: broad light crescents, without interference colors.
        float fresnel=.035+.965*pow(1.-facing,2.3);
        float edgeDistance=(1.-r)/max(fwidth(r)*uPixelRatio,.00001);
        vec2 direction=q/max(r,.0001);
        float band=exp(-pow((r-.975)/.025,2.));
        vec3 film=mix(inside,reflection,min(.82,.045+periphery*.28+fresnel*.68+band*.12));
        float glint=smoothstep(.08,.65,dot(reflection,vec3(.2126,.7152,.0722)));
        float seam=exp(-pow(edgeDistance/1.1,2.));
        vec3 pearl=vec3(.86,.93,1.);
        film+=pearl*seam*(.12+.38*glint);
        float shoulder=exp(-pow((r-(.920+.018*direction.y))/.037,2.));
        float leftArc=pow(max(0.,-direction.x),5.)*exp(-pow((direction.y-.30)/.45,2.));
        float rightArc=pow(max(0.,direction.x),5.)*exp(-pow((direction.y+.32)/.32,2.));
        float ribbon=exp(-pow((r-(.977+.009*sin(direction.y*10.)))/.017,2.));
        float ribbonLight=.15+.85*pow(.5+.5*sin(direction.y*9.+direction.x*2.),4.);
        film+=pearl*shoulder*(leftArc*.65+rightArc*.45);
        film+=pearl*ribbon*ribbonLight*.65;
        float fineGlint=exp(-pow((edgeDistance-2.5)/1.2,2.));
        film+=pearl*fineGlint*(.25+.65*ribbonLight);
        vec3 rolled=texture2D(uOutside,cover(.5+reflected.xy*vec2(.62,.4),uOutsideSize)).rgb;
        float shoulderReflection=exp(-pow((r-.90)/.068,2.));
        film=mix(film,film*.72+rolled*.85,shoulderReflection*.65);
        outside*=.90;
        vec3 color=mix(outside,film,insideMask);
        vec3 fullScene=texture2D(uInside,cover(uv,uInsideSize)).rgb;
        color=mix(fullScene,color,max(uBoundary,smoothstep(0.,.15,uReturn)));
        gl_FragColor=vec4(color,mix(1.,insideMask,smoothstep(0.,.15,uReturn)));
        #include <colorspace_fragment>
      }`}),o=new Pi(2,2),s=new bi(o,a);n.add(s);let c=new ya,l=new Map,u=0,d=!1,f=!1,p=e=>(l.has(e)||l.set(e,c.loadAsync(e).then(e=>(e.colorSpace=st,e.minFilter=N,e.generateMipmaps=!1,d&&e.dispose(),e))),l.get(e));function m(){t.setPixelRatio(Math.min(devicePixelRatio||1,2)),i.uPixelRatio.value=t.getPixelRatio(),t.setSize(innerWidth,innerHeight),i.uViewport.value.set(innerWidth,innerHeight),f&&!d&&t.render(n,r)}let h=e.parentElement,g=matchMedia(`(prefers-reduced-motion: reduce)`),_=0,v=0,y=0,b=0,x=null,S=()=>h.classList.contains(`shared-dm-open`)&&h.dataset.sharedDM!==`leaving`;function C(e){if(_=0,d||!f||!S()){v=0,b=y=0,i.uWobble.value=0;return}let a=Math.min((e-(v||e-16))/1e3,.032);v=e;let o=x?.amount||0;y+=((o-b)*150-y*8)*a,b+=y*a,i.uWobble.value=g.matches?0:b,t.render(n,r),x||Math.abs(b)>1e-4||Math.abs(y)>.001?_=requestAnimationFrame(C):(v=0,i.uWobble.value=0,t.render(n,r))}function w(){_||=requestAnimationFrame(C)}function T(){S()&&f&&(y=1.1,w())}function E(e){let t=innerWidth<800;return new G((e.clientX/innerWidth-.5)/(t?.465:.43),(.5-e.clientY/innerHeight)/(t?1.12:.76))}function D(e){if(!S()||!f||e.button!==0||e.target.closest(`button,input,textarea,select,.dm-world-memory`))return;let t=E(e);if(!(t.length()>1.04)){if(e.target.closest(`.dm-scene-log`)){i.uTouch.value.copy(t),b=0,y=1.1,w();return}e.preventDefault(),e.stopImmediatePropagation(),x={id:e.pointerId,x:e.clientX,y:e.clientY,amount:.075},i.uTouch.value.copy(t),b=0,y=.7,h.setPointerCapture(e.pointerId),w()}}function O(e){x&&x.id===e.pointerId&&(e.preventDefault(),e.stopImmediatePropagation(),x.amount=Xt.clamp(.075+Math.hypot(e.clientX-x.x,e.clientY-x.y)/Math.min(innerWidth,innerHeight)*.35,.075,.16),w())}function k(e){x&&x.id===e.pointerId&&(e.stopImmediatePropagation(),h.hasPointerCapture(e.pointerId)&&h.releasePointerCapture(e.pointerId),x=null,w())}window.addEventListener(`pointerdown`,D,!0),window.addEventListener(`pointermove`,O,{capture:!0,passive:!1}),window.addEventListener(`pointerup`,k,!0),window.addEventListener(`pointercancel`,k,!0),m(),window.addEventListener(`resize`,m);let A=0;function j(e){i.uBoundary.value=+!!e,f&&!d&&t.render(n,r)}async function M(e,a){let o=++A;cancelAnimationFrame(_),_=0,x=null,b=y=0,i.uWobble.value=0,i.uReturnTarget.value.set((e.left+e.width/2)/innerWidth,1-(e.top+e.height/2)/innerHeight,e.width/2/innerWidth,e.height/2/innerHeight);let s=performance.now();for(;!d&&o===A;){let e=await new Promise(e=>requestAnimationFrame(e));if(d||o!==A)return;let c=Math.min(1,(e-s)/a);if(i.uReturn.value=c*c*(3-2*c),t.render(n,r),c===1)break}}return{setBoundary:j,returnTo:M,jiggle:T,async setWorlds(a,o){let s=++u;A++,i.uReturn.value=0;let c=/^url\(["']?(.*?)["']?\)$/.exec(o)?.[1]||a;try{let[o,l]=await Promise.all([p(a),p(c)]);if(d||s!==u)return;i.uInside.value=o,i.uOutside.value=l,i.uInsideSize.value.set(o.image.width,o.image.height),i.uOutsideSize.value.set(l.image.width,l.image.height),f=!0,t.render(n,r),e.classList.add(`dm-enclosure-rendered`)}catch{e.classList.remove(`dm-enclosure-rendered`)}},dispose(){d=!0,u++,A++,cancelAnimationFrame(_),window.removeEventListener(`pointerdown`,D,!0),window.removeEventListener(`pointermove`,O,!0),window.removeEventListener(`pointerup`,k,!0),window.removeEventListener(`pointercancel`,k,!0),window.removeEventListener(`resize`,m),l.forEach(e=>e.then(e=>e.dispose(),()=>{})),o.dispose(),a.dispose(),t.dispose(),t.domElement.remove()}}}function Ll({root:t,conversations:n,imageField:r,toast:i,onEnvironmentChange:a,onEnter:o,onLeave:s,onMessagesChange:c}){let l=(e,t,n)=>{let r=document.createElement(e);return r.className=t,n!==void 0&&(r.textContent=n),r},u=(e,t,n,r)=>{let i=l(`button`,t,e);return i.type=`button`,i.setAttribute(`aria-label`,n),i.onclick=r,i},d=l(`section`,`shared-dm-world`);d.hidden=!0,d.setAttribute(`aria-label`,`Private shared memory world`);let f=l(`div`,`dm-enclosure`);f.setAttribute(`aria-hidden`,`true`);let p=l(`div`,`dm-enclosure-outside`),m=l(`div`,`dm-enclosure-refraction`),h=l(`div`,`dm-enclosure-rim`);f.append(p,m,h),t.append(f);let g=Il(f),_=u(`←`,`dm-scene-control dm-back`,`Return to shared worlds`,Oe),v=l(`div`,`dm-scene-controls`),y=u(`♫`,`dm-scene-control`,`Mute demo music connection`,()=>{fe=!fe,Te()});v.append(u(`∿`,`dm-scene-control`,`Poke the bubble`,()=>g.jiggle?.()),y);let b=!0,x=u(`Bubble`,`dm-view-switch`,`Switch between bubble and full scene`,()=>{b=!b,x.textContent=b?`Bubble`:`Full scene`,x.setAttribute(`aria-pressed`,String(!b)),t.classList.toggle(`dm-full-scene`,!b),g.setBoundary?.(b)});x.setAttribute(`aria-pressed`,`false`),v.append(x);let S=l(`div`,`dm-shared-identity`),C=l(`div`,`dm-paired-portraits`),w=l(`span`,`dm-scene-avatar dm-peer-avatar`);w.setAttribute(`aria-hidden`,`true`);let T=l(`span`,`dm-scene-avatar`,`y`);T.setAttribute(`aria-hidden`,`true`),C.append(w,T);let E=l(`h1`,`dm-shared-title`),D=l(`p`,`dm-shared-subtitle`,`a shared memory`);S.append(C,E,D);let O=l(`div`,`dm-scene-log`);O.setAttribute(`role`,`log`),O.setAttribute(`aria-live`,`polite`),O.setAttribute(`aria-label`,`Shared conversation`);let k=Nl(O),A=l(`form`,`dm-scene-composer dm-chat-surface`),j=l(`input`,`dm-scene-input`);j.placeholder=`leave a little thought…`,j.maxLength=1e3,j.setAttribute(`aria-label`,`Message in your shared memory`);let M=r(e=>{if(!I||ue){URL.revokeObjectURL(e);return}ye.add(e),n[I].push({from:`you`,text:`a shared memory`,image:e}),Ce()});M.hidden=!0;let N=u(`♧`,`dm-scene-control`,`Add an image to your shared memory`,()=>M.querySelector(`input`).click()),P=u(`➤`,`dm-scene-control`,`Send local demo message`,()=>{});P.type=`submit`,A.append(N,j,P,M),A.onsubmit=e=>{e.preventDefault();let t=j.value.trim();t&&I&&(n[I].push({from:`you`,text:t}),j.value=``,Ce(),j.focus())};let F=l(`aside`,`dm-scene-music`);F.setAttribute(`aria-label`,`Shared demo music connection`);let ee=l(`div`,`dm-world-memory dm-music-orb`),te=l(`div`,`dm-music-info`),ne=l(`p`,`dm-music-world`),re=l(`p`,`dm-music-track`),ie=l(`div`,`dm-music-controls`),ae=u(`Ⅱ`,`dm-scene-control`,`Pause demo stream`,()=>{de=!de,Te()}),oe=u(`♪`,`dm-scene-control`,`Mute demo stream`,()=>{fe=!fe,Te()});ie.append(ae,oe),te.append(ne,re,l(`small`,`dm-stream-note`,`demo connection · no audio stream`),ie),F.append(ee,te);let se=l(`small`,`dm-local-note`,`local shared memory preview`);d.append(_,v,S,O,A,F,se),t.append(d);let I=null,ce=null,le=0,ue=!1,de=!0,fe=!1,pe=null,L=null,me=null,he=null,ge=null,_e=new Map,ve=new Set,ye=new Set,be=new Set;function xe(e,n,r){t.append(e);let i=e.animate(n,r),a={node:e,animation:i};be.add(a);let o=()=>{e.remove(),be.delete(a)};return i.finished.then(o,o),i.finished.catch(()=>{})}function Se(){for(let{node:e,animation:t}of be)t.cancel(),e.remove();be.clear()}function Ce(){O.replaceChildren();for(let e of n[I]||[]){let t=e.from===`you`,n=l(`div`,`dm-scene-row`+(t?` dm-scene-outgoing`:``)),r=l(`span`,`dm-scene-avatar dm-message-avatar`,t?`y`:I[0]);r.setAttribute(`aria-label`,t?`You`:I);let i=l(`p`,`dm-chat-surface dm-scene-message`,e.text);if(n.append(r,i),e.image){let t=l(`button`,`dm-world-memory dm-shared-image`);t.type=`button`,t.dataset.image=e.image,t.setAttribute(`aria-label`,`Shared image memory`),t.onclick=()=>{t.classList.toggle(`dm-image-expanded`)},n.append(t)}O.append(n)}c?.(),requestAnimationFrame(()=>{O.scrollTop=O.scrollHeight,we()})}function we(){let e=Math.max(140,innerHeight-275);O.style.maxHeight=`${e}px`}function Te(){ae.textContent=de?`Ⅱ`:`▷`,ae.setAttribute(`aria-label`,de?`Pause demo stream`:`Resume demo stream`),ae.setAttribute(`aria-pressed`,String(de)),oe.textContent=fe?`♩`:`♪`,oe.setAttribute(`aria-pressed`,String(fe)),y.textContent=fe?`♩`:`♫`,y.setAttribute(`aria-pressed`,String(fe));let e=_e.get(I)||``;re.textContent=`${e} · ${de?fe?`muted`:`listening together`:`paused`}`}async function Ee(r,s){if(!I){let e=t.querySelector(`.world`)?.style.backgroundImage||``;p.style.backgroundImage=e,m.style.backgroundImage=e}he&&delete he.dataset.entrySuppressed,he=s||null;let c=++le;I=r,ce=null;let u=Math.max(0,jl.findIndex(e=>e[0]===r)),f=jl[u];_e.has(r)||_e.set(r,Fl()),de=!0,fe=!1,o?.(),t.dataset.sharedDM=`entering`,t.classList.add(`shared-dm-open`),d.hidden=!0,E.textContent=`${r} & you`,w.textContent=r[0],w.style.setProperty(`--dm-avatar-color`,f[4]),ne.textContent=f[1].toLowerCase(),Te(),L?.cancel(),pe?.remove(),Se(),me?.remove();let h=l(`div`,`dm-world-handoff`);h.setAttribute(`aria-hidden`,`true`),h.style.backgroundImage=t.querySelector(`.world`)?.style.backgroundImage||``,t.append(h),me=h,pe=l(`div`,`dm-orb dm-entry-orb`),pe.dataset.image=e[u];let _=s?.getBoundingClientRect()||{left:innerWidth/2-90,top:innerHeight/2-90,width:180,height:180};ge=_,Object.assign(pe.style,{left:`${_.left}px`,top:`${_.top}px`,width:`${_.width}px`,height:`${_.height}px`}),t.append(pe);let v=_.width*1.28,y=matchMedia(`(prefers-reduced-motion: reduce)`).matches,b=y?100:650;L=pe.animate([{left:`${_.left}px`,top:`${_.top}px`,width:`${_.width}px`,height:`${_.height}px`,opacity:1},{left:`${_.left-(v-_.width)/2}px`,top:`${_.top-(v-_.height)/2}px`,width:`${v}px`,height:`${v}px`,opacity:0}],{duration:b,easing:`ease-out`,fill:`forwards`});let x=L.finished.catch(()=>{});try{let t=new Image;if(t.src=e[u],await t.decode(),ue||c!==le||(ce=e[u],ee.dataset.image=ce,a?.(),await g.setWorlds(ce,p.style.backgroundImage),ue||c!==le))return;ve.has(r)||(ve.add(r),n[r]||(n[r]=[]),n[r].length<=1&&n[r].push({from:`you`,text:`Show me a little of it.`},{from:r,text:`This is what it felt like.`,image:e[4]},{from:`you`,text:`Let’s stay here for a while.`}))}catch{i(`The shared world image could not load. Keeping the current atmosphere.`)}if(ue||c!==le){h.remove();return}let S=xe(h,[{opacity:1,filter:`blur(0px)`},{opacity:0,filter:y?`blur(0px)`:`blur(2px)`}],{duration:y?100:650,easing:`ease-in-out`});if(!y){let e=l(`div`,`dm-entry-water`);e.setAttribute(`aria-hidden`,`true`),xe(e,[{opacity:0,transform:`translateY(8%) scale(1.03)`,backdropFilter:`blur(0px)`},{opacity:.65,transform:`translateY(-1%) scale(1.01)`,backdropFilter:`blur(3px)`,offset:.4},{opacity:0,transform:`translateY(-8%) scale(1)`,backdropFilter:`blur(0px)`}],{duration:950,easing:`ease-in-out`})}await Promise.all([x,S]),!(ue||c!==le)&&(L?.cancel(),pe?.remove(),pe=null,L=null,t.dataset.sharedDM=`open`,d.hidden=!1,Ce())}function De(){k.reset(),le++,L?.cancel(),pe?.remove(),Se(),me?.remove(),me=null,pe=null,L=null,he&&delete he.dataset.entrySuppressed,I=null,ce=null,d.hidden=!0,t.classList.remove(`shared-dm-open`),delete t.dataset.sharedDM,ue||(a?.(),c?.(),s?.())}async function Oe(){if(k.reset(),t.dataset.sharedDM===`leaving`)return;if(ue||!I||t.dataset.sharedDM!==`open`){De();return}let e=++le;Se(),me?.remove();let n=he?.getBoundingClientRect()||ge||{left:innerWidth/2-90,top:innerHeight/2-90,width:180,height:180};he&&(he.dataset.entrySuppressed=`1`),t.dataset.sharedDM=`leaving`;let r=matchMedia(`(prefers-reduced-motion: reduce)`).matches?120:850;I=null,ce=null,d.hidden=!0,a?.(),c?.(),s?.(),await g.returnTo?.(n,r),!(ue||e!==le)&&(he&&delete he.dataset.entrySuppressed,t.classList.remove(`shared-dm-open`),delete t.dataset.sharedDM)}let ke=e=>{e.key===`Escape`&&I&&(e.preventDefault(),e.stopImmediatePropagation(),Oe())};return t.addEventListener(`keydown`,ke,!0),window.addEventListener(`resize`,we),we(),{open:Ee,close:Oe,get background(){return ce},get isOpen(){return I!==null},dispose(){k.dispose(),ue=!0,De(),t.removeEventListener(`keydown`,ke,!0),window.removeEventListener(`resize`,we),ye.forEach(e=>URL.revokeObjectURL(e)),g.dispose(),d.remove(),f.remove()}}}var Rl=new URL(`bubbleBackground2-DOHzhPDe.jpg`,import.meta.url).href,zl=new URL(`aurora-lake-CXuJ28EQ.jpg`,import.meta.url).href,Bl=new URL(`bubbleBackground-D_nhJxI2.jpg`,import.meta.url).href,Vl=new URL(`redmoon2-BRuR4-Br.png`,import.meta.url).href,Hl=new URL(`pika-71a829ab-099f-486f-bbb2-ceed27b1dc66-BaFXH8CY.mp4`,import.meta.url).href,Ul=(e,t)=>!!(e&&t&&(t.ownerId===e.id||t.managers.includes(e.id))),Wl=e=>e.visibility===`public`&&!e.removed,Gl=[];function Kl(e){Gl.push(e);let t=document.querySelector(`#restore-bubble`);t&&(t.hidden=!1),cu(`Bubble popped. The return bubble restores it.`)}var ql={id:`you`,name:`you`},Jl=[{id:`moon`,name:`Moonlit lake`,note:`a little room for quiet souls`,icon:`☾`,ownerId:`you`,managers:[],background:zl,moving:!1,playlist:[`Moonlight — Debussy`,`A quiet shore — ambient mix`,`After the rain — piano study`]},{id:`cosmos`,name:`Cloud nine`,note:`somewhere between a dream and a memory`,icon:`✧`,ownerId:`luna`,managers:[],background:Bl,moving:!1,playlist:[`Weightless — ambient mix`,`Among the stars — piano study`]},{id:`ember`,name:`After hours`,note:`stay a little longer`,icon:`◒`,ownerId:`river`,managers:[`you`],background:Vl,moving:!1,playlist:[`Late night — ambient mix`,`Slow tides — piano study`]}],Yl=Jl[0],Xl=`all`,Zl=new Set,Ql=new Set,$l=matchMedia(`(prefers-reduced-motion: reduce)`).matches,eu=[{id:`m1`,authorId:`luna`,author:`luna`,time:`4h ago`,category:`night sky`,text:`found a quiet place tonight and just watched the sky breathe for a while. reminded me that there’s still so much beauty, even in the in-between.`,image:Bl,likes:312,visibility:`public`,server:`moon`,replies:[[`ari`,`this is so peaceful… exactly what i needed today ♡`],[`noa`,`the world is kinder when we slow down. ✧`]]},{id:`m2`,authorId:`river`,author:`river`,time:`10h ago`,category:`soft thoughts`,text:`some days are just really hard, but i’m proud of myself for still showing up. progress can be quiet.`,image:null,likes:427,visibility:`public`,server:`moon`,replies:[[`mika`,`you’re doing better than you think ♡`],[`sol`,`soft days still count 🌱`]]},{id:`m3`,authorId:`you`,author:`you`,time:`just now`,category:`ocean`,text:`a small memory of a place that felt like home. keeping this little piece of the night.`,image:Rl,likes:18,visibility:`public`,server:`moon`,replies:[]},{id:`m4`,authorId:`luna`,author:`luna`,time:`yesterday`,category:`night sky`,text:`maybe the stars are little windows into somewhere else.`,image:Bl,likes:86,visibility:`public`,server:`cosmos`,replies:[]},{id:`m5`,authorId:`river`,author:`river`,time:`2h ago`,category:`ocean`,text:`the lake held the last light for us.`,image:Vl,likes:203,visibility:`public`,server:`ember`,replies:[]}],tu={luna:[{from:`luna`,text:`hey, glad you found this little corner of the lake ☾`}],river:[{from:`river`,text:`how has your day been?`}]},nu=`luna`,Q=(e,t,n)=>{let r=document.createElement(e);return t&&(r.className=t),n!==void 0&&(r.textContent=n),r},$=(e,t,n,r=e)=>{let i=Q(`button`,t,e);return i.type=`button`,i.setAttribute(`aria-label`,r),i.onclick=n,i},ru=document.querySelector(`#app`);ru.innerHTML=`<div class="world" aria-hidden="true"></div><div class="veil" aria-hidden="true"></div><aside class="server-rail" aria-label="Servers"><span class="rail-mark">b.</span><div id="servers"></div><span class="rail-line"></span><button id="settings" class="round" aria-label="Server atmosphere settings">⚙</button><span class="rail-bottom">a place<br>to belong</span></aside><header><div class="brand">✧ &nbsp; b u b b l e s <span>☾</span></div><nav class="header-tools" aria-label="Feed tools"></nav></header><main><div class="intro"><span class="eyebrow">YOUR LITTLE CORNER OF THE UNIVERSE</span><h1>let the memories drift.</h1><p id="server-note"></p></div><nav id="filters" aria-label="Memory filters"></nav><div class="feed-meta"><span id="feed-label"></span><button id="create">＋ &nbsp; leave a memory</button></div><section id="feed" aria-label="Memory feed"></section><p class="end-note">✧ &nbsp; there’s no rush here. stay a while.</p></main><aside class="discovery" aria-label="Drifting public memories"><div class="discovery-title">passing through <span>✧</span></div><p>little moments, already shared<br>with the world.</p><div id="drifters"></div></aside><footer><button id="playlist" class="music-pill">♫ <span>moonlit melodies<small>server playlist</small></span> ↗</button><button id="motion" class="motion-pill"></button><span class="demo-label">local frontend preview</span></footer><dialog id="panel"><div class="dialog-header"><span id="panel-title"></span><button id="close" class="round" aria-label="Close dialog">×</button></div><div id="panel-body"></div></dialog><div id="toast" role="status" aria-live="polite"></div>`;var iu=ru.querySelector(`.world`),au=document.querySelector(`#feed`),ou=document.querySelector(`#panel`),su=document.querySelector(`#panel-body`);function cu(e){let t=document.querySelector(`#toast`);t.textContent=e,t.classList.add(`visible`),clearTimeout(cu.timer),cu.timer=setTimeout(()=>t.classList.remove(`visible`),3e3)}function lu(e){document.querySelector(`#panel-title`).textContent=e,su.replaceChildren(),ou.open||ou.showModal()}document.querySelector(`#close`).onclick=()=>ou.close(),ou.addEventListener(`click`,e=>{e.target===ou&&(e.clientX<ou.getBoundingClientRect().left||e.clientX>ou.getBoundingClientRect().right||e.clientY<ou.getBoundingClientRect().top||e.clientY>ou.getBoundingClientRect().bottom)&&ou.close()});function uu(e){e.classList.add(`shader-surface`)}var du=o(ru);function fu(){if(iu.querySelector(`video`)?.pause(),du.update(hu?.background||Yl.previewBackground||Yl.background),iu.replaceChildren(),iu.style.backgroundImage=`url("${hu?.background||Yl.previewBackground||Yl.background}")`,(Yl.previewVideo||Yl.moving&&!Yl.previewBackground)&&!$l&&!hu?.isOpen){let e=Q(`video`);e.src=Yl.previewVideo||Hl,e.muted=!0,e.loop=!0,e.autoplay=!0,e.playsInline=!0,iu.append(e),e.play().catch(()=>cu(`Motion could not play; showing the still atmosphere.`))}document.documentElement.style.setProperty(`--environment`,`url("${hu?.background||Yl.previewBackground||Yl.background}")`),document.body.classList.toggle(`still`,$l),document.querySelector(`#motion`).textContent=$l?`▷`:`Ⅱ`}var pu,mu,hu,gu=0;function _u(){fu(),pu?.refresh(),document.querySelector(`#server-note`).textContent=`${Yl.name.toLowerCase()} · ${Yl.note}`,document.querySelector(`#feed-label`).textContent=Xl===`saved`?`your collected moments`:`MEMORIES IN `+Yl.name.toUpperCase(),document.querySelector(`#servers`).replaceChildren(...Jl.map(e=>{let t=$(e.icon,`server-button `+(e===Yl?`selected`:``),()=>{Yl=e,Xl=`all`,gu=0,_u()},e.name);return t.title=e.name,t.setAttribute(`aria-pressed`,String(e===Yl)),t})),document.querySelector(`#filters`).replaceChildren(...[`all`,`night sky`,`soft thoughts`,`ocean`,`saved`].map(e=>{let t=$(e,`filter `+(Xl===e?`active`:``),()=>{Xl=e,gu=0,_u()});return t.setAttribute(`aria-pressed`,String(Xl===e)),t})),au.replaceChildren();let e=eu.filter(e=>!e.scenePopped&&e.server===Yl.id&&(Wl(e)||e.authorId===ql.id)&&(Xl===`all`||Xl===`saved`&&Zl.has(e.id)||Xl===e.category));gu=Math.min(gu,Math.max(0,Math.ceil(e.length/2)-1)),e.slice(gu*2,gu*2+2).forEach(e=>au.append(vu(e)));let t=document.querySelector(`#world-navigation`);t||(t=Q(`nav`,`world-navigation`),t.id=`world-navigation`,t.setAttribute(`aria-label`,`Move between memory bubbles`),document.querySelector(`main`).append(t)),t.replaceChildren(),e.length>2&&t.append($(`‹`,`world-nav`,()=>{gu=(gu+Math.ceil(e.length/2)-1)%Math.ceil(e.length/2),_u()},`Previous memories`),$(`›`,`world-nav`,()=>{gu=(gu+1)%Math.ceil(e.length/2),_u()},`Next memories`)),requestAnimationFrame(Fu),e.length||au.append(Q(`p`,`empty`,`Nothing drifting here yet. Leave a memory, or explore another mood.`)),yu()}function vu(e){let t=Q(`article`,`memory-wrap`),n=Q(`div`,`memory-bubble`);uu(n),n.dataset.memoryId=e.id;let r=Q(`div`,`memory-head`),i=$(``,`identity`,()=>e.authorId===ql.id?wu(e):xu(e.authorId));i.append(Q(`span`,`avatar avatar-`+e.authorId,e.author.slice(0,1)),Q(`span`,`author`,e.author));let a=Q(`small`,`time`,e.time);if(i.lastChild.append(a),r.append(i,$(`···`,`more`,()=>Su(e),`Memory options`)),n.append(r,Q(`p`,`memory-text`,e.text)),e.image){let t=$(``,`memory-image`,()=>e.authorId===ql.id?wu(e):bu(e),e.authorId===ql.id?`Change your memory image`:`Open memory`),r=Q(`img`);r.src=e.image,r.alt=`Atmospheric landscape shared in this memory`,t.append(r,Q(`span`,`image-hint`,e.authorId===ql.id?`✧ change image`:`✧ enter this memory`)),n.append(t)}else e.authorId===ql.id&&n.append($(`＋ add an image`,`secondary`,()=>wu(e)));let o=Q(`div`,`memory-actions`),s=$(`♡ ${e.likes+ +!!Ql.has(e.id)}`,`chip `+(Ql.has(e.id)?`liked`:``),()=>{Ql.has(e.id)?Ql.delete(e.id):Ql.add(e.id),_u()},`Like memory`);s.setAttribute(`aria-pressed`,String(Ql.has(e.id)));let c=$(Zl.has(e.id)?`▣ saved`:`♧ save`,`chip`,()=>{Zl.has(e.id)?Zl.delete(e.id):Zl.add(e.id),_u()},`Save memory`);if(c.setAttribute(`aria-pressed`,String(Zl.has(e.id))),o.append(s,$(`◌ ${e.replies.length}`,`chip`,()=>t.querySelector(`input`).focus(),`Reply to memory`),c),n.append(o),e.authorId===ql.id){let t=n.querySelector(`.memory-text`),r=Q(`textarea`,`memory-text inline-post-writing`);r.value=e.text,r.maxLength=1500,r.setAttribute(`aria-label`,`Write inside your post bubble`),r.oninput=()=>{e.text=r.value},t.replaceWith(r);let i=Cu(t=>{e.image?.startsWith(`blob:`)&&URL.revokeObjectURL(e.image),e.image=t,_u()});i.className=`inline-upload`,i.hidden=!0,n.append(i)}n.addEventListener(`bubblepop`,()=>{e.scenePopped=!0,Kl(()=>{e.scenePopped=!1,_u()}),setTimeout(_u,300)}),t.append(n);let l=Q(`div`,`replies`);e.replies.slice(-3).forEach(([e,t])=>{let n=Q(`div`,`reply`);n.append(Q(`span`,`avatar mini`,e[0]),Q(`p`,`reply-glass`,t)),l.append(n)});let u=Q(`form`,`reply-form`),d=Q(`input`);d.placeholder=`write a gentle reply…`,d.maxLength=400,d.required=!0,d.setAttribute(`aria-label`,`Reply to `+e.author);let f=$(`↗`,`send`,()=>{},`Send reply`);return f.type=`submit`,u.append(Q(`span`,`avatar mini`,`y`),d,f),u.onsubmit=t=>{t.preventDefault();let n=d.value.trim();n&&(e.replies.push([`you`,n]),_u())},l.append(u),t.append(l),n.addEventListener(`pointerdown`,()=>{n.classList.remove(`touched`),n.offsetWidth,n.classList.add(`touched`)}),t}function yu(){document.querySelector(`.discovery`).hidden=!0}function bu(e){if(Wl(e)||e.authorId===ql.id){if(lu(`a memory from `+e.author),su.append(Q(`p`,`eyebrow`,`ALREADY SHARED `+(e.visibility===`public`?`PUBLICLY`:`WITH ONLY YOU`)),Q(`p`,`detail-text`,e.text)),e.image){let t=Q(`img`,`detail-image`);t.src=e.image,t.alt=`Shared memory landscape`,su.append(t)}e.authorId!==ql.id&&su.append($(`say hello to `+e.author,`primary`,()=>Du(e.authorId)))}}function xu(e){lu(e),su.append(Q(`span`,`avatar large`,e[0]),Q(`p`,`detail-text`,`Get to know a person, one conversation at a time.`),Q(`p`,`muted`,`Memories may surface as you talk, but only memories they already shared publicly. There is no profile post gallery.`),$(`start a conversation`,`primary`,()=>Du(e)))}function Su(e){lu(`this little memory`),e.authorId===ql.id?su.append($(`change memory image`,`primary`,()=>wu(e)),$(`remove this memory`,`secondary`,()=>{eu=eu.filter(t=>t!==e),e.image?.startsWith(`blob:`)&&URL.revokeObjectURL(e.image),ou.close(),_u(),cu(`Memory removed from this local preview.`)})):su.append($(`hide this memory`,`secondary`,()=>{e.removed=!0,ou.close(),_u(),cu(`Memory hidden.`)}),$(`report this memory`,`secondary`,()=>{su.replaceChildren(Q(`p`,`muted`,`Reporting needs a connected moderation service. No report has been submitted in this local preview.`))}))}function Cu(e){let t=Q(`label`,`upload`,`Choose an image`),n=Q(`input`);return n.type=`file`,n.accept=`image/png,image/jpeg,image/webp`,n.onchange=async()=>{let t=n.files[0];if(!t)return;if(![`image/png`,`image/jpeg`,`image/webp`].includes(t.type)||t.size>8388608){cu(`Choose a PNG, JPEG or WebP image under 8 MB.`),n.value=``;return}let r=URL.createObjectURL(t),i=new Image;i.onload=()=>{if(i.width>8192||i.height>8192){URL.revokeObjectURL(r),cu(`Image dimensions must be under 8192 pixels.`);return}e(r)},i.onerror=()=>{URL.revokeObjectURL(r),cu(`That file could not be decoded as an image.`)},i.src=r},t.append(n),t}function wu(e){e.authorId===ql.id&&(ou.close(),[...document.querySelectorAll(`.memory-bubble`)].find(t=>t.dataset.memoryId===e.id)?.querySelector(`.inline-upload input`)?.click())}function Tu(){lu(`leave a little memory`);let e=Q(`form`,`compose-form`),t=Q(`textarea`);t.placeholder=`what would you like to hold onto?`,t.required=!0,t.maxLength=1500,t.setAttribute(`aria-label`,`Memory text`);let n=Q(`select`);n.setAttribute(`aria-label`,`Memory visibility`);for(let[e,t]of[[`private`,`Only me`],[`public`,`Public · may appear in discovery & flashbacks`]]){let r=Q(`option`,``,t);r.value=e,n.append(r)}let r=Q(`select`);r.setAttribute(`aria-label`,`Memory mood`),[`soft thoughts`,`night sky`,`ocean`].forEach(e=>{let t=Q(`option`,``,e);t.value=e,r.append(t)});let i=null,a=!1,o=Q(`p`,`muted`,`Private by default. Public memories can drift to other people.`),s=Q(`div`);e.append(t,n,r,Cu(e=>{i&&URL.revokeObjectURL(i),i=e,s.replaceChildren();let t=Q(`img`,`detail-image`);t.src=e,t.alt=`Your selected memory image`,s.append(t)}),s,o);let c=$(`release your memory ✧`,`primary`,()=>{});c.type=`submit`,e.append(c),e.onsubmit=e=>{e.preventDefault(),t.value.trim()&&(eu.unshift({id:crypto.randomUUID(),authorId:`you`,author:`you`,time:`just now`,category:r.value,text:t.value.trim(),image:i,likes:0,visibility:n.value,server:Yl.id,replies:[]}),a=!0,Xl=`all`,ou.close(),_u(),cu(`Memory added to this local preview.`))},ou.addEventListener(`close`,()=>{!a&&i&&URL.revokeObjectURL(i)},{once:!0}),su.append(e)}function Eu(){lu(`a sound or moving memory`);let e=null,t=null,n=!1,r=!1,a=Q(`div`),o=$(`create media bubble`,`primary`,()=>{e&&(e.element.pause(),pu.createMediaBubble(e,t),n=!0,ou.close(),cu(`Media bubble created. Use its play and sound buttons.`))});o.disabled=!0;let s=e=>{e&&(e.element.pause(),e.element.removeAttribute(`src`),e.element.load(),URL.revokeObjectURL(e.url))};su.append(Q(`p`,`muted`,`Video or audio, with optional cover art. Files stay in this local preview until reload.`),i(t=>{if(r){s(t);return}s(e),e=t,o.disabled=!1,a.replaceChildren();let n=t.element;n.controls=!0,n.style.width=`100%`,n.style.maxHeight=`200px`,a.append(n)},cu),Cu(e=>{if(r){URL.revokeObjectURL(e);return}t&&URL.revokeObjectURL(t),t=e,c.textContent=`Cover image selected`}),a);let c=Q(`p`,`muted`,`Cover image is optional.`);su.append(c,o),ou.addEventListener(`close`,()=>{r=!0,n||(s(e),t&&URL.revokeObjectURL(t))},{once:!0})}function Du(e=nu,t){nu=e,ou.close(),hu?.open(e,t)}var Ou=new Set;function ku(e){Ou.has(e.previewVideo)&&(URL.revokeObjectURL(e.previewVideo),Ou.delete(e.previewVideo)),delete e.previewVideo}function Au(){let e=Yl;lu(`your background`),su.append(Q(`p`,`muted`,`Choose a background for this local preview. Your bubbles will reflect it too. It stays until you reload the page.`));let t=Cu(t=>{ku(e),e.previewBackground&&(URL.revokeObjectURL(e.previewBackground),Ou.delete(e.previewBackground)),Ou.add(t),e.previewBackground=t,ou.close(),_u(),cu(`Your background is ready.`)});t.querySelector(`input`).setAttribute(`aria-label`,`Choose your background image`);let n=i(t=>{ku(e),Ou.add(t.url),e.previewVideo=t.url,t.element.pause(),t.element.removeAttribute(`src`),t.element.load(),$l=!1,ou.close(),_u(),cu(`Moving background ready.`)},cu,{videoOnly:!0});su.append(t,n,$(`try moving lake`,`secondary`,()=>{ku(e),e.previewVideo=Hl,$l=!1,ou.close(),_u()}),$(`use original background`,`secondary`,()=>{ku(e),e.previewBackground&&(URL.revokeObjectURL(e.previewBackground),Ou.delete(e.previewBackground),delete e.previewBackground),ou.close(),_u()}),$(`this world’s settings`,`secondary`,ju))}function ju(){if(lu(Yl.name+` · atmosphere`),!Ul(ql,Yl)){su.append(Q(`p`,`muted`,`Only this server’s owner and privileged members can change its atmosphere.`));return}su.append(Q(`p`,`muted`,`You can manage this server. Backgrounds and playlists belong to each server.`));for(let[e,t]of[[`Aurora lake`,zl],[`Moonlit lake`,Rl],[`Cosmic clouds`,Bl],[`Ember lake`,Vl]])su.append($(e,`secondary`,()=>{Yl.background=t,_u(),cu(`Server atmosphere updated.`)}));let e=$(Yl.moving?`Use a static background`:`Use moving background`,`primary`,()=>{Yl.moving=!Yl.moving,_u(),ju()});su.append(e,Q(`p`,`muted`,`Motion is mirrored into bubble surfaces. Pause atmosphere also pauses reflections.`));let t=Q(`textarea`);t.value=Yl.playlist.join(`
`),t.maxLength=1e3,t.setAttribute(`aria-label`,`Server playlist, one track per line`),su.append(t,$(`save server playlist`,`secondary`,()=>{Yl.playlist=t.value.split(`
`).map(e=>e.trim()).filter(Boolean).slice(0,20),cu(`Playlist updated.`)}))}async function Mu(){if(Lu.paused)try{await Lu.play()}catch{cu(`Audio could not start. Try the music bubble again.`)}else Lu.pause()}function Nu(){lu(`find a little moment`);let e=Q(`input`);e.placeholder=`search public memories…`,e.setAttribute(`aria-label`,`Search public memories`);let t=Q(`div`,`search-results`);e.oninput=()=>{t.replaceChildren();let n=e.value.trim().toLowerCase();n&&(eu.filter(e=>Wl(e)&&e.text.toLowerCase().includes(n)).slice(0,15).forEach(e=>t.append($(e.author+` · `+e.text.slice(0,95),`search-result`,()=>bu(e)))),t.children.length||t.append(Q(`p`,`muted`,`No public memories found.`)))},su.append(e,t),e.focus()}document.querySelector(`.header-tools`).append($(`⌕`,`round`,Nu,`Search public memories`),$(`◌`,`round`,()=>mu?.showPicker(),`Your shared conversation worlds`),$(`y`,`round account`,()=>{lu(`your little space`),su.append(Q(`p`,`detail-text`,`you`),Q(`p`,`muted`,`Your private memories are visible only to you in the feed. New memories default to private.`),$(`your saved moments`,`primary`,()=>{Xl=`saved`,gu=0,ou.close(),_u()}))},`Your space`)),document.querySelector(`#create`).onclick=Tu,document.querySelector(`#settings`).onclick=ju,document.querySelector(`#playlist`).onclick=Mu,document.querySelector(`#motion`).onclick=()=>{$l=!$l,_u()},_u();var Pu=()=>({background:hu?.background||Yl.previewBackground||Yl.background,video:hu?.isOpen?null:iu.querySelector(`video`),paused:$l,dm:!!hu?.isOpen});pu=Ol({root:ru,getServer:()=>Yl,open:lu,body:su,imageField:Cu,toast:cu,initialImages:[Rl,Bl,Vl],rememberPop:Kl}),mu=Ml({root:ru,garden:pu,conversations:tu,enterConversation:Du}),ou.addEventListener(`close`,()=>mu.refresh()),El({scope:ru,container:ru,getEnvironment:Pu}),El({scope:ru,container:ru,getEnvironment:Pu,memoryOnly:!0}),El({scope:ou,container:ou,getEnvironment:Pu,dialog:!0});function Fu(){let e=document.querySelector(`main`),t=Math.max(120,innerHeight-112),n=Math.min(1,t/Math.max(1,e.offsetHeight));e.style.setProperty(`--feed-scale`,String(n))}new ResizeObserver(Fu).observe(document.querySelector(`main`)),window.addEventListener(`resize`,Fu),document.querySelector(`#playlist`).textContent=`♫`,document.querySelector(`#playlist`).setAttribute(`aria-label`,`Server playlist`),document.querySelector(`#motion`).setAttribute(`aria-label`,`Pause or resume atmosphere`),document.querySelector(`.header-tools`).append($(`☾`,`round`,()=>{lu(`find your atmosphere`);for(let e of Jl)su.append($(e.name,`secondary`,()=>{Yl=e,Xl=`all`,gu=0,ou.close(),_u()}));su.append($(`choose your background…`,`secondary`,Au))},`Switch server atmosphere`));var Iu=$(`↶`,`round`,()=>{let e=Gl.pop();e&&e(),Iu.hidden=!Gl.length},`Restore the last popped bubble`);Iu.id=`restore-bubble`,Iu.hidden=!0,document.querySelector(`.header-tools`).append(Iu),E(ru);var Lu=new Audio(t);Lu.loop=!0,Lu.preload=`metadata`,Lu.volume=.45;var Ru=document.querySelector(`#playlist`);function zu(){let e=!Lu.paused;Ru.textContent=e?`Ⅱ`:`♫`,Ru.setAttribute(`aria-label`,e?`Pause Lake after midnight`:`Play Lake after midnight`),Ru.setAttribute(`aria-pressed`,String(e)),Ru.title=`Lake after midnight · original ambient test music`}Lu.addEventListener(`play`,zu),Lu.addEventListener(`pause`,zu),Lu.addEventListener(`error`,()=>cu(`The local music file could not load.`)),Jl.forEach(e=>e.playlist=[`Lake after midnight · original ambient test track`]),zu(),C(ru);var Bu=!1;hu=Ll({root:ru,conversations:tu,imageField:Cu,toast:cu,onEnvironmentChange:fu,onEnter:()=>{pu.cancelCreation(),Bu=!Lu.paused,Lu.pause()},onLeave:()=>{Bu&&Lu.play().catch(()=>{}),Bu=!1,mu.showPicker()},onMessagesChange:()=>mu.refresh()}),document.querySelector(`.header-tools`).append($(`♫`,`round`,Eu,`Create a video or music bubble`)),l(),d(ru),f(ru,{garden:pu,audio:Lu,toast:cu,open:lu,getServer:()=>Yl}),p(ru,{toast:cu}),m(ru),S(ru);var Vu=null;function Hu(){let e=document.documentElement.dataset.design!==`pastel`;e&&!Vu?Vu=[s(ru)]:!e&&Vu&&(Vu.forEach(e=>e.dispose()),Vu=null)}new MutationObserver(Hu).observe(document.documentElement,{attributes:!0,attributeFilter:[`data-design`]}),Hu(),n({root:ru,garden:pu});