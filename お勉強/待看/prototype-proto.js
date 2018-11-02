function F(id){
	this.id =      (id===undefined) ?   Math.round(Math.random()*100)    : id;
}

F.prototype.say=function(){
	console.log(`我的ID为${this.id}。`);
}


let f=new F('志强');
f.say();

console.log(F.prototype === f.__proto__ );


// 这使F的prototype拥有了say和say2函数，所有此刻开始，所有new F都将拥有该功能。
f.__proto__.say2 = function(){
	console.log(`我是机器人${this.id}。`);
}


f.say2();



let f2=new F('特警X');
f2.say2();
