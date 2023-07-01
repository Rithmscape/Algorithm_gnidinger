const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let t = 0;
let input = [];

rl.on('line', (line) => {
    if (t === 0) {
        t = Number(line);
    } else {
        input.push(line);
    }
}).on('close', () => {
    for (let i = 0; i < t; i++) {
        console.log(input[i][0] + input[i][input[i].length - 1]);
    }
});
