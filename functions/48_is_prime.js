// fucntion to check if a number is prime
 function isPrime(num) {
    if (num <= 1) return false; // numbers less than or equal to 1 are not prime
    for (let i = 2; i <= Math.sqrt(num); i++) { // check divisibility from 2 to sqrt(num)
        if (num % i === 0) {
            return false; // found a divisor, not prime
        }
    }
    return true; // no divisors found, is prime
}

// Example usage:
const numberToCheck = 29;
const result = isPrime(numberToCheck);

console.log(numberToCheck + " is prime:", result);