function add(a, b) {
    return a + b
}

function manipulate(a, b, func) {
    var c = a + b//6
    var d = a - b//2

    function multiply() {
        var m = func(a, b)//6
        return c * d * m//6*2*6
    }

    return multiply()
}

var multi = manipulate(4, 2, add)
console.log(multi)//72


