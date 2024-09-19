var groupAnagrams = function (strs) {
    let hashmap = {};
    for (const word of strs) {
        let sorted = word.split('').sort().join('');

        if(!hashmap[sorted]){
            hashmap[sorted]=[];
        }

        if(hashmap[sorted]){
            hashmap[sorted].push(word);
        }
    }
    console.log(Object.values(hashmap));
    return Object.values(hashmap);
};


groupAnagrams(['k', 'aet', 'tae', 'sd'])