const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('', (line) => {
    let chars = line.toUpperCase().split('');
    let count = {};
    let result = '';

    for (let char of chars) {
        if (char in count) {
            count[char] += 1;
        } else {
            count[char] = 1;
        }
    }

    const values = Object.values(count);
    const max = Math.max(...values);
    const maxchar = Object.keys(count).filter((a) => count[a] === max);

    if (maxchar.length > 1) {
        result = '?';
    } else {
        result = maxchar[0];
    }

    console.log(result);
    rl.close();
});
