function add(a,b){
    return a+b
}
var sum = add(10, 15)
console.log(sum)

var arr=[]
arr.push(add)
console.log(arr[0](10,20))


var obj={
    sum:add,
        x:100,
        y:200
}
console.log(obj.sum(2,3))