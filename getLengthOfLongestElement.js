/*Write a function called "getLengthOfLongestElement".

Given an array, "getLengthOfLongestElement" returns the length of the longest string in the given array.

Notes:
* It should return 0 if the array is empty.

var output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5

Starter Code :*/
function getLengthOfLongestElement(arr) {
  let longest = 0;
  for (let i=0; i<arr.length; i++) {
    if (arr[i].length>longest) {
      longest = arr[i].length;
    }
  }
  return longest;
}

var output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5