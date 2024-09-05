function getNumbersSum(num){
         return num.toString().split('').reduce(function(a, b) {
             return +a + +b;
         })
    }
    

function number(n){
    for(let i = 0; i <= n; i++){
        if(i%3==0 && i%5 !=0 && getNumbersSum(i) < 10){
            console.log(i);
        }
    }
}

number(1000);