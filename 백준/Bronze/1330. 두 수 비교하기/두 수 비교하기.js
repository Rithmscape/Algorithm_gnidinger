const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('', (line) => {
    const [a, b] = line.split(' ').map(Number);

    if (a > b) {
        console.log('>');
    } else if (a < b) {
        console.log('<');
    } else {
        console.log('==');
    }

    rl.close();
});