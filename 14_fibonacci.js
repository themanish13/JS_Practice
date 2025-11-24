//fibanacci series
let n = 5; // number of terms
let a = 0, b = 1, nextTerm;

console.log("Fibonacci Series:");
for (let i = 1; i <= n; i++) {
    console.log(a);
    nextTerm = a + b;
    a = b;
    b = nextTerm;
}