var Rectangle = function (width, height) {
    this.width = width
    this.height = height
    this.draw = function () {
        console.log('I am a rectangle')
        this.printProperties()

    }
    this.printProperties = function () {
        console.log('My Width is ' + this.width)
        console.log('My Height is ' + this.height)
    }
}
function myNew(constructor) {
    var obj = {}//এখানে একটা empty object বানানো হয়েছে।
    Object.setPrototypeOf(obj, constructor.prototype)//prototype গুলোকে copy করা বা handle করা।
    //ফলে এখানে constructor এর সাথে যে prototype গুলো associate করা আছে তাদের empty object গুলো আছে তাদের set করে দিবে।
    var argsArray = Array.prototype.slice.apply(arguments)//আমরা arguments নামে একটি object কে function এর ভিতর
    // পেয়ে থাকি যেটি Array এর মত data structure কিন্তু এটি Array নয়।
    //JavaScript এর মধ্যে অনেক system আছে যার সাহায্যে একটা method কে একটা object এর সাথে খুব সহজে associate করে দেয়া যায়।
    // this বলতে window object এর সাথে associate হয়, কিন্তু নির্দিষ্ট কোন object এর সাথে associate হবে সেটি apply(), bind(),call()
    // ইত্যাদির মাধ্যমে বলে দেয়া যায়। এখানে apply(arguments) এর মধ্যে arguments object এর সকল data গুলো argsArray মধ্যে পেয়ে যাই।
    //ফলে argsArray একটি array এর সকল মেথড আমরা apply করতে পারব।
    constructor.apply(obj, argsArray.slice(1)) //এখন  ডাটাগুলোকে এই object এর সাথে associate করে দেয়া বা
    // object এর ভেতরে যে data গুলো বাইরে থেকে আসছে তাদের আমাদের empty object ,obj  এর সাথে apply করা এর দ্বিতীয় arguments এর
    // সাথে ( কেননা প্রথম আর্গুমেন্টে অলরেডি constructor আছে) slice() এর মধ্যে 2nd argument এর index number 1 পাঠানো হয়।
    return obj //এরপর এই object টিকে return করা হয়।
}
var rect = myNew(Rectangle,45,30)
rect.draw()




