

### 🔐 JWT Token Note (DO NOT use JWT for login/authentication in critical apps)

```js
import jwt from 'jsonwebtoken'
import crypto from 'crypto'

// Example JWT Token generation (not recommended for login)
let token = jwt.sign({ name: "ashraful" }, 'this is my secret key')
console.log(token)
```

#### 🧾 Sample JWT Token
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYXNocmFmdWwiLCJpYXQiOjE3NDYwNDc5NjB9.bJP6qoAFio8bksmmzn_zMD341_M7SgXKwvlT-4X0dLY
```

#### 🔍 JWT Token Structure (3 Parts separated by dots `.`, all base64url encoded):
1. **Header**: Contains algorithm and type → `{ "alg": "HS256", "typ": "JWT" }`
2. **Payload**: Contains data like `user_id`, `username`, `iat`, `exp` → sensitive user info (⚠️ avoid storing critical data)
3. **Signature**: Verifies that the token hasn’t been tampered with

#### 🧪 How JWT Signature is created
```js
const hash = crypto
  .createHmac('sha256', 'this is my secret key')
  .update("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYXNocmFmdWwiLCJpYXQiOjE3NDYwNDc5NjB9")
  .digest('base64url');

console.log(hash);
```
> ✅ This shows JWT uses **HMAC-SHA256** behind the scenes to create the signature.

---

### ⚠️ Important Note
**NEVER use JWT for login/auth in client-server communication.**
- JWT is **stateless**, which means you can’t revoke tokens unless you manage a blacklist.
- Susceptible to **token leakage**, especially if stored in localStorage.
- Use **sessions with HttpOnly cookies** for secure login.

---
