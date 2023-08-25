/*
var val=0
while (val<10){
    console.log(" Julkarnine")
    val++
}
*/

var isTrue=true
while (isTrue){
    var rand=Math.ceil(Math.random()*10)
    if (rand===8){
        console.log("Chicken Dinner")
        isTrue=false
    }else {
        console.log("You have got "+rand)
    }
}

var num=0
while (num<50){
    num+=5
    console.log(num)
}