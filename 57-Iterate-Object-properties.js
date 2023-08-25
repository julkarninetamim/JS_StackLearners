var obj = {
    a: 10,
    b: [2, 3, 4, 5],
    c: 30,
    d: [20, 30, 40, 50]
}

console.log('a' in obj)//true

for (var i in obj) {
    console.log(i)
}

for (var i in obj) {
    console.log(obj[i])
}

for (var i in obj) {
    var sum = 0
    for (var j = 0; j < obj[i].length; j++) {
        sum += obj[i][j]
    }
    console.log(sum)
}