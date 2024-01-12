//Matematiksel Operatörler

 var x = 10
var y = 20
var z = 30

console.log(x+y)
console.log(x-y)
console.log(x/z)
console.log(x*z)
console.log(x*y+z)
console.log(x*(y+z))

x++
y--
console.log(x)
console.log(y)

//Karşılaştırma Operatörleri

console.log(x>y)
console.log(x>=y)
console.log(z==y)
console.log(x=="10") //true
console.log(x==="10") //false
console.log(x=!"10")

//Mantıksal Operatörler

//VE && AND

console.log((x>y) && (x>z))

//VEYA OR ||
console.log((x>y) || (x>z))
 
//DEĞİL ! NOT
console.log(!(x>y) && (x>z))
