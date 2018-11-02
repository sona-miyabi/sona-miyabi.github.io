/*
考题8：
	将数组内容按每3个分割，生成一个新的2纬数组。

	结果：[[1,2,3],[4,5,6],[7,8,9],[0]]
*/
{
	let arr = [1,2,3,4,5,6,7,8,9,0]

	Array.prototype.chunk = function f(){
	  let res = [], c;
	  for (let i = 0; i < arr.length; i += 3) {    
	       let c=arr.slice(i,i+3);
	       res.push(c)
	  }
	  return res;
  }
  console.log('第8題：', arr.chunk(3));
}
