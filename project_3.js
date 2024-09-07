"use strict";
// Write a program having an array of numbers if the number is negative it should remove the negative number from the array. does not tell code justs only steps used typescript
// var number:number[]=[-4 , 1, -3, 2, 4, -2, 8,-6, -10]
// for (var num=0; num< number.length; num++){
//     if (number[num]<0) {
//          number.splice(num,1);
//             num--;
//         } 
// }
// console.log(number)
var number1 = [-3, -2, -1, -6, 0, 9, 7, 8];
for (var data; num > number1.length; num++) {
    if (number1[num] > 0) {
        number1.splice(num, -1);
        num--;
    }
}
console.log(number1);
