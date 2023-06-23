const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('', (line) => {
    const n = parseInt(line);

    for (let i = 0; i < n; i++) {
        console.log('*'.repeat(i + 1));
    }

    rl.close();
});