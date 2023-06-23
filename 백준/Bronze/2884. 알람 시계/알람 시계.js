const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('', (line) => {
    const [a, b] = line.split(' ').map(Number);

    if (b >= 45) {
        console.log(a, b - 45);
    } else if ((b < 45, a !== 0)) {
        console.log(a - 1, b + 15);
    } else {
        console.log(23, b + 15);
    }

    rl.close();
});
