const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('', (line) => {
    const a = parseInt(line);

    if ((a % 4 === 0 && a % 100 !== 0) || a % 400 === 0) {
        console.log(1);
    } else {
        console.log(0);
    }

    rl.close();
});