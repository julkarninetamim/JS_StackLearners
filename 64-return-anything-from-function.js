function sumData() {
    var sum = 0
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}

var total = sumData(2, 3, 4, 5, 6, 3)
console.log(total)//23

function info(name, email) {
    return {
        name: name,
        email: email
    }
}

var display = info('Julkarnine Tamim', 'julkarninetamim@gmail.com')

console.log(display)