function extend(Parent, Child) {
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
/*
Square.prototype = Object.create(Shape.prototype)
Square.prototype.constructor = Square
*/

Square.prototype.draw = function () {
    console.log('Drawing')
}
var sqr = new Square(30, 'green')

//var shape = new Shape()

function Circle(radius, color) {
    Shape.call(this, color)
    this.radius = radius
}

extend(Shape, Circle)
/*
Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle*/

//new Shape.prototype.constructor()
/*
var shape2 = new Shape.prototype.constructor
*/


//shape -> Shape -> Object
//sqr -> Square -> Object

//sqr -> Square -> Shape -> Object

