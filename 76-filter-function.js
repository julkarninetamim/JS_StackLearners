var arr = [4, 8, 1, 3, 5, 6, 4, 3, 9]

var filteredArr = arr.filter(function (value) {
    return value > 4
})
console.log(filteredArr)

//var arr = [4, 8, 1, 3, 5, 6, 4, 3, 9]
function myFilter(arr, cb) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        if (cb(arr[i], i, arr)) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

var odd = myFilter(arr, function (val) {
    return val % 2 === 1
})
var even = myFilter(arr, function (val) {
    return val % 2 === 0
})

console.log(odd)//[ 1, 3, 5, 3, 9 ]
console.log(even)//[ 4, 8, 6, 4 ]
console.log(arr)//[4, 8, 1, 3, 5, 6, 4, 3, 9]