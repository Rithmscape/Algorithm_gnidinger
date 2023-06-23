const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
    if (line === '0 0') {
        rl.close();
    } else {
        const [a, b] = line.split(' ').map(Number);
        console.log(a + b);
    }
});
