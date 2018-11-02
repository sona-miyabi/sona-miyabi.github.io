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

	{
		let result = arr.reduce((r,e)=>{
			return { wage: r.wage+e.wage };
		});
		console.log('Q-06-1', result.wage);
	}

	{
		let result = arr.map(e=>e.wage).reduce((r,e)=>r+e);
		console.log('Q-06-2', result);
	}

	{
		let result = 0;
		arr.forEach(e=>result+=e.wage);
		console.log('Q-06-3', result);
	}

	{
		let result = 0;
		for(let e of arr){
			result += e.wage;
		}
		console.log('Q-06-4', result);
	}

	{
		let result = 0;
		for(let i=0,length=arr.length; i<length; i++)	{
			result+=arr[i].wage;
		}
		console.log('Q-06-5',result);
	}

}






/*
考题9：
	将字符串str按数组索引位置进行分割。

	结果：[ '1234', '56', '789', '0abcdef' ]
*/
{
	let str = '1234567890abcdef';
	let arr = [4,6,9];


	let result = [];
	arr.unshift(0);
	arr.push(str.length);
	arr.reduce((r,e)=>{
		// console.log(r,e);
		result.push(str.slice(r,e));
		return e;
	});

	console.log('Q-09', result);
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


	let result = arr.filter(e=>/^李/.test(e.name)).map(e=>e.name).sort();
	console.log('Q-10', result);
}


