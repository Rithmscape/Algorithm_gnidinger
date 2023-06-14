const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('', (line) => {
    console.log(parseInt(line) - 543);
    rl.close();
});
