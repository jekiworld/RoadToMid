var maxOperations = function (nums, k) {
    let sortedArray = nums.sort((a, b) => a - b);

    console.log(sortedArray);
    let left = 0;
    let right = nums.length - 1;
    let cnt = 0;    
    while (left < right) {
        if (sortedArray[right] + sortedArray[left] === k) {
            cnt++;
            left++;
            right--;
        }
        else if (sortedArray[left] + sortedArray[right] < k) {
            left++
        }
        else {
            right--
        }
    }
    return cnt;

};