const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("", (line) => {
    const [a, b] = line.split(" ").map(Number);
    console.log(a + b);
    readline.close();
});