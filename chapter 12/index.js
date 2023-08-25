
var Rect = new Function('width', 'height', ` this.width = width
    this.height = height
    
    this.draw = function () {
        console.log('I am a rectangle')
        this.printProperties()
        console.log(this)

    }
    this.printProperties = function () {
        console.log('My Width is ' + this.width)
        console.log('My Height is ' + this.height)
    }`
)

var rect5 = new Rect(2, 4)

console.log(rect5)


