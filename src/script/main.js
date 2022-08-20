function main() {
    const baseUrl = 'https://api.themoviedb.org/3';
    const apiKey = 'facc9398a1973d590db59729cf20c800';
    const imageUrl = 'https://image.tmdb.org/t/p/w500';
    const Trial = 'https://image.tmdb.org/t/p/w500/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg';
    console.log('Main.js dijalankan');
    
    const getTrending = async () => {
        try {
            const response = await fetch(`${baseUrl}/movie/now_playing?api_key=${apiKey}&language=id-ID&page=1`);
            const responseJson = await response.json();

            if (responseJson.error) {
                responMessage(responseJson.message);
            } else {
                renderMovies(responseJson.results);
            }
            } catch (error) {
                responMessage(error);
            }
    };

    const renderMovies = (movies) => {
        const listMovieElement = document.querySelector('#listMovies');
        listMovieElement.innerHTML = '';
        movies.forEach(movie => {
            listMovieElement.innerHTML += `
            <div class="item">
                <img
                    class="w-100"
                    src="${imageUrl}${movie.poster_path}"
                    alt=""
                />
            </div>
            `;
        });
    };

    const responMessage = (message = 'Check your internet connection') => {
        alert(message);
    };

    document.addEventListener('DOMContentLoaded', () => {
        console.log('Welcome');
    getTrending();
    });
    
}

export default main;