//nested loop - prints a multiplication table (3x3)
for(let i = 1; i <= 3; i++){
    for(let j = 1; j <= 3; j++){
        console.log(i + " * " + j + " = " + (i * j));
    }
    console.log("---");
}

//nested loop - prints a pattern
console.log("\nPattern:");
for(let i = 1; i <= 5; i++){
    let pattern = "";
    for(let j = 1; j <= i; j++){
        pattern += "*";
    }
    console.log(pattern);
}