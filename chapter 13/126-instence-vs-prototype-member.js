function Square(width) {
    this.width = width
}

Square.prototype = {
    draw: function () {
        console.log('Draw')
    },
    toString: function () {
        return 'My width is ' + this.width
    }
}
var sqr1 = new Square(10)
var sqr2 = new Square(5)

