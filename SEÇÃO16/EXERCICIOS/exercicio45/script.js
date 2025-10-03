const validaNomeUsuario = /^(?=.{3,16}$)[a-z0-9-_]/

console.log(validaNomeUsuario.test("giliarde_159"))
console.log(validaIP.test("127001"))
console.log(validaIP.test("185.0.2.1"))
