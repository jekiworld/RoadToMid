var merge = function (intervals) {
    // for(const array of intervals){
    //     console.log(intervals);
    // }
    intervals.sort((a, b) => a[0] - b[0]);

    const result = [];

    for (let i = 0; i < intervals.length; i++) {
        if (result.length === 0 || result[result.length - 1][1] < intervals[i][0]) {
            result.push(intervals[i]);
        } else {
            result[result.length - 1][1] = Math.max(result[result.length - 1][1], intervals[i][1]);
        }
    }

    console.log(result);
    return result;
}

merge([[1, 3], [2, 6], [8, 10], [15, 18]])