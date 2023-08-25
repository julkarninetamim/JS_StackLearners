var obj = {
    a: 10,
    b: [2, 3, 4, 5],
    c: 30,
    d: [20, 30, 40, 50]
}

console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))

let obj1 = {a: 7, b: 8};
let obj2 = {i: 4, j2: 5};
let obj3 = {p: 11, q: 22};
let obj4 = {x: 1, y: 2};

let obj_assign = Object.assign(obj1, obj2, obj3, obj4);
obj_assign.t = 50
console.log(obj_assign)//{ i: 4, j2: 5, p: 11, q: 22, x: 1, y: 2, t: 50 }
