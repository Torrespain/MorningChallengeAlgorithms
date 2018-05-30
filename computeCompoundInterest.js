/*Write a function called "computeCompoundInterest".

Given a principal, an interest rate, a compounding frequency, and a time (in years), "computeCompoundInterest" returns the amount of compound interest generated.

var output = computeCompoundInterest(1500, .043, 4, 6);
console.log(output); // --> 438.8368221341061

Reference:
https://en.wikipedia.org/wiki/Compound_interest#Calculation_of_compound_interest
This shows the formula used to calculate the total compound interest generated.

Starter Code :*/
function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
  const P = principal;
  const r = interestRate;
  const n = compoundingFrequency;
  const t = timeInYears;

  const I = P*(Math.pow(1+(r/n),n*t)) - P;

  return  I;
}

var output = computeCompoundInterest(1500, .043, 4, 6);
console.log(output); // --> 438.8368221341061