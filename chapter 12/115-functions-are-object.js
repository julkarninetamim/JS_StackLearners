var Rect = new Function('width', 'height', ` this.width = width
    this.height = height
    this.draw = function () {
        console.log('I am a rectangle')
        this.printProperties()

    }
    this.printProperties = function () {
        console.log('My Width is ' + this.width)
        console.log('My Height is ' + this.height)
    }`
)

var rect = new Rect(2, 4)

console.log(rect.draw())

function test() {
    console.log('Something')
}

console.log(test.length,test.height)

//console.log(typeof test)
//console.log(test.constructor)