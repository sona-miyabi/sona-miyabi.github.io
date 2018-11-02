/*
考题8：
	将数组内容按每3个分割，生成一个新的2纬数组。

	结果：[[1,2,3],[4,5,6],[7,8,9],[0]]
*/
{
	let arr = [1,2,3,4,5,6,7,8,9,0]

	Array.prototype.chunk = function (chunk){
	  let res = [], c;
	  for (let i = 0; i < this.length; i += chunk) {    
	       let c=this.slice(i,i+chunk);
	       res.push(c)
	  }
	  return res;
  };

  console.log('第8題：', arr.chunk(3));
}


{
function f(){
  return 5;
}

let a = (f(), 9);

console.log(a)
console.log( '' || 'yes'  )
console.log( undefined || 'yes'  )
console.log( false || 'yes'  )
console.log( NaN || 'yes'  )

console.log( (1,2,3,'yes') )
console.log( (3,'4','yes') )
}