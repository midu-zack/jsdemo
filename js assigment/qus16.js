function sumOfMultiples(limit) {
    let sum = 0;

    for (let i = 1; i < limit; i++) {
        
        if (i % 3 === 0 || i % 5 === 0) {
            sum =sum+ i;
        }
    }

    return sum;
}


const limit = 10;
const result = sumOfMultiples(limit);

console.log(`Sum of multiples of 3 or 5 below   ${result}`);
