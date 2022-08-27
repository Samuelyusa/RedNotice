function DataSource() {
        const baseUrl = 'https://api.themoviedb.org/3';
        const apiKey = 'facc9398a1973d590db59729cf20c800';

        const weekTrendingUrl = '/trending/movie/week?api_key=';

        const getTrending = async () => {
            try {
                const response = await fetch(`${baseUrl}${weekTrendingUrl}${apiKey}&language=id-ID`);
                const responseJson = await response.json();

                if (responseJson.error) {
                    responMessage(responseJson.message);

                } else {
                    renderTrending(responseJson.results);
                }
                } catch (error) {
                    responMessage(error);
                }
    };

    const renderTrending = (movies) => {
        const trendListElement = document.querySelector('trending-list');
        trendListElement.movies = movies;
    }

    const responMessage = (message = 'Check your internet connection') => {
        alert(message + 'Data Source');
    };

    getTrending();
    }

export default DataSource;