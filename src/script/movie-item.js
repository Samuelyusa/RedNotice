class TrendingItem extends HTMLElement {
    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    render() {
        const imageUrl = 'https://image.tmdb.org/t/p/w500';
        this.innerHTML = `
        <div class="card mb-3 bg-secondary h-100">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${imageUrl}${this._movie.poster_path}" class="img-fluid rounded-start trending-card" alt="">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${this._movie.original_title}</h5>
                        <p class="card-text">${this._movie.overview}</p>
                        <p class="card-text"><small class="text-muted">Release date ${this._movie.release_date}</small></p>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
    }

customElements.define('trending-item', TrendingItem);