/*Write a function called "addToBackNew".

Given an array and an element, "addToBackNew" returns a clone of the given array, with the given element added to the end.

Important: It should be a NEW array instance, not the original array instance.

var input = [1, 2];
var output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]

Starter Code :*/
function addToBackOfNew(arr, element) {
  var newArray = arr.slice(); //IMPORTANT: to make a real copy we have to use .slice(), if not the input will change
  newArray.push(element);
  return (newArray);
}

var input = [1, 2];
var output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
}

/*another way without slice:

function addToBackOfNew(arr, element){
  var newArray = [];
  for (i=0; i<arr.length; i++) {
    newArray.push(arr[i]);
  }
  newArray.push(element);
  return newArray;
}*/