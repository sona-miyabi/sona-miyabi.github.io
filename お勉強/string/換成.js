// let s='ABC';
// console.log(s.split(/B/))//數組轉string
// s.split('');	// ['A', 'B', 'C']
// s.split('B');	// ["A", "C"]
// 
// let a=['A','B','C'];
// a.join('-');	// 'A-B-D-C'//string轉數組
// console.log(a.join('-'))
// console.log(typeof a.join('-'))
// 
// console.log(s+'DE')
// console.log(s.concat('D','E'))
// 
// 

//65~91


// let chars='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// let length=chars.length;
// 
// function susu(){
  // return Math.floor(Math.random()*length);
// }
// 
// function str(){
  // return chars[susu()];
// }
// 
// function strs(len=4){
  // let s='';
  // while(len-->0){
    // s+=str();
  // }
    // return s;
// }
// 
// console.log(strs(4))
// 
// let  x
// 
// 
// 
// x=9
// console.log(x--)
// console.log(x)
// 
// 
// 
// x=9
// console.log(--x)
// console.log(x)
// 
// let i=4;
// 
// while(i-->0){
  // console.log(i)
// }
// 
// let a,b,c;
// 
// a = [1,'a',true,null,,,]
// console.log(a)		// [ 1, 's', true, null, <2 empty item> ]
// 
let a = [
	1,2,3,
	'a','b','c',
	true,false,
	null,undefined,NaN
];
a.forEach((element,index,arr)=>{
	// 参数a就是数组a, 输出内容过长, 这里省略
	// console.log('内容:%s, 位置:%i',e,i)
	// a[i]=e+i
	console.log('内容:',element,', 位置:',index,  a===arr)
})

console.log(a)



