import crypto from "node:crypto";
import { readFile } from "node:fs/promises";

const fileContent = await readFile("mac.md");
const mySecretKey = "my-super-secret-key";

const hmac = crypto
  .createHmac("sha256", mySecretKey)
  .update(fileContent)
  .digest("hex");

const simpleHmac = crypto
  .createHash("sha256")
  .update(mySecretKey)
  .update(fileContent)
  .digest("hex");

console.log(hmac);
console.log(simpleHmac);
