//let b = 2

try {
  let a = 2 + b
}catch(e) {

  console.log(e)
  //throw new Error(e)
}finally{

  console.log("Executou")

}

console.log('Teste')

/*
try{
  let c = a + b
} catch(error) {
  console.log("Algo deu errado: " + error)
}finally {
  console.log("Executou")
}
  */