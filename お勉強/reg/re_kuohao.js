var string = '提高攻击力1000  提高防御力600 提高閃避500';

var regExp = /(提高)(.+?)(\d+)/g;
var regExp2=/(提高)(.+力+?)(\d+)/g; // 1）提高|攻击力1000  提高防御力|600 提高閃避500
// (因貪婪在力之後所已包含至最後一個力)
// 替换时候     $1     $2    $3
//                 +?是非贪婪匹配      1）提高|攻击力|1000   2）提高|防御力|600  3）提高|閃避|500
//                 + 贪婪匹配结果是，  1）提高|攻击力1000  提高防御力|600

var result = string.replace(regExp, '$2$1$3');
var result2 = string.replace(regExp2, '$2$1$3');

console.log(regExp.test(string));
console.log(string);
console.log(result);
console.log(result2);

///  (a)\1\1\1/   与   /aaaa/     /a{4}/     相通
