
//so in tghat way we can hash on Node js using crypto module

import crypto from 'crypto';
import { readFileSync } from 'fs';


// let content =  readFileSync("C:\\Users\\ashraful7076\\OneDrive\\Desktop\\revice\\package.json")
// let digest = crypto.createHash("sha256")
//   .update(content)
//   .digest('hex');

// console.log(digest)
let a = crypto.createHash("sha256").update("hello world").digest('hex');  
console.log(a)

