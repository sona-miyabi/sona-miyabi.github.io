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
