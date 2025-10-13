let nome = "Giliarde"

for(let i = 0; i < 10; i = i + 1){
  
  if(i == 3) {
    nome = "João"
  }
  if(i == 5 && nome == "João") {
    console.log("O nome é João, pode parar!")
    break
  }
  console.log(i)
}

/*
for(let i = 5; i < 20; i = i + 1) {
  if(i % 10 == 0) {
    console.log(`i é igual a ${i / 1} então saiu do loop`)
    break
  }
  console.log(`i é igual a ${i + 1} então prosseguindo o loop`)
}
*/