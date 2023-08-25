function Shape() {
}

Shape.prototype = {
    common: function () {
        console.log('I am Common Method')
    }
}
function Square(width) {
    this.width = width
}

Square.prototype = Object.create(Shape.prototype)
Square.prototype.draw = function () {
    console.log('Drawing')
}
var shape = new Shape()
var sqr = new Square(30)

function Circle() {

}

Circle.prototype = Object.create(Shape.prototype)
var circle = new Circle()

//shape -> Shape -> Object
//sqr -> Square -> Object

//sqr -> Square -> Shape -> Object

