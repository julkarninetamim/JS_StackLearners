function Person(name) {
    this.name = name
}

Person.prototype.PI = 3.1416
var p1 = new Person('Julkarnine')
var p2 = new Person('Tamim')
console.log(p1)
console.log(p2)
/*console.log(Object.getPrototypeOf(p1))
console.log(Person.prototype)
//console.log(p1.__proto__)*/

