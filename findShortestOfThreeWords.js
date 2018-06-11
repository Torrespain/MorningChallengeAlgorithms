/*Write a function called "findShortestOfThreeWords".

Given 3 strings, "findShortestOfThreeWords" returns the shortest of the given strings.

Notes:
* If there are ties, it should return the first word in the parameters list.

var output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'

Starter Code :*/
function findShortestOfThreeWords(word1, word2, word3) {
  let shortest;

  if (word1.length <= word2.length && word1.length <= word3.length) {
    shortest = word1;
  }
  else if (word2.lenght <= word3.length) {
    shortest = word2;
  }
  else {
    shortest = word3;
  }
  return shortest;
}

var output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'