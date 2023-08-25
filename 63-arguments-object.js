function addNum(a, b, c, d) {
    console.log(arguments)
}

addNum()

function sumNum(x, y, z) {
    console.log(JSON.stringify(arguments))
}

sumNum(1, 2, 3)

function total(a, b, c, d) {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    console.log(sum)
}
total(2,3,5,6)