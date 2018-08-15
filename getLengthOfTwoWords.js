/*Write a function called "getLengthOfTwoWords".

Given 2 words, "getLengthOfTwoWords" returns the sum of their lengths.

var output = getLengthOfTwoWords('some', 'words');
console.log(output); // --> 9

Starter Code :*/
function getLengthOfTwoWords(word1, word2) {
  let result = 0;
  for (let key in arguments) {
    result += arguments[key].length;
  }
  return result;
}

var output = getLengthOfTwoWords('some', 'words');
console.log(output); // --> 9