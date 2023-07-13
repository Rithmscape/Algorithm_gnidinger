const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    let [n, m] = input[0].split(' ').map((a) => Number(a));
    let A = [];
    let B = [];
    let C = [];

    for (let i = 1; i <= n; i++) {
        A.push(input[i].split(' ').map((a) => Number(a)));
    }

    for (let i = n + 1; i <= 2 * n; i++) {
        B.push(input[i].split(' ').map((a) => Number(a)));
    }

    for (let i = 0; i < n; i++) {
        let tmp = [];
        for (let j = 0; j < m; j++) {
            tmp.push(A[i][j] + B[i][j]);
        }
        C.push(tmp);
    }

    C.forEach((row) => console.log(row.join(' ')));

    rl.close();
});
