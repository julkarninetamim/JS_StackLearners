var str = 'Quick Brown Fox Jump'
var str2=str.charAt(20)
console.log(str.charAt(12))//F
console.log(str.charAt(20))// it will print empty string
console.log(typeof str2)//string

//charAt() ফাংশনের সাহায্যে ট্রিক্স খাটিয়ে স্ট্রিংয়ের ল্যাংথ বের করা
var length = 0
while (true) {
    if (str.charAt(length) === '') {
        break
    } else {
        length++
    }
}
console.log(length)

