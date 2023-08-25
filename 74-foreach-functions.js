var arr = [1, 2, 3, 4, 5]
sum = 0
arr.forEach(function (value, index, arr) {
    //console.log(value, index, arr)
    sum += value
})

console.log(sum)

function myForeach(arr, cb) {
    for (var i = 0; i < arr.length; i++) {
        // console.log(arr[i])
        cb(arr[i], i, arr)
    }
}

var sum = 0
myForeach(arr, function (value, index, arr) {
    console.log(value, index, arr)
    //  sum += value
})

//console.log(sum)

myForeach(arr, function (value, index, arr) {
    arr[index] = value + 5
})
console.log(arr)