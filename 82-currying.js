
//Currying Function to add multiple arguments
function currying(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}
console.log(currying(10)(20)(30))//60

//Simple Function to add multiple arguments
function add(a, b, c) {
    return a + b + c
}

console.log(add(10, 20, 30))//60

