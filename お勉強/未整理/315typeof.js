//  typeof 屬性辨別  數碼屬性為'number'    typeof x ==='number'
// Infinity為無限天文數大

// typeof 1

// typeof {}

// typeof true
// var 圈圈＝{X:1, Y:2} 大括弧下為 圈圈.X與圈圈的Y的定義 刪除時用delete 圈圈.X
var obj={
  x:1,
  y:2,
  z:3,
  m:1000,
  n:99999999,
  name:'Object Instance'
};

// for (var 圈圈＝0; 圈圈<10; 圈圈++){console.log(圈圈)}圈圈為起始點

for (var name in obj) { if ( obj[name]<Infinity) {

  console.log(name,  obj[name])}
}
// --------------------------------------
// 正確度比較高
var obj={
  x:1,
  y:2,
  z:3,
  name:'Object Instance'
};


for (var name in obj) {
  if(typeof obj[name] ==='number') {
    console.log(name,  obj[name]);
  }
}