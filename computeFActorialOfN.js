/*Write a function called "computeFactorialOfN".

Given a natural number (a whole number greater than 0), "computeFactorialOfN" returns its factorial.

var output = computeFactorialOfN(3);
console.log(output); // --> 6

var output = computeFactorialOfN(4);
console.log(output); // --> 24

Starter Code :*/
function computeFactorialOfN(n) {
  let factorial = n;
  for (let i = 1; i < n; i++){
    factorial *= n - i;
  }
  return factorial;
}

var output = computeFactorialOfN(4);
console.log(output); // --> 24
