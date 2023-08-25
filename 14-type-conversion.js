var str = '1000'
var n = 10
console.log(str*n)//10000
console.log(str+n)//1000010
//গুনের ক্ষেত্রে অটোমেটিক্যালি কনভার্সন হয়েছে, কিন্তু যোগের ক্ষেত্রে কনক্যাটিনেশন হয়েছে। এবং 
//এটি বিভিন্ন জাভাস্ক্রিপ্ট ইঞ্জিনে বিভিন্ন রকমের হতে পারে।
//এজন্য এদের Number() অবজেক্টের মাধ্যমে বা ParseInt,ParseFloat দিয়ে এদের নাম্বারে কনভার্ট করে নিতে পারি
console.log(Number(str))
console.log(parseInt(str))
//Number, null, undefined সবাইকে toString()  এর মাধ্যমে স্ট্রিংএ রুপান্তর করে নিতে পারি
console.log(n.toString())
//Infinity কে নাম্বারে কনভার্ট করা যাবেনা
console.log(Number(Infinity))
//তবে Infinity কে String এ কনভার্ট করা যায়
console.log(Infinity.toString())
//এমনকি Infinity বা -Infinity কে Boolean এ কনভার্ট করা যায় সেটি true রিটার্ন করে
console.log(Boolean(Infinity))// true
console.log(Boolean(-Infinity))// true
// '' , 0, null, undefined, 'NaN কে কম্পাইলার falsy value হিসেবে ধরে নিবে কিন্তু তারা একচুয়ালি true / false কোনটাই না।

console.log(Boolean(''))//false
console.log(Boolean('fasdf'))//true
console.log(Boolean(null))//false
console.log(Boolean(undefined))//false
console.log(Boolean(0))//false
console.log(Boolean(-0))//false
console.log(Boolean(-1))//true
console.log(Boolean(213))//true , 0 ব্যতীত যে কোন number
console.log(Boolean(true))//true,
console.log(true)//true
console.log(false)//false
var x= true
console.log(x.toString())//true -as String

// Constructors - String,Boolean,Number

