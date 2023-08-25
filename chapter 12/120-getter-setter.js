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

    this.getPosition = function () {
        return position
    }
    this.draw = function () {
        console.log('I am a rectangle')
        printProperties()
        console.log('Position: X = ' + position.x + ' Position: Y = ' + position.y)

    }
    Object.defineProperty(this, 'position', {
        get: function () {
            return position
        },
        set: function (value) {
            position = value
        }
    })
}
var rect = new Rectangle(10, 20)
rect.position = {
    x: 200,
    y: 500
}
console.log(rect.position)//{ x: 200, y: 500 }
console.log(rect.position.x)//200
console.log(rect.position.y)//500

console.log(rect.position)//{ x: 50, y: -100 }
console.log(rect.position.x)//50
console.log(rect.position.y)//-100

console.log(rect.getPosition())//{ x: 50, y: -100 }

var pos = rect.getPosition()
console.log(pos.x)//50
console.log(pos.y)//-100



