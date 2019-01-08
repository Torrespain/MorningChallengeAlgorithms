//IT CHANGES THE ORIGINAL ARRAY!

let arr1 = [1, 2, 3, 4];
console.log("splice");
let newArr1 = [...arr1];
console.log (newArr1.splice(1,newArr1.length));

console.log(newArr1);

//Slice:  returns the selected elements in an array, as a new array object.
//selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.

let arr2 = [1, 2, 3, 4];
console.log(" ");
console.log("slice");
console.log (arr2.slice(1, arr2.length));

arr2.slice(1, arr2.length);
console.log(arr2);

//Shift: removes the first item of an array.
//This method changes the length of the array.
//The return value of the shift method is the removed item.

let arr3 = [1, 2, 3, 4];
console.log(" ");
console.log("shift");
let newArr3 = [...arr3];
console.log(newArr3.shift());

console.log(newArr3);

//Pop: removes the last element of an array, and returns that element.
//This method changes the length of an array.

let arr4 = [1, 2, 3, 4];
console.log(" ");
console.log('pop');
let newArr4 = [...arr4];
console.log(newArr4.pop());

console.log(newArr4);