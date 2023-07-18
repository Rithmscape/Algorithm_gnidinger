let rl = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let mx = Number.MIN_SAFE_INTEGER;
let mxRow = -1;
let mxCol = -1;

rl.forEach((line, rowIndex) => {
    let numbers = line.split(' ').map(Number);
    numbers.forEach((num, colIndex) => {
        if (num > mx) {
            mx = num;
            mxRow = rowIndex + 1;
            mxCol = colIndex + 1;
        }
    });
});

console.log(mx);
console.log(`${mxRow} ${mxCol}`);
