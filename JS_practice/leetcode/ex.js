function countCharacters(str) {
    const charCount = {};
    for (const char of str) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }
    return charCount;
}


console.log(countCharacters('-1023-12093-0219'));