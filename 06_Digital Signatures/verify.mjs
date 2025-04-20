import crypto from 'crypto';

import { readFile, writeFile } from 'fs/promises';

let a =await readFile("bitto.docs", { encoding: 'utf-8' });

let original_content = a.slice(0, a.length - 64);
// console.log(original_content.toString('utf-8'));
let secretKAy= "this is my secret key";


let original_content_hash = crypto.createHash('SHA256').update(original_content).update(secretKAy).digest('hex');
console.log(original_content_hash)