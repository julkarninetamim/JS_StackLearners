// A variable with unknown value can store Null
var abc
var xyz= null

console.log(xyz)
console.log(abc)
// Null হল একটি স্পেশাল টাইপের ডাটা যেটি অবজেক্টের ক্ষেত্রেই বেশী ব্যবহৃত হয়।
//যেমন, কোন ভ্যারিয়বলে একটি অবজেক্ট থাকার বা আসার কথা ছিল, কিন্তু ইনিশিয়াল স্টেজে অবজেক্টটি নেই,
//পরবর্তীতে সার্ভার রেস্পন্সের মাধ্যমে অবজেক্টটি আসবে বা কোন একটা কিছুর মাধ্যমে অবজেক্ট ক্রিয়েট হবে, অথবা কোন ভ্যারিয়েবল ফিলআপ হবে কোন অবজেক্ট দ্বারা- এই ধরনের সিশুয়েশনগুলোতে Null ব্যবহার হয়।
//আর যদি কোন ভ্যালু এসাইন করা না হয় তখন সেটি undefined হয়ে যায়।