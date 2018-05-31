/*Write a function called "doubleSquareRootOf".

Given a number, "doubleSquareRootOf" returns double its square root.

var output = doubleSquareRootOf(121);
console.log(output); // --> 22

Starter Code :*/
function doubleSquareRootOf(num) {
  return (2*Math.pow(num, (1/2)));
}
var output = doubleSquareRootOf(121);
console.log(output); // --> 22