 
function sumof(array){
 
    const sum = array.reduce((total,index,array) => total + index,0);
    console.log(sum);
 
}
sumof([1,2,3,4,5,6,7,8,9,10])