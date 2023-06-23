const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    let arr = input[1].split(' ').map(Number);

    console.log(Math.min(...arr), Math.max(...arr));

    rl.close();
});
