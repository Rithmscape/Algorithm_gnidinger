const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
    input.push(line.split(' '));
}).on('close', () => {
    let total = 0;
    let denominator = 0;

    for (let i = 0; i < input.length; i++) {
        denominator += Number(input[i][1]);

        if (input[i][2] === 'A+') {
            total += Number(input[i][1]) * 4.5;
        } else if (input[i][2] === 'A0') {
            total += Number(input[i][1]) * 4.0;
        } else if (input[i][2] === 'B+') {
            total += Number(input[i][1]) * 3.5;
        } else if (input[i][2] === 'B0') {
            total += Number(input[i][1]) * 3.0;
        } else if (input[i][2] === 'C+') {
            total += Number(input[i][1]) * 2.5;
        } else if (input[i][2] === 'C0') {
            total += Number(input[i][1]) * 2.0;
        } else if (input[i][2] === 'D+') {
            total += Number(input[i][1]) * 1.5;
        } else if (input[i][2] === 'D0') {
            total += Number(input[i][1]) * 1.0;
        } else if (input[i][2] === 'F') {
            total += Number(input[i][1]) * 0;
        } else if (input[i][2] === 'P') {
            denominator -= Number(input[i][1]);
        }
    }

    console.log(total / denominator);

    rl.close();
});
