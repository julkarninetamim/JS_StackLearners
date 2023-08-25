/*
var arr = [7, 3, 2, 9, 3, 8, 5, 2, 1, 68, 23]
var result = arr.find(function (value) {
    return value === 9
})
console.log(result)//9

var result2 = arr.findIndex(function (value) {
    return value === 9
})
console.log(result2)//3
*/

var arr = [7, 3, 2, 9, 3, 8, 5, 2, 1, 68, 23]
function myFind(arr, cb) {
    for (var i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            return arr[i]
            //return i //return index
        }
    }
}

var result = myFind(arr, function (value) {
    return value === 9
})

console.log(result)

