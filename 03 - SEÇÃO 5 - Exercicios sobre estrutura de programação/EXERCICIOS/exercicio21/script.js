function verificarTipoDeDado(dado){
  
  if(typeof dado === 'string'){
    console.log("Esse dado é uma string")
  }else if(typeof dado === 'number'){
    console.log("Esse dado é um number")
  }else if(typeof dado === 'boolean'){
    console.log("Esse dado é um boolean")
  }
}
verificarTipoDeDado(true)
verificarTipoDeDado(2)
verificarTipoDeDado("Giliarde")
