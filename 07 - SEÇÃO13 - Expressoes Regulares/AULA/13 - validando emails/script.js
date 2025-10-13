const validaEmail = /\w+@\w+\.\w+/ 

console.log(validaEmail.test("giliarder1994@gmail.com"))
console.log(validaEmail.test("giliarder1994@com"))
console.log(validaEmail.test("gmail.com"))
console.log(validaEmail.test("giliarder1994@gmail"))