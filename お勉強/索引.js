//캡처 屬性 陣列
// 3-7 循環
for (var i =0; i<10; i++){console.log(i)}
與下方相同



var i = 0
while(i<10){
	console.log(i)
	i++
}

// 3-8 function 筆記總和
圈圈＝任何字
parseInt(name)
數字轉換

o= object


funtion 圈圈(arg1,arg2,ar3){return arg1+arg2運算方式}

圈圈(1,2,3)即可得到運算結果

for (var 圈圈＝0; 圈圈<10; 圈圈++){console.log(圈圈)}
圈圈為起始點

var 圈圈＝{X:1, Y:2} 大括弧下為 圈圈.X與圈圈的Y的定義
刪除時用delete 圈圈.X


var 圈圈＝[1,2,3,4] 定義數列(也可放已定義數字的英文字母)
圈圈[0] 出現數列第一個位置的數字

var 圈圈＝'1234'
圈圈[0] 出現數列第一個位置的字串

小括弧 數學運算
函數

中括號 arry
對象屬性

大括弧 代碼區域（定義物件）
//3-9三元法if
//三元法
//a?b:c
//if (a){b} else {c}

// console.log (2>1?true:false)
// console.log (2<1?true:false)

// var d
// if (2>1){
// 	d=100
// } else {
// 	d=200
// } 

// 條件?對的時候:錯的時候
// var d =2>1?100:200

var d =2>1
if (d){d=100 
} else {d=200 
}
console.error (d)


console.error (false ?1:(false?2:(false?5:2)))

// 3-13 function 類
function Bi(name){
this.name=name
this.show = function(){
	console.log('my name is '+this.name);
}
}



//class 類



// console.log(o1)
// console.log(o2)
// console.log(o3)
// o1.life='15%'
// o1.show()
// var o1=new Bi('qian bi')
// var o2=new Bi('gang bi')
// var o3=new Bi('shui bi')

// 315typeof
//  typeof 屬性辨別  數碼屬性為'number'    typeof x ==='number'
// Infinity為無限天文數大

// typeof 1

// typeof {}

// typeof true
// var 圈圈＝{X:1, Y:2} 大括弧下為 圈圈.X與圈圈的Y的定義 刪除時用delete 圈圈.X
var obj={
  x:1,
  y:2,
  z:3,
  m:1000,
  n:99999999,
  name:'Object Instance'
};

// for (var 圈圈＝0; 圈圈<10; 圈圈++){console.log(圈圈)}圈圈為起始點

for (var name in obj) { if ( obj[name]<Infinity) {

  console.log(name,  obj[name])}
}
// --------------------------------------
// 正確度比較高
var obj={
  x:1,
  y:2,
  z:3,
  name:'Object Instance'
};


for (var name in obj) {
  if(typeof obj[name] ==='number') {
    console.log(name,  obj[name]);
  }
}
// 3-20oop
function Book(name, author){
	this.name=name;
	this.author=author;
}
  Book.prototype.c=function(){
  	console.log(this.name + "/" + this.author)//要用function才能呼出上列參數
  }//匿名函數 零參數
Book.prototype.time='2018-10-6'

var b1=new Book("Gjob","Sona")
var b2=new Book("Gjob2","Sona2")


 console.log(b1.time)
//b1.c()//

// 3-20
function Weapon(kname, ename, jname,cname){
	this.kname=kname;
	this.ename=ename;
	this.jname=jname;
	this.cname=cname;
}
Weapon.prototype.allshow=function(){
  	console.log(this.kname +"/"+this.ename+"/"+this.jname+"/"+this.cname)
}
var w1=new Weapon("에너지 코어","Energy Core","エナジーコア","能源核心")
var w2=new Weapon("G2","S2","S3","S4")

w1.allshow()

//try322
var obj={
  x:1,
  y:2,
  z:3,
};

for (var suzi in obj) { if ( obj[suzi]<Infinity) {

  console.log(suzi,  obj[suzi])}
}

//var in
var obj = {
	'고기' : 12000,
	'오이' : 4000,
	'감자' : 3000,
	'사과' : 4800,
	'포도' : 5000,
	'호랑이':NaN,
	'사람':Infinity
}

// 先前在循環教過for  for (var 圈圈＝0; 圈圈<10; 圈圈++){console.log(圈圈)} 圈圈為起始點
for (var name in obj) {

	name ;// 고기,오이,감자,사과,포도
	obj[name];// 12000,4000,...
	
	if (obj[name]<Infinity) {
		console.log(name,  obj[name]);
	}
}


/*
고기 12000
오이 4000
감자 3000
사과 4800
포도 5000
*/

//29
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

//優化

for(var i=0;  i<=2;  i++){
  str += trytest[i].name+'是'+trytest[i].position+'。';
  if(i<2){
    str += '\n';
  }
}
//String

var  str = '用于测量,这个字符串的长度';

// console.log( String.length );


function A (a,b,c){
	// 
}


console.log(typeof String)

// class  === function
//String403

 var  str = '用于测量这个字符串的长度';
 console.log(str.length);
 let longString = "This is a very long string which needs " +
                  "to wrap across multiple lines because " +
                  "otherwise my code is unreadable.";
 console.log(longString);
 var a = 55.5;

c = parseFloat(a,10);
console.log(c)

//toString() 方法返回指定 Number 对象的字符串表示形式。
var n= 5
r=n.toString(10)
console.log(r)
//403
class  Fruit {
	constructor(name, year){
		this.name=name; 
		this.year= year;
		this.description = function(){
			return '這個'+this.name+'是'+this.year+'年生產的。';
		}
	}

	get shelfLife(){
		return this.year+1;
	}
}
var apple = new Fruit('苹果',2018);

console.log(apple.description())
console.log(apple.shelfLife);

console.log(apple.description() === '這個苹果是2018年生產的。');// true
console.log(apple.shelfLife === 2019);// true


//