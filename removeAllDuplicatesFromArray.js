removeAllDuplicates = (arr) => {
    let obj = {};
    let newArray = [];
    arr.forEach(element => {
        if (obj[element] == undefined) {
            obj[element] = 1;
        }
        else if (obj[element] >= 1) {
            obj[element] ++;
        }
    });
 
    for (let key in obj) {
        if (obj[key] == 1) {
            newArray.push(key);
        }
    }
    return(newArray);
}

myArray = ["a", "b", "u", "b", "d", "d"]

removeAllDuplicates (myArray);