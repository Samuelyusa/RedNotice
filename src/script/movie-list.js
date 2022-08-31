import './movie-item.js'

    class TrendingList extends HTMLElement {
        set movies(movies) {
            this._movies = movies;
            this.render();
        }

        render() {
            this._movies.forEach(movie => {
                const movieItemElement = document.createElement('trending-item');
                movieItemElement.classList.add('col');
                
                movieItemElement.movie = movie;
                this.appendChild(movieItemElement);
            });
        }
    }

customElements.define('trending-list', TrendingList);