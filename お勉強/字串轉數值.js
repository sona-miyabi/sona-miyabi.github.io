// 
// var a ="456到台灣8789"
 // r=parseInt(a, 10)
// console.log(r)

function replacer(match, p1, p2, p3, offset, string) {
    console.log('找到匹配内容\t\t', match)
    console.log('第一个括号内容\t\t', p1)
    console.log('第二个括号内容\t\t', p2)
    console.log('第三个括号内容\t\t', p3)
    console.log('找到匹配位置\t\t', offset)
    console.log('源字符串\t\t', string)

    // 将找到的匹配内容，替换成该内容
    let res=match
    if(match){
        res= p1.toUpperCase() + (p2*100) + p3
        console.log('结果：',match,'换成了',res)
    }
    console.log('_'.repeat(32));
    return res;
}

let source = 'a1# b2%'
let target = 'a1# b2%'.replace(/([^\d]*)(\d*)([^\w]*)/g, replacer);
console.log('最终结果：', source, '换成了', target);


function f(){
    return 1;
    // return ;
}


// 