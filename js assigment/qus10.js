function MinAndMax(array){
 

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

 const result = MinAndMax([12,42,89,90,31,87,23,2]);
    

 console.log("maxmimum",result.max);
 console.log("minimum",result.min);


 

 

 
 

  
  

  