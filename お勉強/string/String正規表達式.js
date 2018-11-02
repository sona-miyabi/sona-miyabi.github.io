// var r=/^A/i//是否是以A開頭
// var z=/f+\-\d+/i//是否是以d結尾


// var x=/\^/i//是否是以^開頭 特殊符號時須在前面加\
// var y= new RegExp('\\^')
// var s="adf^sfsfff-1245413"
// console.log(r.exec(s))// 返回詳細內容
// console.log(r.test(s))//測試 返回對錯
// console.log(x.test(s))//測試 返回對錯
// console.log(y.test(s))//測試 返回對錯
// console.log(z.test(s))//測試 返回對錯

function test(str,r){
	 console.log(r.exec(str), r.test(str), str.match(r))
	//console.log(str.match(r))
}

test('apple-123\nb-2\nc-3', /\w/g)// 忽略數學符號？英文數字下滑線
test('apple-123\nb-2\nc-3', /./g)// .與\w的差別 顯示不出單詞 只有全域後面不一樣 http://www.w3school.com.cn/jsref/jsref_regexp_wordchar.asp
test('apple-123\nb-2\nc-3', /\D/g)// 僅忽略數字

test('apple-123\nb-2\nc-3', /\w+/g)// 
test('apple-123\nb-2\nc-3', /.+/g)//

test('a-1\nb-2\nc-3', /-\d$/gm)
//---------------------

var hao='red apple '
var ta=/^a/
var wo= /\ba/
console.log(ta.exec(hao))
console.log(wo.exec(hao))//得到的東西其實與^相同 只要為邊界即可
