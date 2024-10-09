const input = document.getElementById('search');
const button = document.getElementById('searchButton');
const movie_catalog = document.getElementById('movie_catalog')
const apiKey = 'f791343b';
const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${input.value}`;


button.addEventListener('click', function () {
    async function fetchData() {
        try {
            const response = await fetch(url)
            const data = await response.json();
            movie(data.Search);
        } catch (error) {
            console.log('Error', error);
        }
    }
    fetchData();
})

function movie(films) {
    console.log(films.length);
    for (let i = 0; i < films.length; i++) {
        let movie = document.createElement('div');
        movie.className = `${i}_movie`
        movie.innerHTML = `${films[i].Title} - ${films[i].Year}`
        movie_catalog.append(movie);
    }
}



