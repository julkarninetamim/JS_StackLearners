var rect = {
    width: 100,
    height: 50,
    draw: function () {
        console.log('I am a rectangle')
        this.printProperties()

    },
    printProperties: function () {
        console.log('My Width is ' + this.width)
        console.log('My Height is ' + this.height)
    }
}
rect.draw()
//rect.width = 80
//rect.draw()

function myFunc() {
    console.log(this)
    rect.printProperties()
}

myFunc()

var another = {
    width: 49,
    height: 32,
    print: rect.printProperties
}
console.log(another.print)
another.print()

