import test from 'node:test';
import assert from 'node:assert/strict';
import {growthDiameter,stepSpring,growingBubblePush} from './bubble-physics.js';
test('growth pushes a touching neighbour outward without changing the source',()=>{
 const growing={x:100,y:100,radius:80},neighbour={x:220,y:100,radius:60};
 const push=growingBubblePush(growing,neighbour,1/60);
 assert.ok(push.x>0&&push.x<=8);assert.equal(push.y,0);
 assert.deepEqual(growing,{x:100,y:100,radius:80});
 const expanded=growingBubblePush({...growing,radius:100},neighbour,1/60);
 assert.ok(expanded.x>=push.x);
});
test('growth leaves distant bubbles alone and handles coincident centers',()=>{
 assert.deepEqual(growingBubblePush({x:0,y:0,radius:50},{x:200,y:0,radius:50},1/60),{x:0,y:0});
 const push=growingBubblePush({x:0,y:0,radius:50},{x:0,y:0,radius:50},1/60);
 assert.ok(push.x>0&&push.x<=8&&Number.isFinite(push.y));
});
test('hold duration grows monotonically until the maximum',()=>{
 assert.equal(growthDiameter(0),44);
 assert.ok(growthDiameter(2)>growthDiameter(1));
 assert.equal(growthDiameter(100),240);
 assert.equal(growthDiameter(100,130),130);
 assert.equal(growthDiameter(-1),44);
});
test('spring recoils and settles after a touch',()=>{
 const state={displacement:0,velocity:0.65};let positive=false,negative=false;
 for(let i=0;i<600;i++){stepSpring(state,1/60);positive ||=state.displacement>0;negative ||=state.displacement<0;assert.ok(Number.isFinite(state.displacement));}
 assert.ok(positive&&negative,'bubble should rebound');
 assert.ok(Math.abs(state.displacement)<0.00001);
 assert.ok(Math.abs(state.velocity)<0.00001);
});
test('spring remains stable across a suspended animation frame',()=>{
 const state={displacement:.1,velocity:.7};stepSpring(state,10);
 assert.ok(Math.abs(state.displacement)<.2);
});

import {fitBubble} from './bubble-physics.js';
test('new bubbles stay fully inside all viewport edges',()=>{
 for(const [width,height] of [[1440,900],[390,844],[844,390]]){
  for(const [x,y] of [[0,0],[width,height],[width/2,height/2]]){
   const b=fitBubble(x,y,240,width,height);
   const extent=b.diameter*.56;
   assert.ok(b.x-extent>=18-1e-6);
   assert.ok(b.x+extent<=width-18+1e-6);
   assert.ok(b.y-extent>=18-1e-6);
   assert.ok(b.y+extent<=height-18+1e-6);
  }
 }
});
test('a resized viewport shrinks an oversized bubble to fit',()=>{
 const b=fitBubble(1000,800,800,320,240);
 assert.ok(b.diameter<240);
 assert.ok(b.x+b.diameter*.56<=302);
 assert.ok(b.y+b.diameter*.56<=222);
});

import {contactFilms} from './bubble-physics.js';
test('touching bubbles keep separate equal-radius films',()=>{
 const film=contactFilms(100,100,186);
 assert.ok(film.strength>0);
 assert.equal(film.planeA,film.planeB);
 assert.ok(film.planeA<1);
});
test('unequal bubbles use separate contact planes',()=>{
 const film=contactFilms(100,60,149);
 assert.ok(film.planeA!==film.planeB);
 for(const n of [film.planeA,film.planeB])assert.ok(n>=.65&&n<=.99);
});
test('separated films return to round with finite values at coincident centers',()=>{
 assert.equal(contactFilms(100,100,300).strength,0);
 for(const n of Object.values(contactFilms(100,100,0)))assert.ok(Number.isFinite(n));
});

import {partitionPlane} from './bubble-physics.js';
test('unequal touching films have opposite matching boundaries with no gap',()=>{
 const a=partitionPlane(100,200,110,260,240,80);
 const b=partitionPlane(260,240,80,100,200,110);
 assert.ok(Math.abs(a.x+b.x)<1e-10);
 assert.ok(Math.abs(a.y+b.y)<1e-10);
 assert.ok(Math.abs(a.offset+b.offset)<1e-8);
});
test('three-neighbour partitions cannot claim the same screen point',()=>{
 const spheres=[[150,260,100],[300,260,90],[220,120,80]];
 for(let x=50;x<=400;x+=5)for(let y=30;y<=400;y+=5){
  const owners=spheres.filter((s,i)=>spheres.every((other,j)=>{if(i===j)return true;const p=partitionPlane(...s,...other);return p.x*x+p.y*y<p.offset-1e-8;}));
  assert.ok(owners.length<=1,'Overlapping film ownership at '+x+','+y);
 }
});

