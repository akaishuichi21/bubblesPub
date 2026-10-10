export const POP_HOLD_MS=2400;
export function holdProgress(elapsed,moved=false){return moved?0:Math.min(1,Math.max(0,elapsed/POP_HOLD_MS));}
export function installBubblePopping(root){
 let hold=null,frame=0;const timers=new Set();
 function clearIndication(node){node.classList.remove('hold-to-pop');node.style.setProperty('--hold-strain','0');}
 function cancel(){if(hold){clearIndication(hold.node);hold.node.dataset.pressure='0';hold=null;}cancelAnimationFrame(frame);}
 function tick(now){if(!hold)return;const progress=holdProgress(now-hold.started);hold.node.dataset.pressure=String(progress);hold.node.style.setProperty('--hold-strain',String(progress));if(progress>=1){const node=hold.node;clearIndication(node);hold=null;node.classList.add('popping');node.dataset.pressure='0';node.dataset.popAt=String(now);node.dispatchEvent(new CustomEvent('bubblepop',{bubbles:true}));const timer=setTimeout(()=>{timers.delete(timer);if(node.classList.contains('user-orb'))node.remove();},300);timers.add(timer);return;}frame=requestAnimationFrame(tick);}
 function down(e){if(e.button!==0)return;const control=e.target.closest('button,input,textarea,select,a,[contenteditable=true]');if(control&&!control.classList.contains('memory-image'))return;const node=e.target.closest('.user-orb,.memory-bubble');if(!node||node.classList.contains('growing')||node.classList.contains('popping'))return;cancel();hold={node,started:performance.now(),x:e.clientX,y:e.clientY,id:e.pointerId};node.classList.add('hold-to-pop');frame=requestAnimationFrame(tick);}
 function move(e){if(hold&&e.pointerId===hold.id&&Math.hypot(e.clientX-hold.x,e.clientY-hold.y)>8)cancel();}
 const preventPoppedClick=e=>{if(e.target.closest('.popping')){e.preventDefault();e.stopImmediatePropagation();}};root.addEventListener('click',preventPoppedClick,true);const visibility=()=>{if(document.hidden)cancel();};root.addEventListener('pointerdown',down);root.addEventListener('pointermove',move);root.addEventListener('pointerup',cancel);root.addEventListener('pointercancel',cancel);root.addEventListener('lostpointercapture',cancel);window.addEventListener('blur',cancel);document.addEventListener('visibilitychange',visibility);
 return {dispose(){cancel();root.removeEventListener('click',preventPoppedClick,true);timers.forEach(clearTimeout);root.removeEventListener('pointerdown',down);root.removeEventListener('pointermove',move);root.removeEventListener('pointerup',cancel);root.removeEventListener('pointercancel',cancel);root.removeEventListener('lostpointercapture',cancel);window.removeEventListener('blur',cancel);document.removeEventListener('visibilitychange',visibility);}};
}



