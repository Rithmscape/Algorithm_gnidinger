const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let lines = [];

rl.on('line', function (line) {
    lines.push(line);
}).on('close', function () {
    let n = Number(lines[0]);
    let arr = lines[1].split(' ').map(Number);
    let v = Number(lines[2]);

    const count = arr.filter(item => item === v).length;

    console.log(count);
    process.exit();
});
