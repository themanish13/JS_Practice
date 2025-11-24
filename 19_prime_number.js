// for prime number using builtin functions
function isPrime(num) {
    if (num <= 1) return false; // numbers less than or equal to 1 are not prime
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // found a divisor, not prime
    }
    return true; // no divisors found, it's prime
}

let numberToCheck = 29; // you can change this number to test other values
if (isPrime(numberToCheck)) {
    console.log(numberToCheck + " is a prime number.");
} else {
    console.log(numberToCheck + " is not a prime number.");
}