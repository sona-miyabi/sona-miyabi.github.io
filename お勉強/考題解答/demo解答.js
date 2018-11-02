// 考题：完成它
// 1) 写出一个函数。参数为半径r。得出该圆的面积。
// 2）面积四舍五入到小数点4位。
function area(r){
	return ;
}



// 方案1
function area(r){
	return parseFloat( ( Math.PI * Math.pow(r,2) ).toFixed(4) );
}
// 解析方案1
function area(r){
	r = Math.pow(r, 2); // r现在是 r的2次方
	r = Math.PI * r;    // r现在是 圆的面积
	r = r.toFixed(4);   // r现在是 四舍五入到小数点4位，但它是字符串！
	r = parseFloat(r);    // r现在是数值
	return r;
}


// 方案2
function area(r){
	return Math.round( Math.PI * r * r * 10000 ) / 10000;
}


// 达到运行如下结果为 true
var r=area(2);
console.log( r, r === 12.5664 );