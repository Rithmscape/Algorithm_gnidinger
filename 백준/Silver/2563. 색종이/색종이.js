const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let paper = Array.from({ length: 100 }, () => Array(100).fill(0));
let coloredArea = 0;

rl.on('line', (line) => {
    const [x, y] = line.split(' ').map(Number);
    for (let i = x; i < x + 10; i++) {
        for (let j = y; j < y + 10; j++) {
            if (paper[i][j] === 0) {
                paper[i][j] = 1;
                coloredArea++;
            }
        }
    }
}).on('close', () => {
    console.log(coloredArea);
    rl.close();
});
