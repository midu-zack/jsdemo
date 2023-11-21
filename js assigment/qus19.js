
function digits(number) {

    let digits = number.toString().split("").map(Number);

    console.log(digits.reduce((value, index) => value + index, 0));
    
  }
  
  
 digits(910)