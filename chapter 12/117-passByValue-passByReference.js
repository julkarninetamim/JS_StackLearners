//Primitive Data , যা জাভাস্ক্রিপ্ট প্রদান করে।
//অনেকগুলো primitive data মিলে একটি object হয়।

//pass by value vs pass by reference
//call by value vs call by reference

var n = 10

function change(n) {
    n = n + 100
    console.log(n)
}

change(n)//110
console.log(n)//10


var obj = {
    a: 10,
    b: 20
}

function changeMe(obj) {
    obj.a = obj.a + 100
    obj.b = obj.b + 100
    console.log(obj)
}

changeMe(obj)//{ a: 110, b: 120 }
console.log(obj) //{ a: 110, b: 120 }
