
// 完成以下正则表达式，得出相应结果。

var regExp = /a[1-4]/g;
var string = 'a1 a2\na3 a4';





result= string.match(regExp)
console.log(result);// ['a1', 'a2', 'a3', 'a4']

var regExp = /a[1|3]/g;
result= string.match(regExp)
console.log(result);// ['a1', 'a3']



var regExp = /\ba/gm;
result= string.replace(regExp, 'a-');
result= result.replace(/\n/, ' ');
console.log(result);// 'a-1 a-2 a-3 a-4'