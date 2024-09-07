"use strict";
// - Write a program that uses a while loop to print the first 10 even numbers.
var num = 2;
console.log("Before Loop");
while (num <= 32) {
    let result = num / 2;
    num = num * 2;
    console.log(num);
}
console.log("after loop");
