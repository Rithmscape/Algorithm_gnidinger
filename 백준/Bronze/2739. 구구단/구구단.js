const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (line) => {
    const a = parseInt(line);

    for (let i = 1; i <= 9; i++) {
        console.log(`${a} * ${i} = ${a * i}`);
    }

    rl.close();
});
