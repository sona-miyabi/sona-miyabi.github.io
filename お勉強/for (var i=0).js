var a=[1,1,1,2,3]

var s= new Set(a)
console.log(s)

var b=Array.from(s)
console.log(b)

s.add(3)
s.delete(1)
console.log(s)