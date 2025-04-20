import crypto from 'crypto';
import { createWriteStream, write, writeFileSync } from 'fs';
import { readFile, writeFile } from 'fs/promises';

let docs = await readFile("C:\\Users\\ashraful7076\\OneDrive\\Desktop\\Mastering Authentication and Authorization\\06_Digital Signatures\\aggrement.txt");
// console.log(docs)
let secretKAy= "this is my secret key";

let signature = crypto.createHash('SHA256').update(docs).update(secretKAy).digest('hex');

let writeStream = createWriteStream('bitto.docs');

writeStream.write(docs);
writeStream.end(signature);
