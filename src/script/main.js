import main_slide from "./main_slide";

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
                renderMovies2(responseJson.results);
                // main_slide();
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
                            items: 3
                        },
                        1000: {
                            items: 5
                        }
                    }
                }
            )
            });
    };
    const renderMovies2 = (movies) => {
        console.log("funct Main Slide Execute");

        const listMainSlide = document.querySelector('#top-slide');
        listMainSlide.innerHTML = '';
        // const container = document.createElement('div');
        // container.setAttribute('id', 'container');
        // const indicator = document.createElement('div');
        // indicator.setAttribute('id', 'indicator');
        const inner = document.createElement('div');
        inner.setAttribute('id', 'inner');
        // indicator.append(inner);
        // container.append(indicator);
        listMainSlide.append(inner);
        
        const listInnerSlide = document.querySelector('#inner');
        listInnerSlide.innerHTML = '';
        movies.forEach(movie => {
            listInnerSlide.innerHTML += `
            <div
                class="slide_item carousel-item"
                data-bs-interval="2000"
            >
                <img
                    class="d-block w-100 rounded"    
                    src="${imageUrl}${movie.backdrop_path}"            
                    alt=""
                />
                <div class="carousel-caption d-none d-md-block">
                    <h2>${movie.original_title}</h2>
                    <p>Some representative placeholder content for the third slide.</p>
                </div>
            </div>
                `;
        })
        // container.classList.add('carousel', 'slide');
        listMainSlide.classList.add('carousel', 'slide');
        // container.setAttribute('data-bs-ride', "carousel");
        listMainSlide.setAttribute('data-bs-ride', "carousel");
        // indicator.classList.add('carousel-indicators');
        inner.classList.add('carousel-inner');
        const item = document.querySelector('.slide_item');
        item.classList.add('active');

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