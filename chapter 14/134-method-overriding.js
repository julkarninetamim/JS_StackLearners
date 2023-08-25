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

Square.prototype.draw = function () {
    console.log('Drawing')
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


