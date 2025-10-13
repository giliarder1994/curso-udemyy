
class Cachorro {
  constructor(raca, cor){
    this.raca = raca
    this.cor = cor
  }  
  latir() {
    console.log("Au au")
  }
  get getCor(){
    return this.cor
  }
  set setCor(cor){
    this.cor = cor
  }
}

let husky = new Cachorro('Husky', 'Sem cor')

console.log(husky)
husky.latir()

husky.setCor = 'cinza'

console.log(husky.getCor)

/*
class Cachorro {
  constructor(raca){
    this.raca = raca
  }
  get verRaca(){
    return 'A raça é ' + this.raca
  }
  set novaRaca(value){
    this.raca = value
  }
}

let husky = new Cachorro('Husky')

console.log(husky.verRaca)
husky.novaRaca = "Pastor Alemão"
*/
