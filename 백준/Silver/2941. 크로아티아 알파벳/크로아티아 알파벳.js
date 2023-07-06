const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('', (line) => {
    line = line.replace(/c=/g, 'A');
    line = line.replace(/c-/g, 'A');
    line = line.replace(/dz=/g, 'A');
    line = line.replace(/d-/g, 'A');
    line = line.replace(/lj/g, 'A');
    line = line.replace(/nj/g, 'A');
    line = line.replace(/s=/g, 'A');
    line = line.replace(/z=/g, 'A');

    console.log(line.length);

    rl.close();
});
