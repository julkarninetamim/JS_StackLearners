//array এর মধ্যে যতগুলো element আছে তাদের সবগুলোকে লুপ আকারে চালনা করাকে বা টাচ করে যাওয়াকে traversing বলে।

var arr = [4, 5, 3, 12, 6, 7, 9, 8]

for (var i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

var num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (i = 0; i < num.length; i++) {
    num[i] = num[i] + 2
}

console.log(num)


var total = [10, 20, 30, 40, 50, 60, 70, 80, 90]
var sum = 0
for (var i = 0; i < total.length; i++) {
    sum += total[i]
}
console.log(sum)