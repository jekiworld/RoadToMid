async function fetchData(url) {
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Ошибка: ${response.status}`)
        }
        let data = await response.json();
        console.log("Данные:", data);
    }
    catch (error) {
        console.log("Произошла ошибка при загрузке данных:", error.message);
    } finally {
        console.log("Завершение запроса");
    }
}

fetchData("https://jsonplaceholder.typicode.com/posts/1");