function soma(a,b) {
  if(a === undefined || b === undefined) {
    console.log("Esta função precisa ter os dois argumentos.")
  }else {
    return a + b
  }
}

console.log(soma(1))
console.log(soma(1, 2))

function saudacao(nome, idade) {
  if(idade === undefined) {
    console.log("olá " + nome)
  }else {
    console.log("Olá " + nome + " você tem " + idade + " anos.")
  }
  
}
console.log(saudacao("Giliarde"))
console.log(saudacao("Giliarde", 31))

/*
function nomeComIdade(nome, idade) {
  
  if(idade === undefined) {
    console.log("Seu nome é " + nome)
  }else {
    console.log("Seu nome é " + nome + "e voce tem " + idade + "anos.")
  }
  nomeComIdade("Giliarde")
  nomeComIdade("Giliarde", 31)
}
*/