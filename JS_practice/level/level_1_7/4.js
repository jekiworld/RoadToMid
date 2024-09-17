function summer(a){

    let number = (a.toString().split(''));
    let res = 0;
    digit = 0;
    for(let i = 0; i <= number.length -1; i++){
        digit = parseInt(number[i]);
        console.log(digit);
        res = res + digit;
    }
    console.log(res);

}

summer(112323)