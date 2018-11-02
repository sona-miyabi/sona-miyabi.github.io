var s= `uuuu44444444`
console.log(s.length)

var str="Hello world!"
console.log(str.charAt(2))//返回該字串第X個字符


var str1="Hello "
var str2="world!"
console.log(str1.concat(str2))//連接字串 但是使用 " + " 运算符来进行字符串的连接运算通常会更简便一些。

console.log('abc, ba.'.indexOf('.'));// 0 找第一個
console.log('abcba'.lastIndexOf('a'));// 4 找最後一個
console.log('abc, ba.'.search('.'));//

var str="Visit Microsoft!"
console.log(str.replace(/Microsoft/, "W3School"))