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