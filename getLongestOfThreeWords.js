/*Write a function called "getLongestOfThreeWords".

Given 3 words, "getLongestOfThreeWords" returns the longest of three words. 

Notes:
* If there is a tie, it should return the first word in the tie.

var output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'

Starter Code :*/
function getLongestOfThreeWords(word1, word2, word3) {
  longest = '';
  for (let key in arguments) {
    if (arguments[key].length > longest.length) {
      longest = arguments[key];
    }
  }
  return longest;
}
var output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'