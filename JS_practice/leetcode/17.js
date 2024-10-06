var majorityElement = function (nums) {
    hashtables = {};
    let mx = 0;

    for (const num of nums) {
        // console.log(num);
        if (!hashtables[num]) {
            hashtables[num] = 1;
            // console.log(num);

        }
        else {
            hashtables[num]++;
            // console.log(num);

        }

        // console.log(hashtables[num]);a

        if (hashtables[num] >= mx) {
            console.log(num)
            mx = num;
            // console.log(num);
        }
    }

    // console.log(mx);
    return mx;

};


majorityElement([6, 5, 5])