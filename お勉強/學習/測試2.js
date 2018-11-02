function myEE(name){
	if (/[A-z]/g.test(name)){ 
		return '不可輸入英文'
	}else { 
		return '成功輸入'
	}};


console.log(myEE('好喔'))