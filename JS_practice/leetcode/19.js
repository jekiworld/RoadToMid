var findDuplicate = function (nums) {
    let hashtable = {};

    for (let num of nums) {
        if (!hashtable[num]) {
            hashtable[num] = 1;
        } else {
            hashtable[num]++;
        }
    }

    const key = Object.keys(hashtable).reduce((acc, cv) => {
        if (hashtable[cv] > hashtable[acc]) {
            return cv;  
        } else {
            return acc;  
        }
    }, Object.keys(hashtable)[0]); 

    console.log(hashtable);  

    console.log(key)
    return parseInt(key);

};

findDuplicate([3, 3, 3, 3, 3])