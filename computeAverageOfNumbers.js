/*Write a function called "computeAverageOfNumbers".

Given an array of numbers, "computeAverageOfNumbers" returns their average. 

Notes:
* If given an empty array, it should return 0.

var input = [1,2,3,4,5];
var output = computeAverageOfNumbers(input);
console.log(output); // --> 3

Starter Code :*/
function computeAverageOfNumbers(nums) {
  let arrayTotal = 0;
  let arrayLength = nums.length;
  
  if (arrayLength===0) {
    return 0;
  }
  nums.forEach(element => {
    arrayTotal += element;
  });
  return(arrayTotal/arrayLength);
}

var input = [1,2,3,4,5];
var output = computeAverageOfNumbers(input);
console.log(output); // --> 3