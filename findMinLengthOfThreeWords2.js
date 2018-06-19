// Write a function called "findMinLengthOfThreeWords".

// Given 3 words, "findMinLengthOfThreeWords" returns the length of the shortest word.

// var output = findMinLengthOfThreeWords('a', 'be', 'see');
// console.log(output); // --> 1

// Starter Code :
// function findMinLengthOfThreeWords(word1, word2, word3) {
//   // your code here
// }


function findMinLengthOfThreeWords(/*word1, word2, word3*/) {
    let args = Array.prototype.slice.call(arguments); //this prototype calls all the arguments, so more or less than 3 words can be introduced
    console.log('Words: ',args);  
    let min=0;
    for (let i=0; i<args.length; i++) {
        if (i===0) {
            min = args[i].length;
        }
        else if (args[i].length < min) {
            min = args[i].length;
        }
    }
    return min;
}


var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1