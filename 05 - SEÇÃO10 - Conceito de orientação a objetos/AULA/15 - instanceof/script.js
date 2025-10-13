
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

bulldog.latir()

console.log(new Cachorro instanceof Mamifero)

console.log(coiote instanceof Mamifero)

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

console.log(new Cachorro instanceof Mamifero)
*/

