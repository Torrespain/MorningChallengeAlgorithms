/*Write a function called "getSquaredElementsAtProperty".

Given an object and a key, "getSquaredElementsAtProperty" returns an array containing all the squared elements of the array located at the given key. 

Notes:
* If the array is empty, it should return an empty array.
* If the property at the given key is not an array, it should return an empty array.
* If there is no property at the key, it should return an empty array.

var obj = {
  key: [2, 1, 5]
};
var output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]

Starter Code :*/
function getSquaredElementsAtProperty(obj, key) {
  let squared = [];
  let array = obj[key];
  if (!Array.isArray(array)) {
    return squared;
  }
  for (let element in array) {
    squared.push(Math.pow(array[element], 2));
  }
  return squared;
}

var obj = {
  key: [2, 1, 5]
};
var output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]