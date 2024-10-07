var majorityElement = function (nums) {
    let hashtable = {};

    for (const number of nums) {
        if (!hashtable[number]) {
            hashtable[number] = 1;
        }
        else {
            hashtable[number]++;
        }
    }
    let mv = 0;
    console.log(hashtable);
    const key = Object.keys(hashtable).reduce((acc, curValue) => {
        if (hashtable[curValue] > hashtable[acc]) {
            acc = curValue;
            console.log(`${acc} = ${curValue} `)
        }
        mv = acc;
        return acc;
    }, Object.keys(hashtable)[0])

    // console.log(mv);
    let int = parseInt(mv);
    // console.log(int);
    return int;


};

majorityElement([2, 2, 1, 1, 1, 2, 2]);