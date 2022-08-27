    const baseUrl = 'https://api.themoviedb.org/3';
    const apiKey = 'facc9398a1973d590db59729cf20c800';
    const trendingUrl = '/trending/movie/week?api_key=';

    const getTrendings = async () => {
        try {
            const response = await fetch(`${baseUrl}${trendingUrl}${apiKey}`);
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