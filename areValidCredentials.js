/*Write a function called "areValidCredentials".

Given a name and a password, "areValidCredentials", returns true if the name is longer than 3 characters, AND, the password is at least 8 characters long. Otherwise it returns false.

var output = areValidCredentials('Ritu', 'mylongpassword')
console.log(output); // --> true

Starter Code :*/
function areValidCredentials(name, password) {
  let nameLenth = name.length;
  let passwordLenth = password.length;
  if(nameLenth>3 && passwordLenth>=8){
    return true;
  }
  else{
    return false
  }
}

var output = areValidCredentials('Ritu', 'mylongpassword')
console.log(output); // --> true