/*Write a function called "findMinLengthOfThreeWords".

Given 3 words, "findMinLengthOfThreeWords" returns the length of the shortest word.

var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1

Starter Code :*/
function findMinLengthOfThreeWords(word1, word2, word3) {
  let minLength = 0;

  if (word1.length <= word2.length && word1.length <= word3.length) {
    minLength = word1.length;
  }
  else if (word2.lenght <= word3.length) {
    minLength = word2.length;
  }
  else {
    minLength = word3.length;
  }
  return minLength;
}

var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1