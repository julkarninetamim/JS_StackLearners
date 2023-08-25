
function mixin(target, ...sources) {
    Object.assign(target, ...sources)
}

var canWalk = {
    walk: function () {
        console.log('Walking..')
    }
}
var canEat = {
    eat: function () {
        console.log('Eating..')
    }
}
var canSwim = {
    swim: function () {
        console.log('Swimming..')
    }
}

function Person(name) {
    this.name = name
}

//Object.assign(Person.prototype, canWalk, canEat)
mixin(Person.prototype, canWalk, canEat)

var person = new Person('Julkarnine')
console.log(person)

function Fish(name) {
    this.name = name
}

mixin(Fish.prototype, canEat, canSwim)
var fish= new Fish('Gold Fish')
console.log(fish)
