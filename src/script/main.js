function main() {
    const baseUrl = 'https://api.themoviedb.org/3';
    const apiKey = 'facc9398a1973d590db59729cf20c800';
    const imageUrl = 'https://image.tmdb.org/t/p/w500';

    console.log('Main.js dijalankan');
    
    const getTrending = async () => {
        try {
            const response = await fetch(`${baseUrl}/movie/now_playing?api_key=${apiKey}&language=id-ID&page=1`);
            const responseJson = await response.json();

            if (responseJson.error) {
                responMessage(responseJson.message);
                console.log("responJson Message");
            } else {
                renderMovies(responseJson.results);
                // renderMovies2(responseJson.results);
            }
            } catch (error) {
                responMessage(error);
            }
    };

    // const renderMovies = (movies) => {
    //     console.log('RenderMOvie');
    //     const listMovieElement = document.querySelector('#listMovies');
    //     listMovieElement.innerHTML = '' ;
    //     movies.forEach(movie => {
    //         listMovieElement.innerHTML += `
    //         <div class="item">
    //             <img
    //                 class="w-100"
    //                 src="${imageUrl}${movie.poster_path}"
    //                 alt=""
    //             />
    //         </div>
    //         `;
    //     })
    // };

        const renderMovies = (movies) => {
        console.log('RenderMOvie');
        const listMovieElement = document.querySelector('#listMovies');
        listMovieElement.innerHTML = '' ;
        movies.forEach(movie => {
            const item = document.createElement('div');
            item.classList.add('item');
            const itemImage = document.createElement('img');
            itemImage.classList.add('w-100');
            itemImage.setAttribute('src', `${imageUrl}${movie.poster_path}`);
            item.append(itemImage);
            listMovieElement.append(item);
        })
            const carousel = document.querySelector('#listMovies');
            carousel.classList.add('owl-carousel', 'owl-theme');

            $(document).ready(function () {
                $(".owl-carousel").owlCarousel({
                    margin: 10,
                    nav: true,
                    loop: false,
                    rewind: true,
                    dots: false,
                    navElement: true,
                    autoplay: true,
                    autoplayTimeout: 2000,
                    autoplayHoverPause: true,
                    responsive: {
                        0: {
                            items: 1
                        },
                        600: {
                            items: 5
                        },
                        1000: {
                            items: 5
                        }
                    }
                }
            )
            });
    };

    //     const renderMovies2 = (movies) => {
    //     console.log('RenderMovie');
    //     const listMovieElement = document.querySelector('#Main-Slide');
    //     listMovieElement.innerHTML = '' ;
    //     movies.forEach(movie => {
    //         listMovieElement.innerHTML += `
    //         <div
    //             class="carousel-item"
    //             data-bs-interval="2000"
    //         >
    //             <img
    //                 class="d-block w-100"    
    //                 src="${imageUrl}${movie.backdrop_path}"            
    //                 alt="..."
    //             />
    //         </div>
    //         `;
    //     })
    // };

    const responMessage = (message = 'Check your internet connection') => {
        alert(message);
    };

    document.addEventListener('DOMContentLoaded', () => {
        console.log('Welcome');
        getTrending();
    });
    
}

export default main;