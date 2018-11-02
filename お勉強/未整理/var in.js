var obj = {
	'고기' : 12000,
	'오이' : 4000,
	'감자' : 3000,
	'사과' : 4800,
	'포도' : 5000,
	'호랑이':NaN,
	'사람':Infinity
}

// 先前在循環教過for  for (var 圈圈＝0; 圈圈<10; 圈圈++){console.log(圈圈)} 圈圈為起始點
for (var name in obj) {

	name ;// 고기,오이,감자,사과,포도
	obj[name];// 12000,4000,...
	
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