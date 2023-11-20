 function findprime(n){
        
    for(let i = 2 ; i < n ; i++){

        if(  n % i === 0){
           console.log("this number not prime number");
           
        }
       
    }
    console.log("prime number");
 }

findprime(11);