/*Write a function called "countAllCharacters".

Given a string, "countAllCharacters" returns an object where each key is a character in the given string. The value of each key should be how many times each character appeared in the given string.

Notes:
* If given an empty string, countAllCharacters should return an empty object.

var output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}

Starter Code :*/
function countAllCharacters(str) {
  let object={};
  for (let i=0; i<str.length; i++) {
    if (object[str[i]]===undefined){ // if the key does not exist yet, we asign it with a value of 0
      object[str[i]]=0;
    }
    object[str[i]]++; // since it exists add 1
  }
  return object;
}
var output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}