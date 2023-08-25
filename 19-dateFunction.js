//date নিয়ে কাজ করতে হলে প্রথমে একটি ভ্যারিয়েবলের ভিতরে Date() অবজেক্টটি নিতে হবে
var date= new Date()
console.log(date)//2021-11-25T23:09:03.673Z
console.log(date.toDateString())//Fri Nov 26 2021
console.log(date.toTimeString())//05:10:19 GMT+0600 (Bangladesh Standard Time)
console.log(date.toLocaleDateString())//11/26/2021
console.log(date.toLocaleTimeString())//5:11:50 AM
console.log(date.toLocaleString())//11/26/2021, 5:11:50 AM
console.log(date.getFullYear())//2021
console.log(date.getMonth())//10 , নভেম্বর ১০ নং- কেননা এটি 0 থেকে গননা শুরু হয়
console.log(date.getDay())//1, Monday - 1, কেননা গণনা 0 থেকে শুরু হয় এবং ইংরেজী বার Sunday থেকে
console.log(date.getDate())//26
console.log(date.getHours())//5
console.log(date.getSeconds())//10

