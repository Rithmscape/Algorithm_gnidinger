const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let n = 0;
let m = 0;
let baskets = [];

rl.on('line', (line) => {
    if (n === 0) {
        [n, m] = line.split(' ').map(Number);
        baskets = Array(n + 1).fill(0);
    } else {
        const [i, j, k] = line.split(' ').map(Number);

        for (let x = i; x <= j; x++) {
            baskets[x] = k;
        }
        m--;

        if (m === 0) {
            rl.close();
        }
    }
}).on('close', () => {
    for (let i = 1; i <= n; i++) {
        process.stdout.write(`${baskets[i]} `);
    }
    process.exit(0);
});