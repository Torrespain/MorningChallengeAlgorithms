/*Write a function called "findSmallestElement".

Given an array of numbers, "findSmallestElement" returns the smallest number within the given array.

Notes:
* If the given array is empty, it should return 0.

var output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1

Starter Code :*/
function findSmallestElement(arr) {
  let smallest = 0;

  if (arr.length > 0) {
    smallest =  arr[0];
  }

  arr.forEach(element => {
    if (element < smallest) {
      smallest = element;
    }
  });
  return smallest;
}


var output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1
