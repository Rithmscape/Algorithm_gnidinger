const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = Array.from({ length: 30 }, (_, index) => index + 1);

rl.on('line', (line) => {
    input[parseInt(line) - 1] = 0;
}).on('close', () => {
    input.filter((a) => a !== 0).forEach((a) => console.log(a));
    process.exit(0);
});