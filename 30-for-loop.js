for (i = 0; i < 1000; i += 50) {
    console.log(i + " This is Julkarnine")
}
for (i = 100; i < 1000; i += 100) {
    console.log(i + " This is for loop statements")
}

for (i = 1; i < 30; i++) {
    if (i % 2 === 0) {
        console.log(i + " Even Number")
    } else if (i % 2 === 1) {
        console.log(i + " Odd Number")
    }
}

var total = 0;
for (i = 1; i <= 20; i++) {
    if (i % 2 === 1) {
        console.log(total + "+" + i + "=" + (total + i))
        total += i
    }
}
//0+1=1
// 1+3=4
// 4+5=9
// 9+7=16
// 16+9=25
// 25+11=36
// 36+13=49
// 49+15=64
// 64+17=81
// 81+19=100

