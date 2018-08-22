/*Write a function called "isEitherEvenAndLessThan9".

Given two numbers, 'isEitherEvenAndLessThan9' returns whether at least one of them is even, and, both of them are less than 9.

var output = isEitherEvenAndLessThan9(2, 4);
console.log(output); // --> true

var output = isEitherEvenAndLessThan9(72, 2);
console.log(output); // --> false

Starter Code :*/
function isEitherEvenAndLessThan9(num1, num2) {
  let result = false;
  let even = false;
  let lessThanNine= true;

  for (let key in arguments) {
    if (arguments[key] %2 === 0) {
      even = true;
    }
    if (arguments[key] >= 9) {
      lessThanNine = false;
    }
  }
  console.log("One of then even: ", even);
  console.log("Both of them less than nine: ", lessThanNine);
  if (even && lessThanNine) {
    return true;
  }
  return false;
}

var output = isEitherEvenAndLessThan9(2, 4);
console.log(output); // --> true

var output = isEitherEvenAndLessThan9(72, 2);
console.log(output); // --> false