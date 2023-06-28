const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let n = 0;
let input = [];

rl.on('line', (line) => {
    if (n === 0) {
        n = parseInt(line);
    } else {
        input = line.split(' ').map(Number);
    }
}).on('close', () => {
    const m = Math.max(...input);

    for (let i = 0; i < n; i++) {
        input[i] = (input[i] * 100) / m;
    }

    console.log(input.reduce((a, b) => a + b, 0) / input.length);
});