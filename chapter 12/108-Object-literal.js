var rect = {
    width: 100,
    height: 50,
    draw: function () {
        console.log('I am a rectangle')
        console.log('My Width is ' + this.width)
        console.log('My Height is ' + rect.height)
    }
}

rect.draw()
rect.width = 80
rect.draw()

//Output
//I am a rectangle
// My Width is 100
// My Height is 50
// I am a rectangle
// My Width is 80
// My Height is 50



