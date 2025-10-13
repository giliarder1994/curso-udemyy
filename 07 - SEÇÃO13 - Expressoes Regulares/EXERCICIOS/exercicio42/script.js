const validarID = /\d+ID\b/

console.log(validarID.test("126585ID"))
console.log(validarID.test("126585"))
console.log(validarID.test("asd"))
console.log(validarID.test("addssggdfID"))
console.log(validarID.test("ID"))
console.log(validarID.test("126585ID58"))
