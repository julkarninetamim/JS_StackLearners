var obj = {}
var obj2 = new Object()

console.log(obj.__proto__ === obj2.__proto__)//true


console.log(Object.getPrototypeOf(obj) === Object.getPrototypeOf(obj2))//true