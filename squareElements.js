/*Write a function called "squareElements".

Given a array of numbers, "squareElements" should return a new array where each element is the square of the element of the given array.

var output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]

Starter Code :*/
function squareElements(arr) {
  for (var i=0; i<arr.length; i++) {
    arr[i] = Math.pow(arr[i], 2);
  }
  return arr;
}

var output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]