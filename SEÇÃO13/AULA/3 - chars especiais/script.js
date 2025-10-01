
const pontoRegex = /./

console.log(pontoRegex.test("123"))
console.log(pontoRegex.test("asd"))
console.log(pontoRegex.test("  "))
console.log(pontoRegex.test("123asd"))

const dRegex = /\d/ //[0-9]

console.log(dRegex.test("123"))
console.log(dRegex.test("asd"))
console.log(dRegex.test("  "))
console.log(dRegex.test("123asd"))

const DRegex = /\D/ //[^0-9]

console.log(DRegex.test("123"))
console.log(DRegex.test("asd"))
console.log(DRegex.test("  "))
console.log(DRegex.test("123asd"))

const sRegex = /\s/ //[^0-9]

console.log(sRegex.test("123"))
console.log(sRegex.test("asd"))
console.log(sRegex.test("  "))
console.log(sRegex.test("123asd"))

const wRegex = /\w/ //[^0-9]

console.log(wRegex.test("123"))
console.log(wRegex.test("asd"))
console.log(wRegex.test("  "))
console.log(wRegex.test("123asd"))



/*
console.log(/[123]/.test("Existe 123 aqui?"))
console.log(/[0-9]/.teste("O número 8 está presente aqui?"))
*/
