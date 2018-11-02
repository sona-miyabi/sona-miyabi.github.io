// | 是或者
// var string = '提高攻击力1000  提高防御力600';

// var regExp = /(提高)(.+?力)(\d+)/g;
// // 查找时候     \1     \2    \3
// // 替换时候     $1     $2    $3
// //                 +?是非贪婪匹配      1）提高|攻击力|1000   2）提高|防御力|600
// //                 + 贪婪匹配结果是，  1）提高|攻击力1000  提高防御力|600
// var result = string.replace(regExp, '$2$1$3');


// console.log(regExp.test(string));
// console.log(string);
// console.log(result);



var string = '<div>__div__p__<div>  <b>__div__p__</b>';
var result = string.replace(/(div|b)/g, 'p');
console.log(string);
console.log(result);
console.log(result==='<p>__div__p__</p>  <p>__div__p__</p>');