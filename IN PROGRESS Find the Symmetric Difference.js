function sym() {
    let totalObj = {};
    let result = [];
    let newArgs = {};
    console.log('Original Args: ', arguments);

    // This part removes the repeated numbers in each key
    for (let key in arguments) {
       let obj = {};
       let arr=[];
       for (let i=0; i<arguments[key].length; i++) {
        obj[arguments[key][i]]=arguments[key][i]
       }
       for (let key in obj) {
        arr.push(parseInt(key));
       }
       newArgs[key] = arr;
    }
    console.log('New Args: ', newArgs);
    
    for (let key in newArgs) {
        console.log(newArgs[key])
        for (let i=0; i<newArgs[key].length; i++) {
            if (totalObj[newArgs[key][i]]===undefined) {
                totalObj[newArgs[key][i]] = 1;
            }
            else {
                totalObj[newArgs[key][i]]++;
            }
        }
    }

    for (let key in totalObj) {
        if (totalObj[key]===1) {
           result.push(parseInt(key)); 
        }
    }
    return(result);
  }
  
  sym([1, 2, 3], [5, 2, 1, 4]);