
class Mamifero {
  constructor(patas){
    this.patas = patas
  }
}

let coiote = new Mamifero(4)

console.log(coiote.patas)

class Cachorro extends Mamifero{
  constructor(patas,raca){
    super(patas, patas)
    this.raca = raca
  }  
  latir() {
    console.log("Au au")
  }
}

let bulldog = new Cachorro(4, 'bulldog')

console.log(bulldog.patas)

/*
class Mamifero {
  constructor(patas){
    this.patas = patas
  }
}
class Cachorro extends Mamifero{
  constructor(patas, raca){
    super(patas, patas)
    this.raca = raca
  }
}

let bulldog = new Cachorro(4, 'bulldog')

console.log(bulldog)
*/

