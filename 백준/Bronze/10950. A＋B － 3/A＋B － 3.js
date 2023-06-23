const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let count = 0;
let input = [];

rl.on('line', (line) => {
    if (count === 0) {
        count = parseInt(line);
    } else {
        input.push(line.split(' ').map(Number));
        if (input.length === count) {
            for (let i = 0; i < count; i++) {
                const [a, b] = input[i];
                console.log(a + b);
            }
            rl.close();
        }
    }
});
