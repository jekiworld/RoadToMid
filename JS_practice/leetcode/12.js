var topKFrequent = function (nums, k) {

    const hashmap = {};

    for (const value of nums) {
        if (!hashmap[value]) {
            hashmap[value] = 1;
        } else {
            hashmap[value]++;
        }
    }

    const sortedEntries = Object.entries(hashmap).sort((a, b) => b[1] - a[1]);

    const result = sortedEntries.slice(0, k).map(entry => entry[0]);

    return result;


};

console.log(topKFrequent([1,1,1,2,2,2,2,3], 2));