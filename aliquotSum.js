/* Aliquot Sum
Create a function that calculates the Aliquot of a number (the sum of all the divisors of the number)
Examples:
for 10 => 1 + 2 + 5 = 8
for 6 => 1 + 2 + 3 = 7
for 1 => 0
*/

aliquotSum = (num) => {
    let divisibleArr= [];
    let total = 0;

    for (let i=1; i<num; i++) {
        if (num%i === 0) {
            total += i;
            divisibleArr.push(i);
        }
    }
    console.log(divisibleArr);
    return total;
}

console.log(aliquotSum(10));