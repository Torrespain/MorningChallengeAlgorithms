/*Write a function called "findShortestElement".

Given an array, "findShortestElement" returns the shortest string within the given array.

Notes:
* If there are ties, it should return the first element to appear.
* If the given array is empty, it should return an empty string.

var output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'

Starter Code :*/
function findShortestElement(arr) {
  let shortest = arr[0];

  arr.forEach(element => {
    if (shortest.length > element.length) {
      shortest = element;
    }
  });
  return shortest;
}

var output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'