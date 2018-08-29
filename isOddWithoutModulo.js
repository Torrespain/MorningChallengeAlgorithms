/*Write a function called "isOddWithoutModulo".

Given a number, "isOddWithoutModulo" returns whether the passed in number is odd.

Note:
* It does so without using the modulo operator (%). 
* It should work for negative numbers and zero.

var output = isOddWithoutModulo(17);
console.log(output); // --> true

Starter Code :*/
function isOddWithoutModulo(num) {
  let positiveNum = Math.abs(num);
  while (positiveNum>0) {
    positiveNum-=2;
    if(positiveNum === 0) {
      return false;
    }
  }
  return true;
}
var output = isOddWithoutModulo(17);
console.log(output); // --> true