const validaDataNascimento = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/ 

console.log(validaDataNascimento.test("10/02/1994"))
console.log(validaDataNascimento.test("10/2/94"))
console.log(validaDataNascimento.test("1/2/1994"))
console.log(validaDataNascimento.test("10/02/94"))
console.log(validaDataNascimento.test("99/99/9999"))

const validaDataNascimento2 = /[0-31]{2}[/][0-12]{2}[/][1900-2025]{4}/ 

console.log(validaDataNascimento2.test("10/02/1994"))
console.log(validaDataNascimento2.test("10/2/94"))
console.log(validaDataNascimento2.test("1/2/1994"))
console.log(validaDataNascimento2.test("10/02/94"))
console.log(validaDataNascimento2.test("99/99/9999"))