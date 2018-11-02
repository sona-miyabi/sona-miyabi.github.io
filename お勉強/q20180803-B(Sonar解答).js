/*
	开卷(期限：2018年8月6日 17:00)
	答题要求：
		整齐的书写格式
		用备注标记答题思路

*/


/*
考题6：
	老板想知道一个月要给所有员工多少工资，将总投入的工资算出来。

*/
{
	let arr = [
		{name:'张oo', age:36, wage:5256},
		{name:'李xx', age:23, wage:2234},
		{name:'王oo', age:39, wage:4215},
		{name:'金xx', age:28, wage:3735}
	];
  let sum =0
	for (var i = 0; i < arr.length; i++) {
     sum+=arr[i].wage
  }
  console.log('第6題：',sum)

}



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

  var n1 =Math.round(Math.random()*100); 
	function f(){
		let i;
		if(n1<=a[0]){ 
			  i=0
		    }else if(n1>a[0],n1<=(a[0]+a[1])){
        i=1
		    }else
		    {
        i=2
		    }
    let item=items[i];
    


		return item+' 顯示機率:'+odds[i] 
	}
	console.log('第7題：',f())
}// 方法不完美 僅救急用



/*
考题8：
	将数组内容按每3个分割，生成一个新的2纬数组。

	结果：[[1,2,3],[4,5,6],[7,8,9],[0]]
*/
{
	let arr = [1,2,3,4,5,6,7,8,9,0]
  let HeyArray = [];
  for (let i = 0; i < arr.length; i += 3) {    
       let barr=[arr[i],arr[i+1],arr[i+2]]
       let carr=barr.filter((e)=>{
       	return !(e===undefined)
       })
       HeyArray.push(carr)

  }   
  
  console.log('第8題：',HeyArray)
}




/*
考题9：
	将字符串str按数组索引位置进行分割。

	结果：[ '1234', '56', '789', '0abcdef' ]
*/
{
	let str = '1234567890abcdef';
	let arr = [4,6,9]; // 0,4,6,9,length   slice(start, end)
  function f(){
  	   let a,b,s,hey
  	   let res= []
  	   for (let i = 0; i < arr.length+1; i++) { 
             if(i==0){
              a=0
             }
             else{
             	 a=arr[i-1]
             }
             s=str.slice(a,arr[i])
             res.push(s)
      }
  return hey
  }

  console.log('第9題：',f())
}


/*
考题10:
	将李氏名单列出来。

	结果：['李1','李2','李3']
*/
{
	let arr = [
		{name:'高xx', age:36},
		{name:'李3', age:23},
		{name:'张xx', age:36},
		{name:'李1', age:39},
		{name:'王xx', age:36},
		{name:'李2', age:28},
		{name:'陈xx', age:28}
	];

var HeyArray = [];

  for (var i = 0; i < arr.length; i++) {
     if (/^李/.test(arr[i].name)){
     HeyArray.push(Object.values(arr[i])[0])
     } else{	
     }
   }
   HeyArray.sort()
console.log('第10題：',HeyArray)
}


