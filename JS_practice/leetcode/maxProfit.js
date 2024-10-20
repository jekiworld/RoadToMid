var maxProfit = function(prices) {
    let right = 1;
    let left = 0;
    let res = 0;

    while (right < prices.length) {
        if (prices[right] > prices[left]) {
            res = Math.max(res, prices[right] - prices[left]);
        } else {
            left = right;
        };
        right++;

    }
    console.log(res);
    return res;
};

maxProfit([1,2]);