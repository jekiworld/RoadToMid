function delay(ms) {
    return new Promise(resolve => setTimeout(resolve,ms));

}

delay(2000).then(() => console.log('Прошло 2 секунды'));

setTimeout(()=>{console.log("Прошло 2 секунды")}, (2000))  


