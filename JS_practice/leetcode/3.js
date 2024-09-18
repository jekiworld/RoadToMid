var groupAnagrams = function (strs) {
    let hashmap = {};

    for (const word of strs) {
        let sortedword = word.split('').sort().join('');

        if (!hashmap[sortedword]) {
            hashmap[sortedword] = [];
        }

        if(hashmap[sortedword]){
            hashmap[sortedword].push(word);
        }
    }
    return Object.values(hashmap)
};