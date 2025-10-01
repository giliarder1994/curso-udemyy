
let cachorro = {
  patas: 4,
  raca: 'SRD',
  latir: function(){
    console.log("Au au")
  }
}

let labrador = Object.create(cachorro)

labrador.latir()

labrador.raca = "Labrador"

console.log(labrador.raca)
console.log(cachorro.raca)

let pastor = Object.create(cachorro)

pastor.raca = 'Pastor Alemão'

console.log(pastor.raca)

/*
let cachorro = {
  raca: 'SRD'
}
let pastorAlemao = Object.create(cachorro)

pastorAlemao.raca = 'Pastor Alemão'

console.log(pastorAlemao.raca)
*/

