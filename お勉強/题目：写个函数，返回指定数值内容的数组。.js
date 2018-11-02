// 题目：写个函数，返回指定数值内容的数组。
// 
// 调用方式1：f(start, end)
// 调用方式2：f(end)

function f(i, y){  

	  if(y===undefined) {
            y=i;
            i=0;
        }
var z=(y-i)+1
var arr = new Array(z) 
for (var x=0; x <arr.length; x++) {
  arr[x] = x+i;
}
return arr
	}


console.log(f(1,5))
console.log(f(5,7))
console.log(f(3))

 function createArrayRange(start,end){
        if(end===undefined) {
            end=start;
            start=0;
        }
        let res=[];
        while(start<=end){
            res.push(start++);
        }
        return res;
    }
console.log(createArrayRange(1,5))

// 实例：
// f(1,5)  // [1,2,3,4,5]
// f(5,7)  // [5,6,7]
// f(3)    // [0,1,2,3]