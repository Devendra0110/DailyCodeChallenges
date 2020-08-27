// Your task is to return a string that displays a diamond shape on the screen using asterisk (“*”) characters.
// const readline = require('readline')

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let diamondOrder = 0;
rl.question("Order of diamond patter:  ", function(answer) {
  // TODO: Log the answer in a database
  diamondOrder = Number(answer);
    printDiamond(diamondOrder)
  rl.close();
});

const printDiamond = (order) => {
for (let row = 0; row < order; row++) {
    for (let blank = order; blank >= row ; blank--) {
        process.stdout.write(" ");
    }
    for (let column = 0; column <= row; column++) {
        process.stdout.write("*");
    }
    for (let column = 0; column < row; column++) {
        process.stdout.write("*");
    }
    console.log();
}
for (let row = 0; row <= order; row++) {
    for (let column = 0; column <= row; column++) {
        process.stdout.write(" ");
    }
    for (let blank = order; blank >= row ; blank--) {
        process.stdout.write("*");
    }
    for (let blank = order; blank > row ; blank--) {
        process.stdout.write("*");
    }
    console.log();
}

}