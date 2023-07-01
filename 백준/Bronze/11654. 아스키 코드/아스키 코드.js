const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('', (line) => {
    console.log(line.charCodeAt(0));
    rl.close();
});
