var person = {
    name: 'Julkarnine',
}


//console.log(person)
/*
for (var i in person) {
    console.log(i)
}
console.log(Object.keys(person))*
//console.log(Object.keys(person))

/*var descriptor = Object.getOwnPropertyDescriptor(person, 'name')
console.log(descriptor)*/

/*

let baseObj = Object.getPrototypeOf(person)
let propertyDescriptor = Object.getOwnPropertyDescriptor(baseObj, 'toString')
console.log(propertyDescriptor)*/

Object.defineProperty(person, 'name', {
    enumerable: false,
    configurable: false,
    writable: false,
    value: 'Saiyed Ahmad'
})