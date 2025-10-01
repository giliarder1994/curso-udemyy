
class Cachorro {
  constructor(raca, patas, cor){
    this.raca = raca
    this.patas = patas
    this.cor = cor
  }  
}

let husky = new Cachorro('Husky', 4, 'cinza')

console.log(husky)

/*
class Cachorro {
  constructor(raca){
    this.raca = raca
  }  
}

let husky = new Cachorro('Husky')

console.log(husky.raca)
*/