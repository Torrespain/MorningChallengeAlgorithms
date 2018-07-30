/*Write a function called "getElementsAfter".

Given an array and an index, "getElementsAfter" returns a new array with all the elements after (but not including) the given index.

var output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
console.log(output); // --> ['d', 'e']

Starter Code :*/
function getElementsAfter(array, n) {
  let newArray=[];
  let counter=0;
  for (let i=n+1; i<array.length; i++) {
    newArray[counter]=array[i];
    counter++;
  }
  let newArray=array.splice(0,2)
  console.log(newArray)
  return newArray;
}

/* Using splice
function getElementsAfter(array, n) {
  let newArray=array.splice(0,2);
  return newArray;
}
*/

var output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
console.log(output); // --> ['d', 'e']