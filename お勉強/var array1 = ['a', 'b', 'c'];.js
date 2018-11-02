var fruits = ['Apple', 'Banana'];
fruits.forEach(function (wichi, name, a) {
    console.log(wichi, name, );
});
// Apple 0
// Banana 1
// 第一個一定是屬性內容 第二個一定是屬性位置（index） 第三個一定會是數組 與命名無關
// expected output: "a"
// expected output: "b"
// expected output: "c"

fruits.push('Mango');
// ["Strawberry", "Banana", "Mango"]

console.log(fruits.indexOf('Banana'));
// 1