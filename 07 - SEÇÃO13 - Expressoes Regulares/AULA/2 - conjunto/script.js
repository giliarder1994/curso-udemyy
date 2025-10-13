
const reg1 = /[12345]/

console.log(reg1.test("Temos o número 6"))
console.log(reg1.test("Temos o número 2"))
console.log(reg1.test("Temos o número 25"))
console.log(reg1.test("Temos o número 26"))

const reg2 = /[0-9]/

console.log(reg1.test("Temos o número 65856668547854425"))
console.log(reg1.test("Temos o número"))




/*
console.log(/[123]/.test("Existe 123 aqui?"))
console.log(/[0-9]/.teste("O número 8 está presente aqui?"))
*/
