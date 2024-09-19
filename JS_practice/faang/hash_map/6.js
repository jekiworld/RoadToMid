var romanToInt = function (string) {
    const object = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let previousvalue = 0;
    let sum = 0;

    for (let i = 0; i < string.length; i++) {

        const symbol = string[i];
        const value = object[symbol];
        if (value <= previousvalue) {
            sum = value + sum;
            console.log(sum);

        } else {
            sum = sum + value - previousvalue * 2;
        }
        previousvalue = value;
    }
    console.log(sum);
    return sum;
};


romanToInt('MCMXCIV');








// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000