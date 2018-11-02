class Uu  {constructor(name, age){
	this.name=name; this.age= age
}//構造函數 
 get s1(){//類似屬性
	 return this.name+this.age+'1'
}
set s2(v){//類似屬性
	 this.name=v;
}
static eat() {//靜態
    return 'EAT';
  }

}


var u = new Uu('haoba',50)
u.s2='NaME';
// u.name=1234;

console.log(u.s1)
console.log(u)
console.log(Uu.eat())
console.log(Uu.constructor)

var i=0
console.log(i, i++ ,i )

for( 1;   2;   4){
	3
}
