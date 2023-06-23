const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let cnt = 0;
let input = [];

rl.on('line', (line) => {
    if (cnt === 0) {
        cnt = parseInt(line);
    } else {
        input.push(line.split(' ').map(Number));

        if (input.length === cnt) {
            for (let i = 0; i < cnt; i++) {
                const [a, b] = input[i];
                console.log(`Case #${i + 1}: ${a + b}`);
            }

            rl.close();
        }
    }
});
