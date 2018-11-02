// prototype 原型  new 下可繼承的屬性和方法
// 每個類下的屬性(properties)與方法(mathods)屬於該類 new 對象僅能繼承原型


// new Number(1)
console.log(Number.parseFloat('   78254561.56')) 
// 內存(記憶體)中 推 (引用 object)     棧(快  基本類型 布林 數值 字串 undefine null) 所以單純數字1及 new Number(1)會稍有不同 
n=78254561.56
console.log(n.toLocaleString())
