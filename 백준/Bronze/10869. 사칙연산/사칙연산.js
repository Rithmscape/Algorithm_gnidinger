const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('', (line) => {
    const [a, b] = line.split(' ').map(Number);
    console.log(a + b);
    console.log(a - b);
    console.log(a * b);
    console.log(Math.floor(a / b));
    console.log(a % b);
});
