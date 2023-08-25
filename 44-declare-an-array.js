var arr = [] //[] হল array লিটারাল
var arr2 = Array()// Array() এই constructor এর মাধ্যমেও array ডিক্লেয়ার করা যায়।
//array ডাটাগুলোকে 0,1,2,3..... ইত্যাদি index এর against এ ডাটাগুলোকে সিরিয়ালি স্টোর করে।
var arr1 = ['mango', 'banana', 'orange', 'papaya', 'grape', 'watermelon']
arr1[10] = 'apple' //চাইলে যে কোন index এ ডাটা entry করা যায় মাঝের index গুলোকে স্কিপ করে।
console.log(arr1) //[ 'mango','banana','orange','papaya','grape','watermelon',<4 empty items>, 'apple']
console.log(arr1.length)//11
arr1[2] = 'jackfruit'//যে কোন ইনডেক্সের ডাটা আপডেট/রিপ্লেস করা
console.log(arr1)////[ 'mango','banana','jackfruit','papaya','grape','watermelon',<4 empty items>, 'apple']