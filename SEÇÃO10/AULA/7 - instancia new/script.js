
function Cachorro(raca, patas, cor){
  this.raca = raca
  this.patas = patas
  this.cor = cor
  this.uivar = function(){
    console.log("Auuuuuuu")
  }
}

let husky = new Cachorro('Husky', 4, 'cinza')

console.log(husky.raca)

husky.uivar()

/*
function Cachorro(raca){
  this.raca = raca
}

let husky = new Cachorro('Husky')

console.log(husky.raca)
*/



