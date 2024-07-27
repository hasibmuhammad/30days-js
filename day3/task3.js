const number1 = 1000;
const number2 = 200;
const number3 = 30;

if (number1 > number2) {
  if (number1 > number3) {
    console.log(`${number1} is greater than ${number2} and ${number3}`);
  } else {
    console.log(`${number3} is greater than ${number1} and ${number2}`);
  }
} else {
  console.log(`${number2} is greater than ${number1} and ${number3}`);
}
