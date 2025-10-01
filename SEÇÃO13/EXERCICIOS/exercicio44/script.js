const validaIP = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/

console.log(validaIP.test("127.0.0.1"))
console.log(validaIP.test("127001"))
console.log(validaIP.test("185.0.2.1"))
