
let o={
	name:'宝宝',
	// say: gettter|setter
	get say(){
		return `我是${this.name}`;
	},
	set say(v){
		this.name=v;
	}
};

Object.defineProperty(o, 'age', {
	get(){
		return this._age;
	},
	set(v){
		this._age=v;
	},
	configurable:false,
	enumerable:false
});

Object.defineProperty(o, '_age', {
	value:3,
	writeable:true,
	configurable:false,
	enumerable:false
});

console.log(o.say);
console.log(o.age);


// for(let k in o) {
// 	let v=o[k];
// 	console.log(k, v);
// }

// for(let k of Object.keys(o)) {
// 	console.log(k)
// }

// for(let v of Object.values(o)){
// 	console.log(v);
// }

// for(let e of Object.entries(o)){
// 	// let k=e[0], v=e[1];
// 	let [k,v]=e;
// 	console.log(k,v);
// }

