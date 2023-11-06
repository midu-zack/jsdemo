const array = [42,89,,60,42,90,48,90,60];

const number = array.filter((item,index,array)=> array.indexOf(item) === index);

console.log(number);

