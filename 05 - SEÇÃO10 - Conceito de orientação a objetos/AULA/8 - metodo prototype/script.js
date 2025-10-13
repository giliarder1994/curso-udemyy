
function Cachorro(raca, patas, cor){
  this.raca = raca
  this.patas = patas
  this.cor = cor
}
Cachorro.prototype.uivar = function(){
  console.log("Auuuuuu")
}
Cachorro.prototype.latir = function(){
  console.log("Au au")
}

let husky = new Cachorro('Husky', 4, 'cinza')

console.log(husky.raca)

husky.uivar()
husky.latir()

/*
function Cachorro(raca){
  this.raca = raca
}
Cachorro.prototype.uivar = function(){
  console.log("Auuuuuu")
}

let husky = new Cachorro('Husky')

console.log(husky.raca)

husky.uivar()
*/




