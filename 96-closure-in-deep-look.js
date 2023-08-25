function test() {
    var msg = 'I am learning lexical Scope and Closure'

    function sayMsg() {
        console.log(msg)
    }

    sayMsg()
}

test()

function test2() {
    var msg = 'I am learning lexical scope and closure'
    return function () {
        console.log(msg)
    }
}

var sayMsg = test2()
sayMsg()

