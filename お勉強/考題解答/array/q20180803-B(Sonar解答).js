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

  var n1 = Math.round(Math.random()*100); 
	function f(){
		let i;
		if(n1<a[0]){ 
			  i=0
		    }else if(n1>a[0],n1<(a[0]+a[1])){
        i=1
		    }else
		    {
        i=2
		    }
    let item=items[i];
    


		return item+' 顯示機率:'+odds[i] 
	}
	// console.log('第7題：',f())

	let total = {}, i=1000;

	while(i-->0){
		let res = f();
		if(total[res]===undefined) total[res]=1;
		else total[res]++;
	}
	console.log(total)
}// 方法不完美 僅救急用
