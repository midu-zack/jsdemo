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

 
  
function sortArray() {
    let array = [1, 2, 3,9,8,7,6,5,4];
    let oddNumbers = array.filter(value => value % 2 == 1);
    oddNumbers.sort((a, b) => a - b);
  
    let j = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 == 1) {
      array[i] =  oddNumbers[j]  
        j++;
      }
    }
    console.log(array);
  }
  
  sortArray();



  function sortArray(array) {
    const oddNumbers = array.filter(value => value % 2 === 1);
    oddNumbers.sort((a, b) => a - b);
  
    let j = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 1) {
        array[i] = oddNumbers[j];
        j++;
      }
    }
  
    return array;
  }
   
  
  