var n= 5 //2+2+1  2進位101  2+2+2+1    2進位111    1+2+2+2+2    1001
var r
// r=n.toString(16)//.toString數字轉為字符的命令 括號內（進位數） 16進位時 0~9 保持原樣 假如10兩位數無法用一個字顯示 便會為a~至15
r=n.toString(2)//.toString數字轉為字符的命令 括號內（進位數） 進位數範圍2～36  2進位  5時 結果101
console.log(r)


// 字符串转数值  parseInt( 字符, 进位数 )


parseInt('101', 2); // 5
r = parseFloat(' -1.e2');// -100
console.log(r)
// 十進制 二進制
// 0 ':' '0'
// 1 ':' '1'
// 2 ':' '10'
// 3 ':' '11'
// 4 ':' '100'
// 5 ':' '101'
// 6 ':' '110'
// 7 ':' '111'
// 8 ':' '1000'
// 9 ':' '1001'
// 10 ':' '1010'
// 11 ':' '1011'
// 12 ':' '1100'
// 13 ':' '1101'
// 14 ':' '1110'
// 15 ':' '1111'
