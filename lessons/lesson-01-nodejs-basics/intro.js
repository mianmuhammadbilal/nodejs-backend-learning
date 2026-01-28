/**
 * Node.js ek Runtime Enviroment hai mean k JavaScript ko browser ke bahar run karne deta hai
 * Chrome ke V8 engine pe based hai
 * Node.js khud C++ mein likha gaya hai. Ye JavaScript ke asaan syntax aur C++ ki speed ka mix hai.
 * Non-Blocking: Ye ek waqt mein boht saari requests handle kar sakta hai bina hang hue.
 * Mostly backend, APIs, servers ke liye use hota hai
 */

console.log("Hello from node js");

// Browser vs Node difference
// Browser me: window object hota hai
// Node me: global object hota hai

console.log("Is this Node?", typeof window); // undefined
console.log("global object exists:", typeof global); // object