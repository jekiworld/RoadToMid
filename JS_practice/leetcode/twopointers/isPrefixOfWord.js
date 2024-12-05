/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {
    let f = 0;
    let s = 0;
    let test = [];

    while (s < searchWord.length) {
        if (sentence[f] === searchWord[s]) {
            s++;
            test.push(searchWord[s]);
        } else if (sentence[f] !== searchWord[s]) {
            s = 0;
            test = [];
        }
        f++;
    }

    console.log(test);
    



};

isPrefixOfWord("i love eating burger", "burg")