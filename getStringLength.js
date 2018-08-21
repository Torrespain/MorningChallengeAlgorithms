/*Write a function called "getStringLength".

Given a string, "getStringLength" returns the length of the given string.

Notes:
* Do NOT use any native 'length' methods.
* You might consider using 'substring' or 'slice' as alternatives.

var output = getStringLength('hello');
console.log(output); // --> 5

Starter Code :*/
function getStringLength(string) {
  let stringArray = string.slice('');
  let length = 0;
  for (let element in stringArray) {
    length ++;
  }
  return length;
}

var output = getStringLength('hello');
console.log(output); // --> 5

//It does not require to slice it in an array.
//This can be used: for(let element in strin)