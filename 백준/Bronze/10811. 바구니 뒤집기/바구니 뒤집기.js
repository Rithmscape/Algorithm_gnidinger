const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let n = 0;
let m = 0;
let lines = [];
let input = [];

rl.on('line', (line) => {
    lines.push(line);
}).on('close', () => {
    [n, m] = lines[0].split(' ').map(Number);

    input = Array.from({ length: n }, (_, index) => index + 1);

    for (let i = 1; i <= m; i++) {
        const [a, b] = lines[i].split(' ').map(Number);

        let temp = input.slice(a - 1, b).reverse();
        input = [...input.slice(0, a - 1), ...temp, ...input.slice(b)];
    }

    console.log(input.join(' '));

    process.exit(0);
});
