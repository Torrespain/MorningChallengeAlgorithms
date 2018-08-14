/*Write a function called "getLengthOfShortestElement".

Given an array, "getLengthOfShortestElement" returns the length of the shortest string in the given array.

Notes:
* It should return 0 if the array is empty.

var output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3

Starter Code :*/
function getLengthOfShortestElement(arr) {
  if(!arr.length>0) {
   return 0;
  }
  let shortestElement=arr[0];
  for (let i=1; i<arr.length; i++) {
    if (arr[i]<shortestElement) {
      shortestElement = arr[i];
    }
  }
  return shortestElement.length;
}
var output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3