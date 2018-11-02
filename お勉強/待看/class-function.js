class F{

	// function F(){}
	constructor(id){
		this.id = id===undefined?Math.round(Math.random()*100):id;
	}

	// F.prototype.say = function(){}
	say(){
		console.log(`我的ID为${this.id}。`);
	}

}

F.prototype.say2=function (){
	console.log(`我是机器人${this.id}。`);
};


let f=new F();
f.say();
f.say2();

// console.log(Object.getOwnPropertyDescriptors(F.prototype));
// console.log(f.__proto__===F.prototype)

