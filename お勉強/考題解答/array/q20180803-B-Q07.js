/*
考题7：
	有个道具列表，而且也有概率表。
	完成函数f()，每次运行将按概率得出一个道具。
*/
{
	let items = ['装甲','护盾','战车'];
	let odds  = ['40%', '50%', '10%'];
  let a=odds.map((e)=>{
  	return parseInt(e)
  })
  console.log('转为数字：', a);

  let s=a.reduce((r,e)=>r+e);
  console.log('概率合计：', s);

  let a2=[];
  for(let i=0,len=a.length; i<len; i++){
  	a2[i] = (a2[i-1]||0)+a[i];
  };
  console.log('转为概率分界：', a2);

  a2 = a2.map(e=>e/s);
  console.log('分界转为小数：', a2);


  function rateIndex(n) {
  	let index=-1;
  	a2.some((e,i)=>{
  		let b = n<e;
  		index = i;
  		return b; 
  	})
  	return index;
  }

  let testCount=10;
  while(testCount-->0) {
  	let random = Math.random();
  	let index  = rateIndex(random);
  	let item   = items[index];
  	console.log(index, random, item);
  }

  function f(){
  	let random = Math.random();
  	let index  = rateIndex(random);
  	let item   = items[index];
  	return item;
  }

  testCount = 1000;
  let totalResult = {};
	while(testCount-->0){
		let item = f();
		if(totalResult[item]===undefined) totalResult[item]=1;
		else totalResult[item]++;
	}
	console.log(`执行${testCount}次结果为：`, totalResult)
}// 方法不完美 僅救急用


{
let arr = [1,10,100,1000];

let res = arr.reduce( function( r, e, i, a) {
  console.log(r,1,e);
  return r+1;
},  90000);

console.log(res);
}