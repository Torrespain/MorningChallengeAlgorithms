/*Write a function called "convertDoubleSpaceToSingle".

Given a string, "convertDoubleSpaceToSingle" returns the passed in string, with all the double spaces converted to single spaces.

var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"

Notes:
* In order to do this problem, you should be familiar with "String.split", and "Array.join".

Starter Code :*/
function convertDoubleSpaceToSingle(str) {
  let newString="";
  for (let i=0; i<str.length; i++) {
    if (str.charAt(i)===" " && str.charAt(i+1)===" "){
      i++;
    }
    newString = newString.concat(str.charAt(i));
  }
  return newString;
}
var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"

/*Much better way:

function convertDoubleSpaceToSingle(str) {
  var singleSpace = str.split("  ");
  console.log(singleSpace);
  var newString = singleSpace.join(" ");
  return newString;
}

var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output);
*/
