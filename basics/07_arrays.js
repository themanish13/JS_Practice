//arrays 
// 1D array
let arr = [1, 2, 3, 4, 5];
console.log("1D Array:", arr);
console.log("First element:", arr[0]);
console.log("Last element:", arr[arr.length - 1]);


// 2D array (matrix)
console.log("\n2D Array (Matrix):");
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("Matrix:", matrix);
console.log("Element at [0][0]:", matrix[0][0]);
console.log("Element at [1][2]:", matrix[1][2]);
console.log("Element at [2][1]:", matrix[2][1]);

// Iterate through 2D array
console.log("\nIterating through 2D array:");
for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++){
        console.log("matrix[" + i + "][" + j + "] = " + matrix[i][j]);
    }
}