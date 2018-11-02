/*
	开卷(期限：2018年8月6日 17:00)
	答题要求：
		整齐的书写格式
		用备注标记答题思路

*/


/*
考题1：d
	按要求分割如下字符串为数组，并且只保留符合条件的项。
	
	要求：按空白分割。只保留字符，数字和布林值去除。
	结果：['单词', '字', '句子', '语素']
*/
{
	let str = `单词  字	句子\n	语素	1	9   true123`;
  let c=str.split(/\s+/mg)
  let d=c.filter((e,i,a)=>{
          return  !e.match(/([0-9]+|true|false)/)   
  })
console.log('第1題',c,d)
}



/*
考题2：
	将一个物件的键和值分别存入一个数组中，键需要英文小写。

	要求：根据物件，将键另存为一个数组，将值另存为一个数组。键组内容全部小写。

	结果：
	['name','birthtime','memo']
	['物件',2018,'暂无']
*/
{

	let obj = {
		'Name':'物件',
		'BIRTHTIME':2018,
		'memo':'暂无'
	}
	

  let a=Object.keys(obj)
  let d=a.map((e,i,a)=>{
	return e.toLowerCase()
  })
  let b=Object.values(obj)
  console.log('第2題',d,b)

}
/*
考题3：
	将数组中每2个临接的内容拼凑成一个内容。

	要求：将数组的第1和第2项内容拼接，遍历到最后。
	结果：['project - 1', 'document - 2', 'termbase - 3', 'transmemory - 4']
*/
{
	let arr = ['project',1, 'document',2, 'termbase',3, 'transmemory', 4];


 
  let HeyArray = [];

  for (var i = 0; i < arr.length; i += 2) {
       HeyArray.push(arr[i]+'-'+arr[i+1])

  }

console.log('第3題',HeyArray)
}




/*
考题4：
	将数组内容仅保留唯一值。并进行降序排列。

	要求:额外多余的空格,需要处理一下.

	结果：
	['词语','句子','段落']
*/
{
	let arr = ['词语','词语','词语','句子','段落','段落 ']
  
  b=arr.map((e,i,a)=>{
	return e.replace(new RegExp(/\s/,'g'),"")
  })
  
  let set = new Set(b)
  arr=Array.from(set)
  console.log('第4題',arr)

}
  


/*
考题5:
	将年龄大为30岁的员工的名字单独列出一个数组

	结果：['张oo','王oo']
*/
{
	let arr = [
		{name:'张oo', age:36},
		{name:'李xx', age:23},
		{name:'王oo', age:39},
		{name:'金xx', age:28}
	];


var HeyArray = [];

for (var i = 0; i < arr.length; i++) {
     if (arr[i].age>30){
     HeyArray.push(Object.values(arr[i])[0])
     } else{	
     }
}

console.log('第5題',HeyArray)

}
{
	let arr = [1,2,3,4,5,6,7,8,9,0]
  let HeyArray = [];

  for (var i = 0; i < arr.length; i += 3) {
           return HeyArray.push([arr[i],arr[i+1],arr[i+2]])
           
 }
console.log(HeyArray)
}

