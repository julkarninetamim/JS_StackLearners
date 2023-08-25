var arr = [
    [77, 42, 83, 67, 60],
    [67, 55, 65, 43, 75],
    [73, 83, 78, 75, 34],
]

//console.log(arr[0][0])
//console.log(arr[1][1])

for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) {
        console.log('Element of [' + i + '][' + j + '] index: ' + arr[i][j])
    }
}