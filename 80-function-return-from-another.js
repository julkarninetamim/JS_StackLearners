function greet(msg) {
    function greetings(name) {
        return msg + ', ' + name + '!'
    }

    return greetings
}

var gm = greet('Good Morning')
//console.log(typeof gm)//function
var msg = gm('Julkarnine Tamim')

console.log(msg)//Good Morning, Julkarnine Tamim!


function base(b) {
    return function (n) {
        var result = 1
        for (var i = 0; i < b; i++) {
            result *= n
            // console.log(result)
        }
        return result
    }

}

var base10 = base(3)
var res = base10(2)
console.log(res)

function basePower(base, power) {

    if (power >= 0) {
        var result = 1
        for (var i = 0; i < power; i++) {
            result = result * base
        }
        return result
    } else if (power < 0) {
        var inverse = 1
        for (var i = 0; i < power; i++) {
            inverse = (1 / (inverse * base))
        }
        return inverse
    }
}

console.log(basePower(5, 3))

console.log(Math.pow(2, -3))
//3*3*3

