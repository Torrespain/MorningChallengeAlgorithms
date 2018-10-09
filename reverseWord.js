// Given a string of characters as input, write a function that returns it with the characters reversed.

reverse = (input) => {
    let reversed = "";
    for (i=input.length-1; i>=0; i--) {
        reversed += input.charAt(i);
    }
    return reversed;
}

reverse("Hello World!");


// Better approach

// const rev = string =>
//     string
//         .split("")
//         .reverse()
//         .join("");

// rev ("Hello World!");