const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('', (line) => {
    const alp = 'abcdefghijklmnopqrstuvwxyz';
    const result = new Array(26).fill(-1);

    for (let i = 0; i < line.length; i++) {
        const index = alp.indexOf(line[i]);

        if (result[index] === -1) {
            result[index] = i;
        }
    }

    console.log(result.join(' '));

    rl.close();
});
