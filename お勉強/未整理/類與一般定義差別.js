var obj = {
	'고기' : 12000,
	'오이' : 4000,
	'감자' : 3000,
	'사과' : 4800,
	'포도' : 5000,
	'호랑이':'jd',
	'사람':'e'
}
//typeof obj[name] ==='number'
for (var name in obj) {

	name ;// 고기,오이,감자,사과,포도
	obj[name];// 12000,4000,...
	
	if (typeof obj[name] ==='number') {
		// console.log(name,  obj[name]);
	}
}
//也可以設另外一個obj2 嗎
// ------------------------------

function ouzen(arg,arg2){
this.name=arg; this.price=arg2
}

// var o;
this.o1=new ouzen('고기',12000)
this.o2=new ouzen('오이',4000)
this.o3=new ouzen('감자',3000)

// this['o1'] === o1

for(var i=1;  i<=3;  i++) {
	console.log(this['o' + i]['name']);

}

//如何讓類底下的值循環？