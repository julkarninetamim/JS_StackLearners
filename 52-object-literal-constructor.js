//Object Literal ওয়েতে Object ডিক্লেয়ার
//01
var obj1 = {}
console.log(typeof obj1)//object

//02
//Object এর element গুলোকে dot notation দিয়ে  ডিক্লেয়ার করতে পারি
var obj2 = {}
obj2.x = 1
obj2.y = 2
obj2.z = 3
console.log(obj2)//{ x: 1, y: 2, z: 3 }

//03
//Object এর element গুলোকে কোলন (:) notation দিয়ে ডিক্লেয়ার করতে পারি
var obj3 = {
    a: 10,
    b: 20,
    c: 30
}
console.log(obj3)//{ a: 10, b: 20, c: 30 }
// Dot notation দিয়ে Object এর ভিতর নতুন কোন ডাটা এন্ট্রি অথবা আপডেট করতে পারি।
//আর এই পদ্বতিকে বলা হয় Object literal
obj3.c = 50
obj3.d = 40
console.log(obj3)//{ a: 10, b: 20, c: 50, d: 40 }

//Object Constructor
var obj4 = Object()
obj4.a = 5
obj4.b = 6
console.log(obj4)//{ a: 5, b: 6 }


//Object Oriental ওয়েতে object ডিক্লেয়ার
var obj5 = new Object()
obj5.p = 3
obj5.q = 4
obj5.r = 5
obj5['s'] = 6
console.log(obj5)//{ p: 3, q: 4, r: 5 }





