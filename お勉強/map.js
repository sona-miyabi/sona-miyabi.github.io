//用於想要memo東西到物件
var o={
	x:1,
	0:4
}

o[o]='jkkljjkjljkl'
console.log('內容',o.toString(), String(o))

//o.x=4
o[0]=4444;
console.log('內容2',o)


var m=new Map()
m.set('x',1)
m.set('y',2)
m.set('z',3)
m.set(0,4)
m.set('0',4444)
m.set(o,'obect Comment')
console.log('內容3',m)


console.log(m.get('0'))

console.log(Array.from(m))

console.log(0=='0', 0==='0')


