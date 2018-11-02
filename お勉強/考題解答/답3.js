var obj = {
	'고기' : 12000,
	'오이' : 4000,
	'감자' : 3000,
	'사과' : 4800,
	'포도' : 5000,
	'호랑이':NaN,
	'사람':Infinity
}


for (var name in obj) {

	var key   = name ;// 고기,오이,감자,사과,포도
	var value = obj[name];// 12000,4000,...
	
	if (obj[name]<Infinity) {
		console.log(name,  obj[name]);
	}
}


/*
고기 12000
오이 4000
감자 3000
사과 4800
포도 5000
*/


console.log('------------');


var descriptior = Object.getOwnPropertyDescriptor(obj,'고기');
console.log(descriptior);
/*
{ value: 12000,
  writable: true,
  enumerable: true,
  configurable: true }
*/
// enumerable  决定是否可以被for遍历到，这里因为是true，所以可以被for遍历。
