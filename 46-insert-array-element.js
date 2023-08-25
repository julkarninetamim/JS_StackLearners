var arr = [1, 2, 4,]
//replace the element of array for specific index
arr[2] = 3
console.log(arr)//[ 1, 2, 3 ]

//insert an element at the end of array
arr.push(10)
console.log(arr)//[ 1, 2, 3, 10 ]

//insert multiple element at the end of array
arr.push(13, 14, 15)
console.log(arr)//[ 1, 2, 3, 10, 13, 14, 15 ]

//Remove the first element of array
arr.shift()
console.log(arr)//[ 2, 3, 10, 13, 14, 15 ]

//insert an element at the beginning of array
arr.unshift(12)
console.log(arr)//[12, 2, 3, 10, 13, 14, 15 ]

//insert multiple element at the beginning of array
arr.unshift(22, 23, 24)
console.log(arr)//[22, 23, 24, 12, 2, 3, 10, 13, 14, 15 ]

//array এর নির্দিষ্ট ইনডেক্স থেকে নির্দিষ্ট ইনডেক্স পর্যন্ত কেটে নিয়ে আসে। এক্ষেত্রে মূল array মডিফাই হয়না
var arr1 = arr.slice(2, 6)
console.log(arr1)//[ 24, 12, 2, 3 ]
console.log(arr)////[22, 23, 24, 12, 2, 3, 10, 13, 14, 15 ]

//array এ নির্দিষ্ট index থেকে নির্দিষ্ট সংখ্যক element কেটে নিয়ে আসে। এক্ষেত্রে মূল array মডিফাই হয়
var arr2 = arr.splice(3, 4)
console.log(arr2)//[ 12, 2, 3, 10 ]
console.log(arr)//[ 22, 23, 24, 13, 14, 15 ]

//array_splice এর ৩য় আর্গুমেন্টে যেগুলো পাঠানো হয় তা মূল এ্যারের কাটা অংশে add হয়।
console.log(arr)//[ 22, 23, 24, 13, 14, 15 ]
var arr3 = arr.splice(2, 3, 30, 40, 50, 60, 70)
console.log(arr3)//[ 24, 13, 14 ]
console.log(arr)//[22, 23, 30, 40,50, 60, 70, 15 ]





