
const cachorro = {
  raca: 'SRD',
  uivar: function(){
    console.log('Auuuuuuuuuuu')
  },
  rosnar: function(){
    console.log("grrrrr")
  },
  setRaca: function(raca){
    this.raca = raca
  },
  getRaca: function(){
    return "A raça é " + this.raca
  }
}
console.log(cachorro.raca)

cachorro.setRaca('Pastor Alemão')

console.log(cachorro.raca)

console.log(cachorro.getRaca())


/*
let pessoa = {
  nome: '',
  setNome: function(novoNome){
    this.nome = novoNome
  },
  getNome: function(){
    return this.nome
  }
}
pessoa.setNome("Giliarde")

console.log(pessoa.getNome())
*/

