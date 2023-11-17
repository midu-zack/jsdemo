const arr=[90,8,7,5,4]


const rslt =  arr.map((value,index,array)=> value+90);
console.log(rslt);

const filt = arr.filter((value,index,array)=> value>8)
console.log(filt);

let result= arr.reduce((total,value,array)=>total +value)
console.log(result);

