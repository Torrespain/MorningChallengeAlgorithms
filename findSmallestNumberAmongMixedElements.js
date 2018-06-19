/*Write a function called "findSmallestNumberAmongMixedElements".

Given an array of mixed elements, "findSmallestNumberAmongMixedElements" returns the smallest number within the given array.

Notes:
* If the given array is empty, it should return 0.
* If the array contains no numbers, it should return 0.

var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4

Starter Code :*/
function findSmallestNumberAmongMixedElements(arr) {
  let newNumberArray = [];
  let minNumber = 0;
  arr.forEach(element => {
    if (Number.isInteger(element)) {
      newNumberArray.push(element);
    }
  });

  if (newNumberArray.length === 0) {
    return minNumber;
  } 

  minNumber = newNumberArray[0];
  newNumberArray.forEach(element => {
    if (element<minNumber) {
      minNumber = element;
    }
  });

  return minNumber;
}

var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4