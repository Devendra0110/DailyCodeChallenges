// Your goal is to create a function that removes the first and last letters of a string. 
// Strings with two characters or less are considered invalid. 
// You can choose to have your function return null or simply ignore.

const stringPeeler = (input) => {
    if(input.length <= 2) return null;
    else return input.slice(1,-1);
}

console.log(stringPeeler("JavaScript"));
console.log(stringPeeler("Me"))