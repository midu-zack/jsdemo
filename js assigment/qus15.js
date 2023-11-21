function Prime(number) {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

function sumOfPrimes(limit) {
    let sum = 0;

    for (let i = 2; i <= limit; i++) {
        if (Prime(i)) {
            sum += i;
        }
    }

    return sum;
}
 
const limit = 11;
const result = sumOfPrimes(limit);

console.log(`Sum of prime numbers ${result}`);
