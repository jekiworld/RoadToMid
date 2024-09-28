var findWordsContaining = function (words, x) {
    const out = [];
    let cnt = 0;
    for (let i = 0; i < words.length; i++) {
        cnt++;
        let newarr = words[i].split('')
        for (let i = 0; i < newarr.length; i++) {
            if (x === newarr[i]) {
                console.log(`${x} = ${newarr[i]}`)
                out.push(cnt - 1);
                break;
            }
        }
    }
    console.log(out);
};

findWordsContaining(["abc","bcd","aaaa","cbc"], "a")