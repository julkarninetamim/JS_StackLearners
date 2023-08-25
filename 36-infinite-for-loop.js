for (; ;) {
    var rand = Math.floor(Math.random() * 10)
    if (rand===9){
        console.log("Congratulations! you have got iPhone 14 pro Max")
        break
    }else {
        console.log("You have got " + rand)
    }
}