var createRect = function (width, height) {
    return {
        width: width,
        height: height,
        draw: function () {
            console.log('I am a rectangle')
            this.printProperties()

        },
        printProperties: function () {
            console.log('My Width is ' + this.width)
            console.log('My Height is ' + this.height)
        }
    }
}

var rect1 = createRect(10, 5)
rect1.draw();

var rect2 = createRect(20,30)
rect2.draw()

