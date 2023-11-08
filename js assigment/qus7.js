const array = [42,89,,60,42,90,48,90,60];

// const number = array.filter((value,index,array)=> array.indexOf(value) === index);

// console.log(number);







// function declare

function filt(value,index,array){
     return array.indexOf(value)===index ;
 
}

const result = array.filter(filt);
 console.log(result);

 