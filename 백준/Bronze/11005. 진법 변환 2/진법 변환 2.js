const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('', (line) => {
    const [n, b] = line.split(' ').map(Number);

    console.log(n.toString(b).toUpperCase());

    rl.close();
});
