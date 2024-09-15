/* const fetchData = () => Promise.resolve({
    data:['Jack', 'Max']
})

const fetchData1 = () => Promise.resolve({
    data:['Jack']
})

const getNamesData = () => {
    fetchData()
    .then(data => {
        console.log(data);
        return 'done';
    })
}


const getNamesData2 = async () => {
    console.log(await fetchData1());
    return 'done';
}

getNamesData();

getNamesData2(); */


const fetchData = () => fetch('https://jsonplaceholder.typicode.com/todos').then(data => data.json());

const getNamesData = async () => {
    try {
        setTimeout(async() => {
            const data = await fetchData(); // Дожидаемся разрешения промиса
            console.log(data); // Выведет промис, а не данные
        });
    } catch (error) {
        console.log(error);
    }
}

getNamesData();
 get
