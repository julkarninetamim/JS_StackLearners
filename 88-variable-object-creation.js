var a = 10
var b
console.log(a)
console.log(b)

b = 20
console.log(c)
var c = 50

//Output
//15
//undefined
//undefined

//Creational Phase

//line 1: a=undefined (a কে স্টোর করেছে, কিন্তু তার ভ্যালু undefined রেখেছে,
              // যেহেতু creational Phase a ভ্যালু এসাইন করেনা)
//line 2: b=undefined (b কে স্টোর করেছে, কিন্তু তার ভ্যালু undefined রেখেছে)
//line 3: এখানে যেহেতু execution code আছে তাই একে skip করে যাবে
//line 4: এখানেও যেহেতু execution code আছে তাই একে skip করে যাবে
//line 5: এখানে যেহেতু b এর ভ্যালু assign করা হয়েছে তাই একে skip করে যাবে
//line 6: এখানেও যেহেতু execution code আছে তাই একে skip করে যাবে
//line 7: c=undefined (c কে স্টোর করবে, কিন্তু তার ভ্যালু undefined রেখেছে,
               // যেহেতু creational Phase a ভ্যালু এসাইন করেনা)


//Executional Phase

//line 1: a=10 ( এক্ষেত্রে a এর value আপডেট করে 10 স্টোর করবে)
//line 2: b=undefined (যেহেতু এখানে variable ডিক্লেয়ারেশন, তাই এটি skip করবে)
//line 3: এখানে যেহেতু execution code এবং a এর ভ্যালু অলরেডি execution phase এ
          //10 স্টোর আছে তাই একে execute করে 10 প্রিন্ট করে দিবে
//line 4: এখানে যেহেতু execution code এবং b এর ভ্যালু অলরেডি creation phase এ
          //undefined স্টোর আছে তাই একে execute করে undefined প্রিন্ট করে দিবে
//line 5: b=20 ( এক্ষেত্রে a এর value আপডেট করে 20 স্টোর করবে)
//line 6: এখানে যেহেতু execution code এবং c এর ভ্যালু অলরেডি creation phase এ
          //undefined স্টোর আছে তাই একে execute করে undefined প্রিন্ট করে দিবে
//line 7: c=50 ( এক্ষেত্রে c এর value আপডেট করে 50 স্টোর করবে)



