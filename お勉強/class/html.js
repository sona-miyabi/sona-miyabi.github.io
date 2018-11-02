//var   s='字符串';
   // console.log(s.anchor('id'))

let s=' ABC \
bbb ';
console.log(s.trim())
console.log(s.trimRight());	// ' TA' 去掉右边空白
console.log(s.trimLeft());	// 'TA ' 去掉左边空白

function replacer2( p1, p2, p3) {
	return [p1, p2, p3].join(' - ');
}
var O= replacer2("好","是","多")
console.log(O)
console.log(typeof O)

function replacer(match, t1, t2, t3,offset,string) {
  console.log(match);
  console.log(offset);
  console.log(string);
  return [t1, t2, t3].join(' - ');
}

let newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
console.log(newString);  // abc - 12345 - #$*%

