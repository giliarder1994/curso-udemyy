function multiplicarTresNumeros(x, y , z) {
  return x * y * z
}
console.log(multiplicarTresNumeros(2, 6, 7))

const mult = multiplicarTresNumeros(10, 5, 9)

console.log("O valor de mult é: " + mult)

function podeDirigir(idade, cnh) {
  if (idade >= 18 && cnh == true) {
    console.log("Pode dirigir")
  }else {
    console.log("Não pode dirigir")
  }
}
console.log(podeDirigir(22, true))
console.log(podeDirigir(19, true))
console.log(podeDirigir(44, 0))
console.log(podeDirigir(19, 1))
console.log(podeDirigir(17, false))

/*
const soma = function(a, b){
  return a + b
}
console.log(soma(3, 5))

const saudacao = function(nome){
  if (nome == "Giliarde") {
    return "Olá Giliarde"
  }
}
console.log(saudacao("Giliarde"))
*/