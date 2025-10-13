
class Cachorro {
  constructor(raca, cor){
    this.raca = raca
    this.cor = cor
  }  
  latir() {
    console.log("Au au")
  }
}
Cachorro.prototype.patas = 4

let husky = new Cachorro('Husky', 'cinza')

console.log(husky.patas)
husky.latir()

/*
class Cachorro {
  constructor(raca){
    this.raca = raca
  }  
  latir(){
    console.log("Au au")
  }
}
Cachorro.prototype.patas = 4

let husky = new Cachorro('Husky')

console.log(husky.raca)
*/
