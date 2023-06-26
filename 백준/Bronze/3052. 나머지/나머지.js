const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
    input.push(Number(line) % 42);
}).on('close', () => {
    input = [...new Set(input)];

    console.log(input.length);

    rl.close();
});
