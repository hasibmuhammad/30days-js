/**
 * Factorial : 5
 * 5 * 4 * 3 * 2 * 1
 */

let number = 10;
let factorial = 1;
let i = 1;
do {
  factorial *= i;
  i++;
} while (number >= i);

console.log(factorial);
