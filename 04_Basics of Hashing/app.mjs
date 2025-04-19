const encodedText = new TextEncoder().encode("Hello World");
const hashBuffer = await crypto.subtle.digest("SHA-256", encodedText);
const hashArray = [...new Uint8Array(hashBuffer)];
const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, "0")).join("");

console.log(hashHex);