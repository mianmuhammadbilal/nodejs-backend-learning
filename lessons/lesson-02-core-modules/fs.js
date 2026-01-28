// ===============================
//  FILE SYSTEM (fs MODULE)
// ===============================

import fs from 'fs';

// ---------- WRITE FILEnpm  (SYNC) ----------
console.log("Start");
fs.writeFileSync('./test.txt', 'Hello World');
console.log("End");

// ---------- WRITE FILE (ASYNC) ----------
console.log("Start");
fs.writeFile('./test.txt', 'Hello Node.js', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("File written successfully");
    }
});
console.log("End");
