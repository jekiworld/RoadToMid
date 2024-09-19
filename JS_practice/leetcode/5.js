// const s = 'h'
// console.log(s.charCodeAt(0));

var scoreOfString = function (str) {
    let minus = 0;
    let plus = 0;
    for (let i = 0; i < str.length - 1; i++) {
        minus = str.charCodeAt(i) - str.charCodeAt(i + 1);
        if (minus < 0) {
            minus = minus * (-1);
        }
        // console.log(minus);
        plus = minus + plus;
        // console.log(plus);
    }
    console.log(plus);
    return plus;
};

scoreOfString('hello')