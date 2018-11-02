



function C (name='object-C'){
	this.name = name;
}


let c=new C('物件1');

try{
	c.sayName();
}catch(error){
	console.log('[error]', error.message);
}



C.prototype.sayName = function(){
	console.log(`我是"${this.name}"。`);
}



c.sayName();
