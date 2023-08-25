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

//console.log(rect5)


function myFunc(c, d) {
    console.log(this)
    console.log(this.a + this.b)
    console.log(c + d)
}


myFunc()
//NaN

myFunc.call({a: 30, b: 40})
//{ a: 30, b: 40 }
//70
myFunc.call({a: 400, b: 500})
//{ a: 400, b: 500 }
//900
myFunc.call({a: 100, b: 200}, 10, 20)
//{ a: 100, b: 200 }
//300
//30

myFunc.apply({a: 30, b: 40})
//{ a: 30, b: 40 }
//70
//N
myFunc.apply({a: 100, b: 200}, [10, 20])
//{ a: 100, b: 200 }
//300
//30

var testBind = myFunc.bind({a: 30, b: 40}, 4, 6)
testBind()
//{ a: 30, b: 40 }
// 70
// 10
var testBind2 = myFunc.bind({a: 30, b: 40})
testBind2(4, 6)
//{ a: 30, b: 40 }
// 70
// 10
