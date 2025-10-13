const cep = /\d{5}-\d{3}/

console.log(cep.test("88117-500"))
console.log(cep.test("asd"))
console.log(cep.test("117-50"))
console.log(cep.test("99999-999"))


const tel = /(\d{2})\d{4,5}-\d{4}/

console.log(tel.test("(21)99999-9999"))
console.log(tel.test("(21)55552-5548"))
