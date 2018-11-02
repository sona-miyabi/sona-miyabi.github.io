let o = {
	name:'哆啦A梦'
};


let f1 = function (a,b){
	console.log(this===global, this.name, a,b);
};


let f2 = f1.bind( o );


f1(1,2);

f2(1,2);


f1.call(o, 1,2);
f1.apply(o, [1,2]);

