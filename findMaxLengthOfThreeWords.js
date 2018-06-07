/*Write a function called "findMaxLengthOfThreeWords".

Given 3 words, "findMaxLengthOfThreeWords" returns the length of the longest word.

var output = findMaxLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 3

Starter Code :*/
function findMaxLengthOfThreeWords(word1, word2, word3) {
  let longest="";
  
  if (word1.length >= word2.length && word1.length >= word3.length) {
    longest = word1;
  }
  else if (word2.length >= word3.length) {
    longest = word2;
  }
  else {
    longest = word3;
  }
  
  console.log("The longest word is: ", longest);
  return longest.length;
}

let output = findMaxLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 3


/*another way
function findMaxLengthOfThreeWords(word1, word2, word3) {
  return Math.max(word1.length, word2.length, word3.length);
}

console.log(findMaxLengthOfThreeWords('a', 'be', 'see'));

*/