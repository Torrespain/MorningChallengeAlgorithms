/*Write a function called "getFullName".

Given a first and a last name, "getFullName" returns a single string with the given first and last names separated by a single space.

var output = getFullName('Joe', 'Smith');
console.log(output); // --> 'Joe Smith'

Starter Code :*/
function getFullName(firstName, lastName) {
  let fullName = '';
  for (let i=0; i<arguments.length-1; i++) {
    fullName += arguments[i] + ' ';
    if (i===arguments.length-2) {
      fullName += arguments[i+1];
    }
  }
  return fullName;
}

var output = getFullName('Joe', 'Smith');
console.log(output); // --> 'Joe Smith'