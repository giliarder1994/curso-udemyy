const notab = /[^ab]/

console.log(notab.test("a"))
console.log(notab.test("Aqui tem a"))

const notaaz = /[^a-z]/

console.log(notaaz.test("123 as"))
console.log(notaaz.test("asddfsgdhfnjtjkyfkuyfukd"))
