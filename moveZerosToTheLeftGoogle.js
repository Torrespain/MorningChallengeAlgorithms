/*Partition an array in such way zeros to be moved on the  left side of the array, other numbers on the right side of the array. 
Extra storage not allowed, only in-place.*/


partitionZeros = (arr) =>{
    let remZeros = arr.length-1;
    console.log(arr);
    for (let i=arr.length-1; i>=0; i--) { //rewriting the array from the end without zeros
        if (arr[i]!==0) {
            arr[remZeros--] = arr[i];
        }
    }
    for (let i=0; i<=remZeros; i++) { //adding the zeros from the beginning
        arr[i]=0;
    } 
    return(array);
}

let array = [1,0,0,2,4,2,0,2,4,5,0];
console.log(partitionZeros(array));