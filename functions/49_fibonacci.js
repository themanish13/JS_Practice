function isFibonacci(num) {
    if (num < 0) 
        return false; // negative numbers are not in Fibonacci sequence

    let a = 0, b = 1;
    while (a < num) {
        let temp = a;
        a = b;
        b = temp + b;
    }
    return a === num; // check if we found the number in the sequence
}

// Example usage:
const numberToCheck = 21;
const result = isFibonacci(numberToCheck);

console.log(numberToCheck + " is a Fibonacci number:", result);