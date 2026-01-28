/**
 * Node.js me har file ek module hoti hai
 * "type": "module" hone ki wajah se
 * hum import / export use kar rahe hain
 */

// Hum yahan import / export ka use kar rahe hain
import { add, subtract } from "./math.js";

console.log("Addition:", add(5, 3));
console.log("Subtraction:", subtract(10, 4));
