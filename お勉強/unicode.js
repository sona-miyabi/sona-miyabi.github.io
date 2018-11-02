var s='';

for(var i=0; i<255; i++) {
  s+=i+':'+String.fromCharCode(i)+'\t';

  if(i%10===0) s+='\n';
}

console.log(s);