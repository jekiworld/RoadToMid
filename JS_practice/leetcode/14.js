var countConsistentStrings = function (allowed, words) {
    const symbol = new Set(allowed);
    let count = 0;

    for(const word of words){
        for(char of word){
            if(!symbol.has(char)){
                count++;
                break;
            }
        }
    }
    console.log(words.length - count);

};

countConsistentStrings("ab", ["ad","bd","aaab","baa","badab"])