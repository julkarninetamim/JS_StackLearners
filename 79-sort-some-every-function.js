var persons = [
    {
        name: 'A',
        age: 19
    },
    {
        name: 'B',
        age: 17
    },
    {
        name: 'C',
        age: 26
    },
    {
        name: 'D',
        age: 21
    }
]

var arr = [4, 8, 1, 6, -6, 0, 7, 9, 4, -3, 3, 5, 6, 8, 2, 1, 7, -8]

/*
arr.sort()
console.log(arr)

persons.sort()
console.log(persons)*/

arr.sort(function (a, b) {
    if (a > b) {
        return 1
    } else if (a < b) {
        return -1
    } else {
        return 0
    }
})
console.log(arr)

persons.sort(function (a, b) {
    if (a.age > b.age) {
        return 1
    } else if (a.age < b.age) {
        return -1
    } else {
        return 0
    }
})

console.log(persons)

//var arr2 = [4, 8, 1, 6, 0, 7, 9, 4, 3, 5, 6, 8, 2, 1, 7]
var arr2 = [4, 8, 7, 6, 0, 4, 6, 8, 2]

var res1 = arr2.every(function (value) {
    return value % 2 === 0
})
console.log(res1)


var res2 = arr2.every(function (value) {
    return value >= 0
})
console.log(res2)


var res3 = arr2.some(function (value) {
    return value % 2 === 0
})
console.log(res3)


var res4 = arr2.some(function (value) {
    return value < 0
})
console.log(res4)














