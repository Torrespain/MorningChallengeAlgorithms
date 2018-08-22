/*Write a function called "isEitherEven".

Given two numbers, "isEitherEven" returns whether or not either one of the given numbers is even.

var output = isEitherEven(1, 4);
console.log(output); // --> true

Starter Code :*/
function isEitherEven(num1, num2) {
  let result = false;
  for (let key in arguments) {
    if (arguments[key] %2 ===0) {
      result = true;
      return result;
    }
  }
}

var output = isEitherEven(1, 4);
console.log(output); // --> true