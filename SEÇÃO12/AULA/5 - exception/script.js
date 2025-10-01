function saudacao(nome){
  if(typeof nome != 'string'){
    throw new Error("O parametro nome precisa ser string")
  }else {
    console.log(`Olá ${nome}.`)
  }
}
saudacao("Giliarde")
saudacao(5)

console.log('Teste')