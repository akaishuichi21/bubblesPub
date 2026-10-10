export function growthDiameter(seconds, max = 240) {
  return Math.min(max, 44 + Math.max(0, seconds) * 54);
}
// Growing surface stays anchored; return a gentle displacement for its neighbour.
export function growingBubblePush(growing,neighbour,dt) {
 const dx=neighbour.x-growing.x,dy=neighbour.y-growing.y,d=Math.hypot(dx,dy);
 const overlap=(growing.radius+neighbour.radius)*.97-d;
 if(overlap<=0)return {x:0,y:0};
 const amount=Math.min(8,overlap*(1-Math.exp(-18*Math.max(0,Math.min(dt,1/30)))));
 return {x:(d>.001?dx/d:1)*amount,y:(d>.001?dy/d:0)*amount};
}
export function stepSpring(state, dt) {
  const h = Math.min(1 / 30, Math.max(0, dt));
  state.velocity += (-90 * state.displacement - 11 * state.velocity) * h;
  state.displacement += state.velocity * h;
  return state;
}

// Leave breathing room for the mesh deformation and its luminous film.
export function fitBubble(x,y,diameter,width,height,padding=18) {
 const d=Math.max(12,Math.min(diameter,(Math.min(width,height)-padding*2)/1.12));
 const radius=d*.56+padding;
 return {diameter:d,x:Math.min(width-radius,Math.max(radius,x)),y:Math.min(height-radius,Math.max(radius,y))};
}

export function contactFilms(radiusA,radiusB,distance){
 const d=Math.max(1,distance),sum=radiusA+radiusB;
 const plane=(r,other)=>Math.max(.65,Math.min(.99,(d*d+r*r-other*other)/(2*d*r)));
 return {strength:Math.max(0,Math.min(1,(sum*1.08-d)/(sum*.15))),planeA:plane(radiusA,radiusB),planeB:plane(radiusB,radiusA)};
}

export function partitionPlane(ax,ay,radiusA,bx,by,radiusB,inset=0){
 const dx=bx-ax,dy=by-ay,d=Math.max(.0001,Math.hypot(dx,dy));
 const nx=dx/d,ny=dy/d;
 const cut=(d*d+radiusA*radiusA-radiusB*radiusB)/(2*d);
 return {x:nx,y:ny,offset:nx*ax+ny*ay+cut-inset};
}

