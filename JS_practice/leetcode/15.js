var myAtoi = function (s) {

    // let num = parseInt(s);
    // if (isNaN(s)) {
    //     num = 0;
    //     console.log(num);
    //     return num
    // }
    // console.log(num);
    // return num;
    // const newarray = [];


    // const newarray = s.split('').filter(function (n) {
    //     if(n.charCodeAt(0) >= 49 && n.charCodeAt(0) <= 57 || n.charCodeAt(0) === 45){
    //         return n.charCodeAt(0)
    //     } else {
    //         break
    //     }
    // })
    // let newarray2 = newarray.join('');
    // let newarray3 = parseInt(newarray2);

    // console.log(newarray3);
    let newarray = [];


    for (let i = 0; i < s.length; i++) {
        if (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57 || s.charCodeAt(i) === 45) {
            newarray.push(s[i]);
        } else {
            break;
        }
    }

    let res = newarray.join('')
    if(res.length !== 0){
        let int = parseInt(res);
        console.log(int, typeof(int));
        return int; 
    } else{
        return 0;
    }
   




};

myAtoi("-1337c0d3")