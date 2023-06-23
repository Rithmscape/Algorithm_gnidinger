const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('', (line) => {
    const a = parseInt(line);
    let grade = '';

    if (a >= 90) {
        grade = 'A';
    } else if (a >= 80) {
        grade = 'B';
    } else if (a >= 70) {
        grade = 'C';
    } else if (a >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    console.log(grade);
    rl.close();
});
