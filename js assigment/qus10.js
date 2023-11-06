const array = [12,42,89,90,31,87,23,2]

function MinAndMax(){
 

    var max = array[0]
    var min = array[0]


    for(let i = 1 ;i < array.length ; i++ ){
        if(array[i] > max){
            max =array[i];
     
        }else if(array[i] < min){
            min = array[i]
        
            
        }

    }
    return {max,min};
 }

    const result = MinAndMax();
    

 console.log("maxmimum",result.max);
 console.log("minimum",result.min);


 



// const arr = [5, 2, 9, 1, 5, 6];
  
 

// function findMaxAndMin( ) {
 
  
//     let max = arr[0];
//     let min = arr[0];
  
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > max) {
//         max = arr[i];
    
//       } else if (arr[i] < min) {
//         min = arr[i];
       
//       }
//     }
//     return { max, min };  
 
//   }
//   console.log(min);
//   console.log( max);
 

  
  

  