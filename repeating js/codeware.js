// question 1
 
// function pincode (pin){
//     if(pin.length===4 || pin.length!==CharacterData)
//     {

//     }else{
//         console.log();
//     }
// }


 

// function output (){
//     for(let i = 0; i <= sortarray.length ; i++){
//         if(i%2==1){
//             console.log([i]);

//         }
//     }
    

// }
// output();

// function sortArray( ){
//  let array = [1,2,3,4,5,6,7,8,9];   
//  let result = array.filter((value,index,array)=>value%2==1)
//  result.sort((a,b) => b-a);
// 3
//  console.log(result);
// }
// sortArray();

 
  
// function sortArray() {
//     let array = [1, 2, 3,9,8,7,6,5,4];
//     let oddNumbers = array.filter(value => value % 2 == 1);
//     oddNumbers.sort((a, b) => a - b);
  
//     let j = 0;
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] % 2 == 1) {
//       array[i] =  oddNumbers[j]  
//         j++;
//       }
//     }
//     console.log(array);
//   }
  
//   sortArray();



  // function sortArray(array) {
  //   const oddNumbers = array.filter(value => value % 2 === 1);
  //   oddNumbers.sort((a, b) => a - b);
  
  //   let j = 0;
  //   for (let i = 0; i < array.length; i++) {
  //     if (array[i] % 2 === 1) {
  //       array[i] = oddNumbers[j];
  //       j++;
  //     }
  //   }
  
  //   return array;
  // }

  function booleanToString(b){
    console.log(b ? 'true':'false');
  
   
  }

  console.log(true)
   
  
  function booleanToString(value) {
    if (typeof value === 'boolean') {
        return value ? 'true' : 'false';
    }  
    
}

 
const trueString = booleanToString(true);
const falseString = booleanToString(false);

console.log(trueString);   
console.log(falseString);  


// function splitStringIntoWords(input) {
  
//   return input.split(' ');
// }

// const result = splitStringIntoWords("Robin Singh");
// console.log(result); 



// function evenOrOdd(number) {
 
//     if(number%2 ==0){
//       console.log("even");
//     }else if(number%2==1){
//       console.log("odd");
//     }
 

// }


// var summation = function (num) {
//   k = 0;
//    for(let i = 1 ; i <= num ; i++){
    
//        k = i + k;
      
//    }
//     return(k);
// }
 
// console.log(summation(10));


let num1 = 100;
let num2 = 200;
let num3 = 300;

function sum(num1,num2){

  return num1+num2;

}

 let x=sum(num1,num2);
 
 console.log(sum(num3,x));

//  let rslt = x +num3
//  console.log(rslt);

 


