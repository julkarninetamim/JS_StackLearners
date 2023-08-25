//Arithmetic Operator 
// + - * / % ++ --

var a = 10
var b = 3
console.log(a/b)//r,3333
console.log(a%b)//1

//Increamental 
// Post Incremental, Pre Incremental
var i =20;
console.log(++i)//pre incremental-এতে আগে ভ্যালু চেঞ্জ করে পরে প্রিন্ট করে
console.log(i++)//post incremental// এতে আগে প্রিন্ট করে পরে ভ্যালু চেঞ্জ করে
console.log(i)

var x =10
var y = 20
x += y //x=x+y
console.log(x)
x -= y //x=x-y
console.log(x)
x *= y//x=x*y
console.log(x)
x /= y//x=x/y
console.log(x)
x %=y //x=x%y
console.log(x)

console.log(x==b)//false
console.log(x!=b)//true
console.log(a>b)//false
console.log(a<b)//true
console.log(a>=b)//false//দুইটা কন্ডিশন false হলে false দেখাবে
console.log(a<=b)//true// যে কোন একটা কন্ডিশন true হলে true দেখাবে

var c = '50'
var d = 50
console.log(c==d)//true,কেননা এখানে implicit conversion হয়ে যাচ্ছে
console.log(c===d)//false
console.log(c!==d)//true


//Logical Operators
// && এটা দুইটা কন্ডিশন সত্য হতে হবে
// ।। দুইটার যে কোন একটি সত্য হতে হবে
//  ! পুরোটা মিথ্যা হবে
//Bitwise Operators
// &
//| -single vertical bar
// ~  -binary number এর নট করানোর জন্য ব্যবহার করা হয়
// ^  -xor  operation ঘটানোর জন্য ব্যবহার করা হয়
// <<  -left shift বা একবিট বামে সরানোর জন্য
// >>  -right shift বা একবিট ডানে সরানোর জন্য
console.log(typeof 10)