
//read md file  to Know more 
import jwt from 'jsonwebtoken'
import crypto from 'crypto'

let token = jwt.sign({ name: "ashraful" }, 'this is my secret key')
// console.log(token)

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYXNocmFmdWwiLCJpYXQiOjE3NDYwNDc5NjB9.bJP6qoAFio8bksmmzn_zMD341_M7SgXKwvlT-4X0dLY

// jwt tokrn 3 part and they are divided by (.) 


const hash = crypto.createHmac('sha256', 'this is my secret key').update("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYXNocmFmdWwiLCJpYXQiOjE3NDYwNDc5NjB9").digest('base64url');
console.log(hash)
// from the above 2 line we just underStand that behind the seen jwt use hmac algorithm  the token .  


// Dont use Jwt to login or client to server communication

let verified = jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYXNocmFmdWwiLCJpYXQiOjE3NDYwNDg4NzN9.xJXO6haIWns4DArD7V00IMQ8EQu5cNp0c_ptoOy_w1E', 'this is my secret key')

