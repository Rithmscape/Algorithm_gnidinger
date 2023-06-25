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
        baskets = Array.from({ length: n }, (_, index) => index + 1);
    } else {
        const [i, j] = line.split(' ').map(Number);
        [baskets[i - 1], baskets[j - 1]] = [baskets[j - 1], baskets[i - 1]];

        m--;

        if (m === 0) {
            rl.close();
        }
    }
}).on('close', () => {
    console.log(baskets.join(' '));
    process.exit(0);
});