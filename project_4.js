"use strict";
function calculateFactorial(n) {
    if (n < 0) {
        throw new Error("Input must be a positive integer.");
    }
    let factorial = 1;
    let i = 1;
    while (i <= n) {
        factorial *= i;
        i++;
    }
    return factorial;
}
const inputNumber = 5;
const result = calculateFactorial(inputNumber);
console.log(`Factorial of ${inputNumber} is: ${result}`);
