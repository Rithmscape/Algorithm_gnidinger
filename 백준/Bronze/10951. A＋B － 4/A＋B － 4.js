const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (line) => {
    const [a, b] = line.split(' ').map(Number);
    console.log(a + b);
});

rl.on('close', () => {
    process.exit(0);
});
