var isHappy = function (n) {
    let result = 0;
    let pow = 0;
    let i = 0;
    while (result === 1) {
        i++;
        if(n >= 10){
            pow = n%10 * n%10;
        } else{
            pow = n * n;
        }
        result = pow + result;
        if(i === 25){
            console.log(false);
            return false;
        }
        n = n%10;
        console.log(result);
        console.log(true);
        return true;
        
    }
};

isHappy(2);