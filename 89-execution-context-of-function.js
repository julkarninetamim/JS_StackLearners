hello()
function hello() {console.log('I am Function')}
hello()

//Output

//I am Function
//I am Function

//Creational Phase

//Line 1: এখানে একটা ফাংশন call করা হয়েছে, তাই এই লাইন skip করবে।
//Line 2: এখানে ফাংশন define করা হয়েছে, তাই V8 engine এই ফাংশনের বিপরীতে একটা reference স্টোর করবে।
          //এর ফলে একে যে কোন জায়গা থেকে call করলেই এটি রান করবে যদি scope মেনটেইন হয়।
//Line 3: এখানে একটা ফাংশন call করা হয়েছে, তাই এই লাইন skip করবে।

//Executional Phase

//Line 1: এখানে hello() ফাংশন call করা হয়েছে, এবং এর reference টি creational phase স্টোর করা আছে,
          //এবং এর রেফারেন্সে গেলে function এর executable কোডগুলো থাকছে ফলে ফাংশনটি ঠিকঠাক রান করছে।
//Line 2: এখানে ফাংশন define করা হয়েছে, তাই এই লাইন skip করবে।
//Line 3: এখানে hello() ফাংশন call করা হয়েছে, এবং এর reference টি creational phase স্টোর করা আছে,
          //এবং এর রেফারেন্সে গেলে function এর executable কোডগুলো থাকছে ফলে ফাংশনটি ঠিকঠাক রান করছে।


