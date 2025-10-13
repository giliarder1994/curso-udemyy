
function criarCachorro(raca, patas, cor){
  let cachorro = Object.create({})
  cachorro.raca = raca
  cachorro.patas = patas
  cachorro.cor = cor
  cachorro.latir = function(){
    console.log("Au au")
  }
  return cachorro
}

let doberman = criarCachorro('Doberman', 4, 'preta')

console.log(doberman.raca)

doberman.latir()

/*
function criarCachorro(raca){
  let cachorro = Object.create({})
  cachorro.raca = raca
  return cachorro
}

let doberman = criarCachorro('Doberman')

console.log(doberman.raca)
*/


