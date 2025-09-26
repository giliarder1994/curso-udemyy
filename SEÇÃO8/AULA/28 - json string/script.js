
let pessoa = {
  "nome": "Giliarde",
  "idade": 31,
  "profissao": "Programador",
  "hoobies": ["Video game", "leitura", "Treinar"]
}

let pessoaTexto = JSON.stringify(pessoa)

console.log(pessoaTexto)
//console.log(pessoaTexto.nome)

let pessoaJSON = JSON.parse(pessoaTexto)

console.log(pessoaJSON)

console.log(pessoaJSON.hobbies[0])

/*
const car = {
  "brand": "BMW",
  "wheels": 4,
  "doors": 2,
  "type": "Sedan"
}
let jsonToString = JSON.stringify(car)

console.log(jsonToString)

let stringToJson = JSON.parse(jsonToString)

console.log(stringToJson)
*/



