// 1）字符串切为数组。
// String.prototype.split

// “1,2,3" .split(',')      可获得数组 [1,2,3]




// 2）数组拼接为字符串。
// Array.prototype.join

// [1,2,3] .join(',')       可获得字符串 ”1,2,3"

var myString = "Hello 1 word- Sentence-number 2.";
var splits = myString.split('-');

console.log(splits);

console.log(splits.join("★"))


