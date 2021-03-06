/*Write a function called "removeElement".

Given an array of elements, and a "discarder" parameter, "removeElement" returns an array containing the items in the given array that do not match the "discarder" parameter.

Notes:
* If all the elements match, it should return an empty array.
* If an empty array is passed in, it should return an empty array.

var output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]


Starter Code :*/
function removeElement(array, discarder) {
  let newArr = [];
  for (var i=0; i<array.length; i++) {
    if (array[i] !== discarder) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}

var output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]