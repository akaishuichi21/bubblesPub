import test from 'node:test';
import assert from 'node:assert/strict';
import {canManageServer,canDiscover,flashbacksFor,popularitySize} from './policy.js';
test('only owner and designated managers can change server settings',()=>{
 const server={ownerId:'owner',managers:['manager']};
 assert.equal(canManageServer({id:'owner'},server),true);
 assert.equal(canManageServer({id:'manager'},server),true);
 assert.equal(canManageServer({id:'visitor'},server),false);
 assert.equal(canManageServer(null,server),false);
});
test('discovery excludes private and removed memories',()=>{
 assert.equal(canDiscover({visibility:'private'}),false);
 assert.equal(canDiscover({visibility:'public',removed:true}),false);
 assert.equal(canDiscover({visibility:'public'}),true);
});
test('flashbacks require conversation progress and only the peers public memories',()=>{
 const memories=[{id:1,authorId:'luna',visibility:'private'},{id:2,authorId:'luna',visibility:'public'},{id:3,authorId:'river',visibility:'public'},{id:4,authorId:'luna',visibility:'public',removed:true}];
 assert.deepEqual(flashbacksFor(memories,'luna',2),[]);
 assert.deepEqual(flashbacksFor(memories,'luna',3).map(m=>m.id),[2]);
});
test('popular bubbles remain bounded for extremes',()=>{
 assert.equal(popularitySize(-100),112);
 assert.ok(popularitySize(300)>popularitySize(10));
 assert.equal(popularitySize(Number.MAX_VALUE),190);
});
