var obj1 = {
    a: 2,
    b: 4,
    c: 6
}

obj1.a = 20
obj1['b'] = 40
obj1.d = 80
console.log(obj1)//{ a: 20, b: 40, c: 6, d: 80 }

var prop='c'
console.log(obj1[prop])
console.log(obj1)//6



