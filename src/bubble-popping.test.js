import test from 'node:test';
import assert from 'node:assert/strict';
import {holdProgress,POP_HOLD_MS} from './bubble-popping.js';
test('short holds cannot pop a bubble',()=>{
 assert.equal(holdProgress(0),0);
 assert.equal(holdProgress(POP_HOLD_MS/2),.5);
 assert.ok(holdProgress(POP_HOLD_MS-1)<1);
});
test('a full long hold reaches the pop threshold once',()=>{
 assert.equal(holdProgress(POP_HOLD_MS),1);
 assert.equal(holdProgress(POP_HOLD_MS*2),1);
});
test('movement cancels hold pressure even after the time threshold',()=>{
 assert.equal(holdProgress(POP_HOLD_MS,true),0);
 assert.equal(holdProgress(-100),0);
});
