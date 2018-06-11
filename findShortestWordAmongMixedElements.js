/*Write a function called "findShortestWordAmongMixedElements".

Given an array, "findShortestWordAmongMixedElements" returns the shortest string within the given array.

Notes:
* If there are ties, it should return the first element to appear in the given array.
* Expect the given array to have values other than strings.
* If the given array is empty, it should return an empty string.
* If the given array contains no strings, it should return an empty string.

var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'

Starter Code :*/
function findShortestWordAmongMixedElements(arr) {
  let stringArray = [];
  arr.forEach(element => {
    if (typeof element == "string") {
      stringArray.push(element);
    }
  });
  if (stringArray.length == 0) {
    return "";
  }
  let shortestString = stringArray[0];
  for (let i=1; i<stringArray.length; i++) {
    if (stringArray[i].length < shortestString) {
      shortestString = stringArray[i];
    }
  }

  return shortestString;
}

var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'