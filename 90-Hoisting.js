//Hoisting হল কোন ভ্যারিয়েবল কোথায় ডিক্লেয়ার হবে, কখন তার ভ্যালু assign হবে,Creational Phase এ
//তার ভ্যালু কি থাকবে এবং executional Phase এ তার value কিভাবে পাবে কিংবা একটা function কিভাবে
//কোথায় এক্সেস পাবে এসব কিছুই হল Hoisting এর কাজ

var a = 100
newPrint(a)//Error

print(10)//10

var newPrint = print
newPrint(45)//45

function print(a) {
    console.log(a)
}

print(a)//100

//Creational Phase

//line 1: a=undefined (a কে স্টোর করেছে, কিন্তু তার ভ্যালু undefined রেখেছে।
          // যেহেতু creational Phase a ভ্যালু এসাইন করেনা)
//Line 2: যেহেতু newPrint(a) একটি function call, তাই এই লাইন skip করবে।
//Line 3: যেহেতু print(10) একটি function call, তাই এই লাইন skip করবে।
//line 4: newPrint=undefined (যেহেতু variable ডিক্লেয়ার করেছে, তাই ভ্যালু undefined রেখেছে)
//Line 5: print()=ref (যেহেতু function print(a){} একটি function definition, তাই এই লাইন skip করবে।
         // তবে function টির একটি reference স্টোর করবে।)
//Line 6: যেহেতু print(a) একটি function call, তাই এই লাইন skip করবে।

//Executional Phase

//Line 1: a=100 ( এক্ষেত্রে a এর value আপডেট করে 100 স্টোর করবে)
//line 2: newPrint =undefined (যেহেতু, undefined ভ্যারিয়েবল call হতে পারেনা তাই Error আসবে। এখন একে comment করি
//Line 3: print(10) এক্ষেত্রে যেহেতু function print() এর একটি reference তৈরি হয়ে আছে Creational Phase এ
         // তাই এটি 10  আউটপুট দিবে।
//Line 4: এখন newPrint এর value টি print() ফাংশনের reference দিয়ে আপডেট হয়ে যাবে।
//Line 5: newPrint(45) এক্ষেত্রে যেহেতু  print() এর  reference টি newPrint এ আপডেট হয়ে আছে পূর্ববর্তী Line এ
         // তাই newPrint(45) এক্ষেত্রে এটি 45  আউটপুট দিবে।
//line 6: এখানে যেহেতু function definition আছে তাই একে skip করে যাবে
//Line 7: print(a) এক্ষেত্রে যেহেতু function print() এর একটি reference তৈরি হয়ে আছে a এর ভ্যালু 100 আপডেট হয়ে আছে
         // তাই এটি print(100) ফাংশন call হয়ে 100  আউটপুট দিবে।