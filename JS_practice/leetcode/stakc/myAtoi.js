/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const stack = [];
    let i = 0;
    const n = s.length;
    let minus = false;

    while(i < n && s[i]===" "){
        i++;
    }

    if (s[i] === "-") {
        minus = true;
        i++;
    } else if (s[i] === "+") {
        i++;
    }

    while(i < n && s[i] >= "0" && s[i] <= "9"){
        stack.push(Number(s[i]));
        i++;
    }

    let result = 0;

    if (stack.length > 0) {
        result = parseInt(stack.join(""), 10);
    }

    if(minus){
        result = -result;
    }

    console.log(result,typeof result );

};

myAtoi("-1337c0d3");