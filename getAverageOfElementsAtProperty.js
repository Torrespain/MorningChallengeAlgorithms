/*Write a function called "getAverageOfElementsAtProperty".

Given an object and a key, "getAverageOfElementsAtProperty" returns the average of all the elements in the array located at the given key. 

Notes:
* If the array at the given key is empty, it should return 0.
* If the property at the given key is not an array, it should return 0.
* If there is no property at the given key, it should return 0.


var obj = {
  key: [1, 2, 3]
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2

Starter Code :*/
function getAverageOfElementsAtProperty(obj, key) {
  if(obj[key] === undefined) { /* or: if(!obj.hasOwnProperty(key)) */
    console.log(obj[key]);
    return 0;
  }
  else if(obj[key].length === 0) {
    console.log(obj[key].length);
    return 0;
  }
  else if(!Array.isArray(obj[key])) {
    console.log(Array.isArray(obj[key]));
    return 0;
  }
  
  let total = 0;
  
  for (let i=0; i<obj[key].length; i++) {
    total += obj[key][i];
  }

  return (total/(obj[key].length));
}

var obj = {
  key: [1, 2, 3]
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2