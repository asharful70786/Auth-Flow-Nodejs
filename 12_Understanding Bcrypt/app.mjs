//if we go on google and Scarch Bcrypt . there we  can see  bcryptbcrypt(C++)  & bcryptbcrypt.js (javaScript)
//bcrypt is a Key Derivation Function (KDF, that is used to hash passwords ) & also a Npm package

//step to use 
//npm i bcrypt


import bcrypt from 'bcrypt'; //importing bcrypt module

let salt = bcrypt.genSaltSync(10); //generating salt with 10 rounds of salting
console.log(salt)