const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('', (line) => {
    const word = line;

    let is_palindrome = true;

    for (i = 0; i < word.length / 2; i++) {
        if (word[i] !== word[word.length - i - 1]) {
            is_palindrome = false;
        }
    }

    if (is_palindrome) {
        console.log(1);
    } else {
        console.log(0);
    }

    rl.close();
});
