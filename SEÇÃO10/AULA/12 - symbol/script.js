
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

let patas = Symbol()

Cachorro.prototype[patas] = 4

let husky = new Cachorro('Husky', 'cinza')

console.log(husky.patas)
husky.latir()

console.log(Cachorro.prototype.raca)
console.log(husky.raca)

// ACESSANDO SYMBOL
console.log(Cachorro.prototype[patas])

console.log(husky[patas])

/*
class Cachorro {
  constructor(raca){
    this.raca = raca
  }  
}

let patas = Symbol()

Cachorro.prototype[patas] = 4

let husky = new Cachorro('Husky')



console.log(husky.raca)
*/
