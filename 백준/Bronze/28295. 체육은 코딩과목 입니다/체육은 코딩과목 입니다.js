const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    const direction = ['N', 'E', 'S', 'W'];
    let cnt = 0;

    for (let n of input) {
        if (n === '1') {
            cnt += 1;
        } else if (n === '2') {
            cnt += 2;
        } else {
            cnt += 3;
        }
    }

    console.log(direction[cnt % 4]);

    rl.close();
});
