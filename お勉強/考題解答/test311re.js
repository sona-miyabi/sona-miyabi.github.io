// 3）定义3个变量数值实例x、y、z，变量值随意。
var x=1, y=2, z=3;

console.log(x, y, z);// 1 2 3




console.log('----------------------------------------')
// 4）定义一个函数f，运行该函数时，返回该函数的参数个数。
function f(){
	return arguments;
}


console.log( f() );// 0
console.log( f('a','b','c') );// 3
console.log( f(1, {}, [], true, false, undefined) );// 6




console.log('----------------------------------------')
/*
5）写出一个循环命令，令其输出结果如下。
	start-1
	row-3
	row-5
	row-7
	end-9
*/
var prefix;
for(var i=1;  i<10;  i=i+2) {

	if(i===1) {
		prefix = 'start-';
	}else if(i===9){
		prefix = 'end-';
	}else{
		prefix = 'row-';
	}

	console.log(prefix + i);

}

