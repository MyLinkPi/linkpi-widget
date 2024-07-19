import crypto from "node:crypto";

// 实现 getRandomValues polyfill
function getRandomValues(array: any) {
  if (!(array instanceof Uint8Array || array instanceof Uint16Array || array instanceof Uint32Array || array instanceof Int8Array || array instanceof Int16Array || array instanceof Int32Array || array instanceof Float32Array || array instanceof Float64Array || ArrayBuffer.isView(array))) {
    throw new TypeError("Argument must be a TypedArray or an ArrayBuffer view");
}

if (array.byteLength > 65_536) {
    throw new Error("Requested too many random bytes");
}

const buffer = Buffer.from(array.buffer, array.byteOffset, array.byteLength);
const randomBytes = crypto.randomBytes(buffer.length);
randomBytes.copy(buffer);
return array;
}

// Polyfill 全局对象 (如果在全局范围内需要)
if (globalThis.crypto === undefined) {
  // @ts-ignore
  globalThis.crypto = {};
}

if (globalThis.crypto.getRandomValues === undefined) {
  // @ts-ignore
  globalThis.crypto.getRandomValues = getRandomValues;
}
