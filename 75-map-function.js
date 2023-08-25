//var arr = [1, 2, 3, 4, 5]

/*
var sqrArr = arr.map(function (value, index, arr) {
    //return Math.random()*100
    return value * value
})
console.log(arr)//[ 1, 2, 3, 4, 5 ]
console.log(sqrArr)//[ 1, 4, 9, 16, 25 ]
*/
/*

var arr = [1, 2, 3, 4, 5]
function myMap(arr) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        var temp = arr[i] * arr[i]
        newArr.push(temp)
    }
    return newArr
}

console.log(myMap(arr))//[ 1, 4, 9, 16, 25 ]
console.log(arr)//[ 1, 2, 3, 4, 5 ]
*/


var arr = [1, 2, 3, 4, 5]

function myMap(arr, cb) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        var temp = cb(arr[i], i, arr)
        newArr.push(temp)
    }
    return newArr
}

var qb = myMap(arr, function (v) {
    return v * v * v
})

var mTen = myMap(arr, function (v) {
    return v * 10
})
console.log(qb)//[ 1, 8, 27, 64, 125 ]
console.log(mTen)//[ 10, 20, 30, 40, 50 ]
console.log(arr)//[ 1, 2, 3, 4, 5 ]

