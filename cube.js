/*Write a function called "cube".

Given a number, "cube" returns the cube of that number.

var output = cube(3);
console.log(output); // --> 27

Starter Code :*/
function cube(num) {
  let cube = Math.pow(num,3);
  return (cube);
}

var output = cube(3);
console.log(output); // --> 27