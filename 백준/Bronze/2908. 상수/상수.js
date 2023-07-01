const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('', (line) => {
    let [a, b] = line.split(' ');

    a = Number(a[2] + a[1] + a[0]);
    b = Number(b[2] + b[1] + b[0]);

    console.log(Math.max(a, b));

    rl.close();
});