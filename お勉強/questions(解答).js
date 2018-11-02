/*
考题1： 请完成函数f的定义。

功能：让数组反转元素。
例如：已知 [1,2,3,4,5,6,7]。得出 [7,6,5,4,3,2,1]
*/

let arr = [1,2,3,4,5,6,7];
let res;

function f(){
	   res=arr.reverse();
}

f();
console.log('第1題：',res);



/*
考题2：
功能：从数组中找出指定内容，并从数组中排除掉。

*/
var hey=['ho','hi','ha']
hey.splice(1,1); 
console.log('第2題：',hey)

/*
考题3：
已知一个句子。'熊猫先生，熊猫宝宝。'
有个替换列表。
运行函数后，可以将熊猫改为小猫，先生改为老师，宝宝改为学生。
*/
{
	let str = '熊猫先生，熊猫宝宝。';
	let list = [
		['熊猫','小猫'],
		['先生','老师'],
		['宝宝','学生']
	];

	function f(){
	   var c=str;//寫在外面取一次不循環
     for(var i=0;i<3;i++){
	   var a=list[i][0]; 
	   var b=list[i][1];
     c=c.replace(new RegExp(a,'g'),b);//用正則搜尋數組
	    // c=c.replaceAll(a,b);
	
     }	
    return c;
	}
}

console.log('第3題：',f())
/*
考题4：
已知一个数组，让数组中的每个内容都加前缀"*"。
例如：
执行函数后 ['a','b','c'] 得出 ['*a','*b','*c']
*/
{
	let arr = ['a','b','c'];

	function f(){
	var arrs="*"+arr.join("-*")
	var sarr=arrs.split("-")
	return sarr

  }
console.log('第4題：',f())
}


/*
考题5：
过滤出只符合条件的内容。
数值范围5~8，15~18的数值。
*/
{
	let arr = [1,3,7,9,11,13,17,19];

function f(){
	let res=[];
	for(var i=0;i<arr.length;i++){
	var a=arr[i];
	 if (4<a&&a<9||(14<a&&a<19)){ 
	 	res.push(a)
	 }else{ continue

	}
	}
	return res
}
console.log('第5題：',f())
}//不知道undefined要怎樣弄不見
{	let arr = [1,3,7,9,11,13,17,19];
	let b=arr.filter((e,i,a)=>{return 4<e&&e<9||(14<e&&e<19)}
)
	console.log('第5題2解 .filter()',b)
}

/*
考题6：
将数学中的(x,y)坐标具体数值, 保存到数组中。
x取值范围为0~10的整数。
曲线方程式 y = x^2 + 2x + 1
*/
{
	function f(){
		var s=new Array
		for(x=0;x<11;x++){
			var	 y = (x*x + 2*x + 1)
			var arr=[{x,y}];
			var s= s.concat(arr)
		}
		return s
	}

	console.log('第6題：',f())
}


/*
考题7：
有个数组，去掉第一个内容和最后一个内容。

*/
{
	let arr = [99, 1,2,3, 99];
	// 得出 [1,2,3]

arr.pop();
arr.shift()
console.log('第7題：',arr)

}


/*
考题8：
替换掉第3个内容为'*'
*/
{

	let arr = [ 'a', 'b', '替换我', 'd', 'e'];

arr.splice(2,1,'*')
console.log('第8題：',arr)
}


/*
考题9：
求数组内容之和。
*/
{
	let arr = [1,2,3,4,5,6,7,8,9,10];
	function f(){
		var s=0
for(var i=0;i<arr.length;i++){
s+=arr[i]
	};
	return s
}
console.log('第9題：',f())
}


/*
考题10：
让数组内容随机排列。每次运行都会有不同的顺序。
*/
{
	let arr = [1,2,3,4,5,6,7,8,9,10];
function randomSort(a, b) { 
	let c=a<b? 1: -1;
	console.log(a,b,c)
	return c;
	// return Math.random() > 0.5 ? -1 : 1; 
}
arr.sort(randomSort);
console.log('第10題：',arr)
}

//最後一題網路看的 但不是很懂


()=>
params => ({foo: params})

function  (params){
	return {foo:params};
}