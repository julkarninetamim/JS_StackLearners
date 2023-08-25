abc() //এটি ঠিকভাবে 'I am function' প্রিন্ট করবে, কেননা Executional Phase এ তৈরি হওয়া
      // ফাংশনের reference থাকায় এটি function কে call করতে পারবে।

function abc() {
    console.log('I am function')
}

newAbc()//এক্ষেত্রে এটি Error দেখাবে, কেননা newAbc এর ভ্যালু Creational Phase এ
        //newAbc=undefined স্টোর হয়েছে এবং undefined কে function হিসেবে কল করা যায়না।
var newAbc = function () {
    console.log('I am new ABC Function')
}
newAbc() // এক্ষেত্রে এটি 'I am new ABC Function' print করবে, কেননা Execution Phase এ
         //পূর্ববর্তী Line এ ফাংশনের reference টি newAbc variable এ স্টোর হবে।


//Creation Phase
//abc=ref
//newAbc=undefined




