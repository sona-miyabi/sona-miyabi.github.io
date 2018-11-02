//Number 類
var random=Math.random();
console.log(random)

random=30+random*70//Math.random 內置參數是0～1的小數(例 取30至100的隨機整數)
console.log(random)


var n= Math.round(3.45 )//四捨五入
var n= Math.ceil(3.45 )//無條件進位
var n= Math.floor(3.45 )//無條件去小數
var n= Math.floor(random )//無條件去小數

console.log(n)


function getRandom(min,max){
	var random=Math.random();
	random=min+random*max//random 內置參數是0～1的小數(例 取30至100的隨機整數)
	random=Math.floor(random )
	return random;
}
console.log(getRandom(3,500));

var 中= Math.PI 
console.log(中)
//const  類似var 但是常數所以值無法變動更改
