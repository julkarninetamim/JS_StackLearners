var addition = function (a, b) {
    return a + b
}
console.log(addition(2, 3))//5

let sumNum = addition
console.log(sumNum(11, 12))//23

setTimeout(function (){
    console.log('I will come after 5 second')
},5000,'')


