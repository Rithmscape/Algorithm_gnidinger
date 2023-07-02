const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let lines = [];

rl.question('', (line) => {
    lines = line.split(' ').map(Number);

    lines[0] = 1 - lines[0];
    lines[1] = 1 - lines[1];
    lines[2] = 2 - lines[2];
    lines[3] = 2 - lines[3];
    lines[4] = 2 - lines[4];
    lines[5] = 8 - lines[5];

    console.log(lines.join(' '));

    rl.close();
});
