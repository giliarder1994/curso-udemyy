function* criadorId(){
    let id = 0
    while(true){
        yield id++
    }
}

let criaid = criadorId()

console.log(criaid.next().value)
console.log(criaid.next().value)
console.log(criaid.next().value)
console.log(criaid.next().value)
console.log(criaid.next().value)
console.log(criaid.next().value)

console.log(criaid.next())