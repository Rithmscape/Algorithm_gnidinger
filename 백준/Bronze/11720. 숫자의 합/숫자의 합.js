const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let n = 0;
let m = '';

rl.on('line', (line) => {
    if (n === 0) {
        n = Number(line);
    } else {
        m = line;
    }
}).on('close', () => {
    let sum = 0;

    for (let i = 0; i < n; i++) {
        sum += Number(m[i]);
    }

    console.log(sum);

    rl.close();
});
