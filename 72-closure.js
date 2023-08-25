var b = 10

function a() {
    var x = 100
    return function () {
        console.log(x)
    }
}

var abc = a()

abc()



