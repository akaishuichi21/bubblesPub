import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const source=readFileSync(new URL('./bubble-renderer.js',import.meta.url),'utf8');
// GLSL ES 3.00 section 3.8 reserves these identifiers even when the
// corresponding feature is unavailable. Vite treats GLSL as plain strings.
const reserved=new Set('patch sample input output filter common partition active resource atomic_uint asm class union enum typedef template this goto inline noinline public static extern external interface long short double half fixed unsigned superp sizeof cast namespace using'.split(' '));
test('both bubble shaders avoid reserved GLSL declaration names',()=>{
 const shaders=[...source.matchAll(/const (vertexShader|fragmentShader) = `([\s\S]*?)`;/g)];
 assert.equal(shaders.length,2);
 for(const [,name,shader]of shaders){
  for(const [,identifier]of shader.matchAll(/\b(?:float|vec[234]|mat[234]|int|bool|sampler2D)\s+(\w+)/g))assert.ok(!reserved.has(identifier),name+' declares reserved identifier '+identifier);
 }
});
