/*
考题4：
已知一个数组，让数组中的每个内容都加前缀"*"。
例如：
执行函数后 ['a','b','c'] 得出 ['*a','*b','*c']
*/
{
	let arr = ['a','b','c'];

	function f(){
		return arr.map(
			function(i){
			return '*'+i;
		})
	}

	console.log(f())
}
{
	let arr = ['1','2','3'];
 // var s= arr.map(x => '*'+x )
 var s= arr.map(function f(e,i,a){ return '*'+e;})
 console.log(s)
}

function f(name, item){

}