var arr = [4, 5, 6, 2, 9]
console.log(arr.join('|'))//4|5|6|2|9
console.log(arr.fill(200, 0, 4))//[ 200, 200, 200, 200, 9 ]

var arr1 = [1, 2, 3]
var arr2 = [5, 6, 7]
console.log(arr1.concat(arr2))//[ 1, 2, 3, 5, 6, 7 ]

console.log(Array.isArray(arr))//true

arr3 = [3, 4, 5, 6]
console.log(Array.from(arr3))//[ 3, 4, 5, 6 ]


