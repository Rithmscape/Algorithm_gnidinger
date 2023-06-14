const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
    input.push(line);

    if (input.length === 2) {
        const a = parseInt(input[0]);
        const [x, y, z] = input[1].split('').map(Number);

        console.log(a * z);
        console.log(a * y);
        console.log(a * x);
        console.log(a * Number(input[1]));

        rl.close();
    }
}).on('close', () => {
    process.exit(0);
});
