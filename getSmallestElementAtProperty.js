/*Write a function called "getSmallestElementAtProperty".

Given an object and a key, "getSmallestElementAtProperty" returns the smallest element in the array located at the given key. 

Notes:
* If the array is empty, it should return undefined.
* If the property at the given key is not an array, it should return undefined. 
* If there is no property at the key, it should return undefined.

var obj = {
  key: [2, 1, 5]
};
var output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1

Starter Code :*/
function getSmallestElementAtProperty(obj, key) {
  let lowest;
  let array = obj[key];
  if (!Array.isArray(array)) {
    return lowest;
  }
  lowest = array[0];
  for (let value in array) {
    if (array[value] < lowest) {
      lowest = array[value];
    }
  }
  return lowest;
}

var obj = {
  key: [2, 1, 5]
};
var output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1