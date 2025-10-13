
class Cachorro {
  constructor(raca, cor){
    this.raca = raca
    this.cor = cor
  }  
  latir() {
    console.log("Au au")
  }
}
Cachorro.prototype.raca = "SRD"
Cachorro.prototype.patas = 4

let husky = new Cachorro('Husky', 'cinza')

console.log(husky.patas)
husky.latir()

console.log(Cachorro.prototype.raca)
console.log(husky.raca)

/*
class Cachorro {
  constructor(raca){
    this.raca = raca
  }  
}

let husky = new Cachorro('Husky')

Cachorro.prototype.patas = 4

console.log(husky.raca)
*/
