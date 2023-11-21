
function sumOfAllEvenOdd(limit) {
    let numbers = [];
    for (let i = 1; i <= limit; i++) {
      numbers.push(i);
    }
    console.log(numbers.reduce((value,index) => value + index, 0));
  }
  
   
  sumOfAllEvenOdd(5);

