/*Aliquot Sequence
The aliquot sequence of the aliquots of a number

Example:
Input: n = 10
Output: 10 8 7 1 0

Why?:
Aliquot of 10 => 5 + 2 + 1 = 8
Aliquot of 8 => 4 + 2 + 1 = 7
Aliquot of 7 => 1
Aliquot of 1 => 0

Special case:
6 enters in a loop:
Aliquot of 6 => 3 + 2 + 1 = 6 and so on
*/

aliquotSequence = (num) => {
    let total = 0;

    for (let i=1; i<num; i++) {
        if (num%i === 0) {
            total += i;
        }
    }
    if ((num || total) === 6) {
        sequence.push(total);
        console.log ('This would be a loop of 6')
    }
    else if (total>=1) {
        sequence.push(total);
        aliquotSequence (total);
    }
    if (total === 1) {
        sequence.push(0);
    }
    return sequence;
}
let sequence = [];
console.log(aliquotSequence(10));


/*My solution during the interview:

let arr=[];

function aliquot (num) {
    let total=0;

    if (num===6) {
        arr.push(6);
        console.log(arr);
        return (arr);
    }
    for (let i=1; i<num; i++) {
        if (num%i===0) {
            total+=i;
        }
    }
    arr.push(total);
    if (total>0){
        aliquot(total);
    }
    else {
        console.log(arr);
    }
}
aliquot(25);
*/