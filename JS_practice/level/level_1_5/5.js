function check(string){
    for(let i = string.length-1; i >= 0; i--){
        console.log(string[i]);
    }
};

check("Bakhredin");


function check(string) {
    console.log(string.split('').reverse().join(''));
}

check("Bakhredin"); // Выведет "niderhkaB"
