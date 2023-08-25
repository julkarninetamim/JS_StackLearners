var p = 'I am out of the function'

function x() {
    var p = 'I am scope function'

    function y() {
        var p = 'I am inner function'
        console.log(p)
    }

    console.log(p)
    y()
}

x()

function test(n) {
    function a() {
        return (n % 3 === 0)
    }

    function b() {
        return (n % 5 === 0)
    }

    if (a() && b()) {
        console.log(n + ' is divided bt both number')
    } else {
        console.log(n + ' is not a valid number')
    }
}
test(30)
