class Parent {
	get p() {
		return '我是Parent的伪属性';
	}
}


// extends 继承关键字
// 意思是Child类继承了Parent类的属性和方法。
// Child的实例，可以使用Parent的内容。
class Child extends Parent {
	get c() {
		return '我是Child的伪属性';
	}

	get cp(){
		;
		return '我是Child的伪属性，但我可以用到父级的内容。例如：'+super.p;
	}
}



var c = new Child();

console.log(c.p);// 继承了父级的伪属性
console.log(c.c);// 自身的伪属性
console.log(c.cp);// 自身的伪属性


