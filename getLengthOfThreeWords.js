/*Write a function called "getLengthOfThreeWords".

Given 3 words, "getLengthOfThreeWords" returns the sum of their lengths.

var output = getLengthOfThreeWords('some', 'other', 'words');
console.log(output); // --> 14

Starter Code :*/
function getLengthOfThreeWords(words) {
  let totalLength = 0;
  for (let key in arguments) {
    totalLength += arguments[key].length;
  }
  return totalLength;
}

var output = getLengthOfThreeWords('some', 'other', 'words');
console.log(output); // --> 14