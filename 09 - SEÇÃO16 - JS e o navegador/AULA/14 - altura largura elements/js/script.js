let elemento = document.querySelector('#titulo-principal')

console.log('largura: ' + elemento.offsetWidth) // considera as bordas
console.log('altura: ' + elemento.offsetHeight)

console.log('largura: ' + elemento.clientWidth) // não considera as bordas
console.log('altura: ' + elemento.clientHeight)

/*
let elTest = document.getElementById('titulo')

console.log(elTest.offsetWidth)//considera bordas
console.log(elTest.offsetHeight)//considera bordas

console.log(elTest.clientWidth) // desconsidera bordas
console.log(elTest.clientHeight) // desconsidera bordas
*/