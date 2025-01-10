/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let right = 1;
    let left = 0;
    let res = 0;

    while(right < prices.length){
        if(prices[right] > prices[left]){
            res = Math.max(res, prices[right] - prices[left]);
            right++;
        } else {
            left = right;
            right++;
        };
    }
    console.log(res);
    return res;
};
