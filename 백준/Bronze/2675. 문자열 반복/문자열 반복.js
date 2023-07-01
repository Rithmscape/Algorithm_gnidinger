const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let t = 0;
let input = [];

rl.on('line', (line) => {
    if (t === 0) {
        t = Number(line);
    } else {
        input.push(line.split(' '));
    }
}).on('close', () => {
    for (let i = 0; i < t; i++) {
        let r = Number(input[i][0]);
        let s = input[i][1];
        let result = '';

        for (j = 0; j < s.length; j++) {
            for (k = 0; k < r; k++) {
                result += s[j];
            }
        }

        console.log(result);

        rl.close();
    }
});
