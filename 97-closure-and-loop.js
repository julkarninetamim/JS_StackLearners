/*for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
        console.log(i)//এখানে i টি mutable variable হিসেবে আছে।
    }, 1000 * i)
}*/
//6
//6
//6
//6
//6
// এক্ষেত্রে প্রথমেই loop টি 5 বার এক্সিকিউট হয়ে যাচ্ছে এবং setTimeout() ফাংশনটি অপেক্ষা করছে এবং তাই
// প্রত্যেকবার 6 print করছে।

for (var i = 1; i <= 5; i++) {
    (function (n) {
        setTimeout(function () {
            console.log(n)//এখানে i টি mutable variable হিসেবে আছে।
        }, 1000 * n)
    })(i)

}