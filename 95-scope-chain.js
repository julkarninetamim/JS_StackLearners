var a = 11

function A() {
    var b = 12

    function B() {
        var c = 23
        console.log(c)
    }

    function C() {
        var d = 56
        console.log(d)
    }

    console.log(b)
    D()
    B()
    C()
}
function D(n) {
    return n + a

}

//Scope Chaining

//A-> a,b,A(),B(),C(),D()
//B-> a,b,c,B(),C(),D()
//C-> a,b,d,B(),C(),D()
//D-> a,n,A()



