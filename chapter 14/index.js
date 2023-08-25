/*function extend(Parent, Child) {
    Child.prototype = Object.create(Parent.prototype)
    Child.prototype.constructor = Child
}

function Shape(color) {
    this.color = color
}

Shape.prototype.common = function () {
    console.log('I am Common Method')
}

function Square(width, color) {
    Shape.call(this, color)
    this.width = width
}

extend(Shape, Square)

Square.prototype.draw = function () {
    console.log('Drawing')
}

Square.prototype.common = function () {
    console.log('I am calling from Square and I have Overridden')
}

function Circle(radius, color) {
    Shape.call(this, color)
    this.radius = radius
}

extend(Shape, Circle)
Circle.prototype.common = function () {
    Shape.prototype.common.call(this)

console.log('I am calling from Circle and I have Overridden')
}
var sqr = new Square(30, 'green')
var circle = new Circle(10, 'red')
var shape = new Shape('purple')

var shapes = [shape, circle, sqr]

for (var i of shapes) {
    i.common()
}*/

function mixin(target, ...sources) {
    Object.assign(target, ...sources)
}

var canWalk = {
    walk: function () {
        console.log('Walking..')
    }
}
var canEat = {
    eat: function () {
        console.log('Eating..')
    }
}
var canSwim = {
    swim: function () {
        console.log('Swimming..')
    }
}

function Person(name) {
    this.name = name
}

//Object.assign(Person.prototype, canWalk, canEat)
mixin(Person.prototype, canWalk, canEat)

var person = new Person('Julkarnine')
console.log(person)

function Fish(name) {
    this.name = name
}

mixin(Fish.prototype, canEat, canSwim)
var fish= new Fish('Gold Fish')
console.log(fish)


/*var person = Object.assign({}, canWalk, canEat)
person.name = 'Julkarnine'
console.log(person)
*/