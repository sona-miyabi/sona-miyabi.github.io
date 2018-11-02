// var str='ajisjifb ajidbjsfiosjb adjfjoisofb'
// console.log(str.match(/a.+?b(?=\s )?/gm))// .+?非貪婪模式
// //(?= )? (\S)?
// console.log(/^a/.exec('adasdf'))


var str = "Visit W3School W3School W3School"; 
var patt = new RegExp("W3School","g");//     /W3School/g  !=不等於 !==不全等     a!==b
var result;

while ((result = patt.exec(str)) )  {
console.log(result);
console.log(patt.lastIndex);
  }


// var  i=0
// while(true){
// 	console.log(i++)
// }

//for(var i=0;  true; i++){
//	console.log(i)
//}