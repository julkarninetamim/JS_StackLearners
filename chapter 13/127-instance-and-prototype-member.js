function Square(width) {
    this.width = width
    this.getWidth = function () {
        console.log('Width is ' + this.width)
        this.draw()
    }
}

Square.prototype = {
    draw: function () {
        console.log('Draw')
        this.getWidth()
    },
    toString: function () {
        return 'My width is ' + this.width
    }
}
var sqr1 = new Square(10)
var sqr2 = new Square(5)

