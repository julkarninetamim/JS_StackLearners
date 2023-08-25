var Rectangle = function (width, height) {
    this.width = width
    this.height = height
    var position = {
        x: 50,
        y: -100
    }

    var printProperties = function () {
        console.log('My Width is ' + this.width)
        console.log('My Height is ' + this.height)
    }.bind(this)

    var printProperties2 = function () {
        console.log('My Width is ' + width)
        console.log('My Height is ' + height)
    }

    this.draw = function () {
        console.log('I am a rectangle')
        printProperties()
        printProperties2()
        console.log('Position: X = ' + position.x + ' Position: Y = ' + position.y)

    }
}
var rect = new Rectangle(10, 20)

rect.draw()
