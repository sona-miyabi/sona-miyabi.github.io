function Uu(){
	var d=new Date().getDay();
	switch (d){
  		case 0: return "今天是星期日";
 		case 1: return "今天是星期一";
  		case 2: return "今天是星期二";
        case 3: return "今天是星期三";
  		case 4: return "今天是星期四";
  		case 5: return "今天是星期五";
  		case 6: return"今天是星期六";
 	}
}

var r=Uu();
console.log(r)