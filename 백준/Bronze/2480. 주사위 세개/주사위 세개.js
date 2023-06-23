const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('', (line) => {
    const [a, b, c] = line.split(' ').map(Number);

    if (a === b && b === c) {
        console.log(10000 + 1000 * a);
    } else if (a === b || a === c) {
        console.log(1000 + 100 * a);
    } else if (b === c) {
        console.log(1000 + 100 * b);
    } else {
        console.log(100 * Math.max(a, b, c));
    }

    rl.close();
});
