function lembrarSoma(x){
  return function (y) {
    return x + y
  }
}
let soma1 = lembrarSoma(2)
console.log(soma1(5))

let soma2 = lembrarSoma(5)
console.log(soma2(7))

function contador(i) {
  let cont = i
  let somarContador = function(){
    console.log(cont)
    cont++
  }
  return somarContador
}
let meuContador = contador(5)
meuContador()
meuContador()
meuContador()
meuContador()
meuContador()
meuContador()

let meuContador2 = contador(1)
meuContador2()
meuContador2()
meuContador2()

/*
function armazenarSoma(x) {
  return y => x + y
}
let soma1 = armazenarSoma(3)
console.log(soma1(5))
let soma2 = armazenarSoma(5)
console.log(soma2(10))
*/