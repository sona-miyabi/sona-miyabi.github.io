var t=require('./regExpTest.js');// 导入外部脚本，并赋给变量t。这是测试用函数。


// t(/ap/, 'apple00 aair000 aaarray0 all also')

//*    {0,~}//
//+  {1,~}//
//?   {0,1}// 

  
var r='a aa aaa' .match(/aa*/g)//較少單字符直接應用 會搜到空白
var x='a aa aaa' .match(/a?/g)//較少單字符直接應用 會搜到空白
var t='a aa aaa' .match(/a+/g)
console.log(r)
console.log(x)
console.log(t)
