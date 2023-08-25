var x = 50

function test() {
    var x = 30
    console.log(x)
}

test()

//এক্ষেত্রে x এর ভ্যালু print করার ক্ষেত্রে Global Scope এর x=50 থেকে function এর
// নিজের scope এর x=30 কে print করবে। যদি function এর নিজের scope এ x এর
// কোন value না পাওয়া যায় তাহলে Global Scope এর x=50 এই value print করবে।



