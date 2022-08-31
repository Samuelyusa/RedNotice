import { async } from "regenerator-runtime";
import DataSource from "./data/data-source.js";
import './movie-list.js';

function main() {
    const baseUrl = 'https://api.themoviedb.org/3';
    const apiKey = 'facc9398a1973d590db59729cf20c800';
    const imageUrl = 'https://image.tmdb.org/t/p/w500';
    const nowPlayingUrl = '/movie/now_playing?api_key=';
    const populerUrl = '/movie/popular?api_key=';

    const getNowPlaying = async () => {
        try {
            const response = await fetch(`${baseUrl}${nowPlayingUrl}${apiKey}&language=id-ID&page=1`);
            const responseJson = await response.json();
            if (responseJson.error) {
                responMessage(responseJson.message);
            } else {
                renderMovies(responseJson.results.slice(0, 10));
            }
            } catch (error) {
                responMessage(error);
            }
    };

    const getPopuler = async () => {
        try {
            const response = await fetch(`${baseUrl}${populerUrl}${apiKey}&language=en-US&page=1`);
            const responseJson = await response.json();
            if (responseJson.error) {
                responMessage(responseJson.message);
            } else {
                populerMovies(responseJson.results.slice(0, 10));
            }
        } catch (error) {
            responMessage(error);
        }
    };

        const renderMovies = (movies) => {

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
                        1400: {
                            items: 5
                        },
                        1900: {
                            items: 7
                        }
                    }
                }
            )
            });
    };

    const populerMovies = (movies) => {
        const listMainSlide = document.querySelector('#top-slide');
        listMainSlide.innerHTML = '';
        const inner = document.createElement('div');
        inner.setAttribute('id', 'inner');
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
        listMainSlide.classList.add('carousel', 'slide');
        listMainSlide.setAttribute('data-bs-ride', "carousel");
        inner.classList.add('carousel-inner');
        const item = document.querySelector('.slide_item');
        item.classList.add('active');
    }

    const responMessage = (message = 'Check your internet connection') => {
        alert(message);
    };

    document.addEventListener('DOMContentLoaded', () => {
        getNowPlaying();
        getPopuler();

        DataSource();
        const trendingListElement = document.createElement('trending-list');
        trendingListElement.classList.add('row', 'row-cols-1', 'row-cols-sm-2', 'row-cols-md-2', 'g-4');
        const container2 = document.querySelector('#Trending_Movies');
        container2.append(trendingListElement);
    });
    
}

export default main;