
var hao='oa red\na中文apple orang'
var ta=/^a/
var wo= /\ba\S{0,1}/ //{0,}與*相通
console.log(ta.exec(hao))//包含空格為一整句去搜開頭是否有a
console.log(wo.exec(hao))// 空格或其他類型  隔出單詞搜尋當中是否有a

