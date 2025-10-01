let a = 1
let b = 2
let c = 3

if(c > a){
  a = b
  console.log(a)
}

for(let i = 5; i > 0; i--){
  b++
  a = a + c + 1
  c += 2
  console.log(a)
}

if (b == a){
  a++
}else {
  a = a + b + c
}

console.log(a)

e = a * b

console.log(a)

/*
let a = 1
let b = 2

if(a -- 1){
  a = b + 2
}
console.log(a)

for(i = 0; i < b; i++){
  a = a + 2 
  console.log(a)
}
if (a > 10) {
  a == 25
}
*/