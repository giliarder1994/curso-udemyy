const reg = /\w+: (Giliarde|Jõao|Maria)/ //Nome: gdofgjsdogosd

console.log(reg.test("Nome: Giliarde"))
console.log(reg.test("Nome: José"))
console.log(reg.test("Nome: Maria"))