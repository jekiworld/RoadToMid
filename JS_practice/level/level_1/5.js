function check(a, b) {
    return a[0] == b[0];
};


function check2(a, b) {
    console.log(check(a, b));
    console.log(a, b[0]);
    console.log(typeof a);
    console.log(typeof b);
}

check2("12", "12");


