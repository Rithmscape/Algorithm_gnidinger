const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    const n = Number(input[0]);
    let count = n;

    for (let i = 1; i <= n; i++) {
        const word = input[i];
        const check = [];
        let previous = '';

        for (let j = 0; j < word.length; j++) {
            if (previous !== word[j]) {
                if (check.indexOf(word[j]) !== -1) {
                    count--;
                    break;
                } else {
                    check.push(word[j]);
                    previous = word[j];
                }
            }
        }
    }
    console.log(count);
    rl.close();
});
