
function checarNumero(num){
  let number = Number(num)
  if (Number.isNaN(number)){
    console.log("Por favor, passe só números para o programa")
  }else {
    return number
  }
}
console.log(5)
console.log("algo")

/*
function checarNumero(valor){
  let resultado = Number(valor)
  if(Number.isNaN(resultado)){
    return null
  }else {
    return resultado
  }
}
console.log(checarNumero(5))
console.log(checarNumero('teste'))
*/