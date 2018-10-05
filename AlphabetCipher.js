// Given a phrase, substitute each character by shifting it up or down the alphabet by a given integer. If necessary, the shifting should wrap around back to the beginning or end of the alphabet.

let alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let invertedAlpha = alpha.slice().reverse();

cipher = (str, pos) => {
  let strArr = str.split("");

  for(let i=0; i<strArr.length; i++) {
    let letterPos = alpha.indexOf(strArr[i]);

    if (strArr[i]!== " ") {
      if(letterPos + pos > 25) {
        let newPos = (letterPos + pos) % 26;
        strArr[i] = alpha[newPos];
      } 
      else if(letterPos + pos < 0) {
        let newPos = Math.abs((letterPos + pos + 1) % 26 );
        console.log(newPos)
        strArr[i] = invertedAlpha[newPos];
      }
      
      else {
        strArr[i] = alpha[letterPos+pos];
      }
    }
      
  }

  return (strArr.join(""));

}

cipher("hallo there", -1) 