const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('', (line) => {
    const n = parseInt(line);
    result = '';

    for (let i = n; i >= 4; i -= 4) {
        result += 'long ';
    }

    console.log(result + 'int');

    rl.close();
});
