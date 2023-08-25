var a = 'I am'
var b = 'Julkarnine Tamim'
var c = a.concat(' ', b) //দুটি স্ট্রিং concatenation করার জন্য
console.log(c)//I am Julkarnine Tamim

var d = c.substr(5, 3)// String এর নির্দিষ্ট অংশ দেখানোর জন্য
console.log(d)//Jul
console.log(c.slice(2,6))// এখানে প্রথম আর্গুমেন্ট কত নম্বর ইন্ডেক্স থেকে এবং দ্বিতীয় আর্গুমেন্ট শেষ ইন্ডেক্স বুঝায়
console.log(c.length)//21
console.log(c.indexOf('Tamim'))//16
console.log(c.charAt(5))//J
console.log(c.startsWith('I'))//true এটি I am দিয়ে চেক করলেও true রিটার্ন করবে।
console.log(c.startsWith('am'))//false
console.log(c.endsWith('tamim'))//true
var name = 'Saiyed Ahmad'
console.log(name.toUpperCase())//SAIYED AHMAD
console.log(name.toLowerCase())//saiyed ahmad
var space=' I love javaScript'
console.log(space.trim())//I love javaScript, এখানে space trim হয়েছে

//Split function splits a string into array based on space,comma,regular expression
var str='I love coding'
console.log(str.split(' '))//[ 'I', 'love', 'coding' ]
var str2='Mango,Banana,Watermelon,Jackfruit'
console.log(str2.split(','))//[ 'Mango', 'Banana', 'Watermelon', 'Jackfruit' ]

