function t(regExp, input) {
	console.log('-'.repeat(32) + '\n*正则表达式:' +regExp + '\t\t|\t\t字符串：' +input);
	var rs=[],r,g=regExp.global;
	while(r=regExp.exec(input)){
		rs.push(r);
		if(g===false) break;
	}
	console.log('* exec结果：',rs);
	console.log('* match结果：\t', input.match(regExp));
	console.log('* test结果：\t\t' +regExp.test(input));
}

module.exports=t;