const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let str = '';
let index = 0;

rl.on('line', (line) => {
    if (!str) {
        str = line;
    } else {
        index = Number(line);
    }
}).on('close', () => {
    console.log(str[index - 1]);

    rl.close();
});
