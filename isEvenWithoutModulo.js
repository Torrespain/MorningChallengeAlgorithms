/*Write a function called "isEvenWithoutModulo".

Given a number, "isEvenWithoutModulo" returns whether it is even. 

Notes:
* It does so without using the modulo operator (%). 
* It should work for negative numbers and zero.

var output = isEvenWithoutModulo(8);
console.log(output); // --> true

Starter Code :*/
function isEvenWithoutModulo(num) {
  let mod = Math.abs(num);
  if (mod<=10) {
    let result = (mod/2).toString();
    return (result.length === 1);
  }
  while (mod > 0) {
    mod -=2;
    if (mod === 0) {
      return true;
    }
  }
  return false;
}

var output = isEvenWithoutModulo(8);
console.log(output); // --> true