const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('', (line) => {
    const [a, b, c] = line.split(' ').map(Number);

    console.log(a + b + c);

    rl.close();
});
