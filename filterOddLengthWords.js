/*Write a function called "filterOddLengthWords".

Given an array of string, "filterOddLengthWords" returns an array containing only the elements of the given array whose lengths are odd numbers.

var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']

Starter Code :*/
function filterOddLengthWords(words) {
  let newArray = [];
  for (let i=0; i<words.length; i++) {
    if (words[i].length%2!=0) {
      newArray.push(words[i]);
    }
  }
  return newArray;
}

var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']