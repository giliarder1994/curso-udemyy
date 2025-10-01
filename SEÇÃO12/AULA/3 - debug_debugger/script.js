
let a = 1
let b = 2
let c = 3

if(c > a){
  a = b
  debugger
}

for(let i = 5; i > 0; i--){
  b++
  a = a + c + 1
  c += 2
  debugger
}

if (b == a){
  a++
}else {
  a = a + b + c
}

debugger

c = a * b

debugger

console.log('Teste')

/*
let a = 1
let b = 2

if(a == 1){
  a = b + 2
}

for(i = 0; i < b; i++){
  a = a + 2 
}

debugger

if (a > 10) {
  a == 25
}
*/