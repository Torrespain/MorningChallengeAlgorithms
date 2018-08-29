/*Write a function called "modulo".

Given 2 numbers, "modulo" returns the remainder after dividing num1 by num2.

It should behave as described in the canonical documentation (MDN) for the JavaScript remainder operator:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_()

Notes:
* Do NOT use the actual built-in modulo (aka "remainder") operator (%) in your implementation.
* 0 % ANYNUMBER = 0.
* ANYNUMBER % 0 = NaN.
* If either operand is NaN, then the result is NaN.
* Modulo always returns the sign of the first number.

var output = modulo(25, 4);
console.log(output); // --> 1

Starter Code :*/
function modulo(num1, num2) {
  if(num1===0 || isNaN(num1) || isNaN(num2)) {
    return NaN;
  }
  let remainder = ((num1/num2).toString()).split(".");
  if(remainder[1]===undefined) {
    return 0;
  }
  let decimals = remainder[1].length;
  let divider="1";
  for (let i=0; i<decimals; i++) {
    divider+="0";
  }
  divider=divider.toString();
  return ((remainder[1]/divider)*num2);
}

var output = modulo(25, 4);
console.log(output); // --> 1