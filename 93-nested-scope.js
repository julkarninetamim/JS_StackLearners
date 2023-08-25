var x = 50

function test() {
    var x = 40
    console.log(x)

    function nested() {
        var x = 30
        console.log(x)
    }

    nested()
}

console.log(x)

test()
//50
//40
//30



//function call এর variable print এর ক্ষেত্রে function তার নিজের scope এ ভ্যারিয়েবলের value খুঁজবে।
//নিজের scope এ না পেলে সে তার parent scope এ খুঁজবে, এবং সেখানেও না পেলে তারও parent scope এ খুঁজবে।
//এভাবে সে hierarchy মেনটেইন করে যেতে থাকবে সবশেষে global scope এ  value খুঁজবে এবং পেলে সেটি print করবে।

