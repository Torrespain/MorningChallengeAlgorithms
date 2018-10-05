// Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.

const magazine =
 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

let words = "sit ad est sint";

 ransom = (words, magazine) => {

   let wordsArr = words.split(" ");

   let newMag =magazine.replace(/\./g, '').replace(/\,/g, '');

   let arr = newMag.split(" ");
   obj = {};
   for (let key of arr) {
     if (obj[key]===undefined) {
       obj[key] = 1;
     }
     else {
       obj[key] += 1
     }
   }
   console.log(obj)
   console.log("---------------------------")

   for (let word of wordsArr) {
     if (obj[word]>0) {
       obj[word] -= 1;
     }
     else {
       return false;
     }
   }

   console.log(obj)
   return true;
 }

 ransom (words, magazine)