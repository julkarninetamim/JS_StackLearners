function sample(a, b, cb) {
    var c = a + b//8
    var d = a - b//2
    var result = cb(c, d)
    return result
}

function sum(a, b) {
    return a + b
}

var result = sample(5, 3, sum)
console.log(result)
var result2 = sample(5, 3, function (p, q) {
    return p - q
})
console.log(result2)


