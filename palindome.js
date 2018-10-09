palindome = (input) => {

    let original = [];
    for (let char of input.toLowerCase()) {
        if (char !== "." && char !== "," && char !== "?" && char !== "!" && char !== " ") {
            original.push(char); 
        }
    }
    return (original === original.reverse());
}

// palindome("Cigar? Toss it in a can. It is so tragic");

//Better soultion:

palindrome2 = (input) => {
    let clean = input.replace(/\W/g, "").toLowerCase().split("");
    return (clean === clean.reverse());
}

palindrome2("Cigar? Toss it in a can. It is so tragic");