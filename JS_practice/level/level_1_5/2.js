function check() {
    let sum = 0;
    for (let i = 0; i <= 100; i++) {
        if (i % 2 == 0) {
            sum = sum + i;
        };
    };
    console.log(sum);
}

check();