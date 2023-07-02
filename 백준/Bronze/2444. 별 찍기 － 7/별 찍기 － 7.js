const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('', (line) => {
    const n = Number(line);

    for (let i = 0; i < n; i++) {
        console.log(' '.repeat(n - i - 1) + '*'.repeat(2 * i + 1));
    }

    for (let i = 1; i < n; i++) {
        console.log(' '.repeat(i) + '*'.repeat(2 * (n - i) - 1));
    }

    rl.close();
});
