const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('', (line) => {
    const [a, b, c] = line.split(' ').map(Number);
    console.log((a + b) % c);
    console.log(((a % c) + (b % c)) % c);
    console.log((a * b) % c);
    console.log(((a % c) * (b % c)) % c);
    rl.close();
});