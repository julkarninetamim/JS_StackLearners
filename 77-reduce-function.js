/*var arr = [1, 2, 3, 4, 5]
var sum = arr.reduce(function (previousValue, currentValue, currentIndex, array) {
    return previousValue + currentValue
}, 100)
console.log(sum)//115

//var arr = [1, 2, 3, 4, 5]
var max = arr.reduce(function (previousValue, currentValue) {
    return Math.max(previousValue, currentValue)
})
console.log(max)//5

//var arr = [1, 2, 3, 4, 5]
var min = arr.reduce(function (previousValue, currentValue) {
    return Math.min(previousValue, currentValue)
})
console.log(min)//1*/
var arr = [67, 1, 2, 3, 4, 5]

function myReduce(arr, cb, acc) {
    for (var i = 0; i < arr.length; i++) {
        acc = cb(acc, arr[i])
    }
    return acc
}

var sum = myReduce(arr, function (prev, curr) {
    return prev + curr
}, 0)
var max = myReduce(arr, function (prev, curr) {
    return Math.max(prev, curr)
}, 0)
var min = myReduce(arr, function (prev, curr) {
    return Math.min(prev, curr)
}, arr[0])

console.log(sum, max, min)//82 67 1


