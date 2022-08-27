class ArticleItem extends HTMLElement {
    set article(article) {
        this._article = article;
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="card mb-3 bg-secondary">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${this._article.featuredImage}" class="img-fluid rounded-start" alt="">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${this._article.title}</h5>
                        <p class="card-text">${this._article.description}</p>
                        <p class="card-text"><small class="text-muted">Article id ${this._article.id}</small></p>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
    }

customElements.define('article-item', ArticleItem);