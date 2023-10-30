const array = [43,90,51,23,98,56,12,35,98]

const chain = array.map((value) => value)
.filter((datas)=> datas > 45)
.sort((a,b)=> a-b)
.reduce((total,value) => total + value);

console.log(chain);