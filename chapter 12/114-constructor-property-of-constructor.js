var Rectangle = function (width, height) {
    this.width = width
    this.height = height
    this.draw = function () {
        console.log('I am a rectangle')
        this.printProperties()

    }
    this.printProperties = function () {
        console.log('My Width is ' + this.width)
        console.log('My Height is ' + this.height)
    }
}

var rect = new Rectangle()
rect.draw()

//JavaScript যে কোন ধরনের object এর constructor property রয়েছে হোক সেটি object literal, constructor or factory pattern
// ব্যবহার করে তৈরি করা object. এই constructor property টি হল একটি reference. যে function টি ব্যবহার করে object টি তৈরি করা
//হয়েছে সেই function এর একটি reference

//new keyword টা ইউজ না করলে কোন constructor call হয়না।

var str= new String('Julkarnine')
console.log(str)