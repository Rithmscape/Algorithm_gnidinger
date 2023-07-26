const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('', (line) => {
    const [n, b] = line.split(' ');

    console.log(parseInt(n, b));
});
