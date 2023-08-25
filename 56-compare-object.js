var obj1 = {a: 10, b: 20, c: 30}
var obj2 = {a: 10, b: 20, c: 30}
var comp = obj1 === obj2
var comp1 = obj1 == obj2

console.log(comp)//false
console.log(comp1)//false

var comp2 = JSON.stringify(obj1) === JSON.stringify(obj2)
var comp3 = JSON.stringify(obj1) == JSON.stringify(obj2)
console.log(comp2)//true
console.log(comp3)//true