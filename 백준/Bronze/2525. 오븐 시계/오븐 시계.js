const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
    input.push(line);

    if (input.length === 2) {
        const [a, b] = input[0].split(' ').map(Number);
        const c = parseInt(input[1]);

        const total = a * 60 + b + c;
        const hour = Math.floor(total / 60) % 24;
        const minute = total % 60;

        console.log(hour, minute);

        rl.close();
    }
});
