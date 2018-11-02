var trytest = [
  {name:'老习',position:'中国主席'},
  {name:'老文',position:'韩国总统'},
  {name:'老安',position:'日本总理'},
];

console.log(trytest.length)


var str='';
for(var i=0;  i<3;  i++){  if(i===2){
	str =str+trytest[i].name+'是'+trytest[i].position+'。'}else{
		str =str+trytest[i].name+'是'+trytest[i].position+'。'+'\n'
	}
}
	


var target = `老习是中国主席。
老文是韩国总统。
老安是日本总理。`;
console.log(str === target);// true
console.log(str);// true


