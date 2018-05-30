/*Write a function called "addToFrontOfNew".

Given an array and an element, "addToFrontOfNew" returns a new array containing all the elements of the given array, with the given element added to the front.

Important: It should be a NEW array instance, not the original array instance.

var input = [1, 2];
var output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); --> [1, 2]

Starter Code :*/

function addToFrontOfNew(arr, element) {
  let newArray=arr.slice();
  newArray.unshift(element);

  return(newArray);
}

var input = [1, 2];
var output = addToFrontOfNew(input, 3);
console.log(output);
console.log(input);


// ----  or ----


function addToFrontOfNew(arr, element) {
  let newArray = [];
  newArray.push(element);
  for (let i = 0; i < arr.length; i++) {
    newArray = newArray.push(arr[i]);
    
  }
  return(newArray);
}

var input = [1, 2];
var output = addToFrontOfNew(input, 3);
console.log(output);
console.log(input);