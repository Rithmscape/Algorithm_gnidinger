const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let lines = [];

rl.on('line', (line) => {
    lines.push(line);
}).on('close', () => {
    for (let str of lines) {
        console.log(str);
    }

    rl.close();
});
