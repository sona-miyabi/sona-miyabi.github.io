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
  let str = `单词  字	句子\n	语素	1	9  99999  true`;
  let c=str.split(/\s+/g);

  let regexp=/^([0-9]+|true|false)$/;
  let d=c.filter((e,i,a)=>{
    return  !regexp.test(e);
  });
  console.log('第1題',d)
}
/*
批复：正则需要更加严谨。
*/








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


  let res = arr.filter(function(e){
    return e.age>30;
  }).map(function(e){
    return e.name;
  });

  console.log(res);
}
/*
  也可以这样。
*/

