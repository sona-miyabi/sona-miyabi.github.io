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