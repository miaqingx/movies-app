// fetch movies list from api
const fetchMovies = async () => {
    const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'd2bbb5c32cmsha124b9476d4e22fp1e390bjsnc37732f82e20',
		'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
// get movies list
    const moviesList = document.getElementById('movies-list');
    result.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
            <p>${movie.rank}</p>
            <img src="${movie.image}" alt="${movie.title}">
            <h2>${movie.title}</h2>
            <p>${movie.description}</p>
            <p>Rating: ${movie.rating}</p>
            <p>Year: ${movie.year}</p>
            <p>Genre: ${movie.genre}</p>
            <p>imdbid: ${movie.imdbID}</p>
            <p>imdb_link: ${movie.imdbLink}</p>

        `;
        moviesList.appendChild(movieElement);
    });
} catch (error) {
	console.error(error);
}
}

fetchMovies();


