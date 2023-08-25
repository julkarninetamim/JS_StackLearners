function a() {
    b()
    console.log('I am a function A')
}

function b() {
    d()
    console.log('I am a function B')
}

function c() {
    console.log('I am a function C')
}

function d() {
    c()
    console.log('I am a function D')
}

var x = 100
a()
console.log('I am a Global')

//Execution Context Stack of this program

//Execution of C Function Context
//Execution of D Function Context
//Execution of B Function Context
//Execution of A Function Context
//Execution of Global Context


