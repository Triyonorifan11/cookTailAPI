class SearchCocktail extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    set eventClick(event) {
        this._eventClick = event
        this.render()
    }

    get valueInput() {
        return this.querySelector('#searchInput').value
    }

    render() {
        this.innerHTML = `
            <div class="d-flex justify-content-center py-3" role="search">
                <input class="form-control me-2" type="search" id="searchInput" placeholder="Search for a cocktail ..." aria-label="Search" autocomplete="off"
                    required>
                <button class="btn btn-outline-primary" id="searchButton" type="submit">Search</button>
            </div>
        `
        this.querySelector('#searchButton').addEventListener('click', this._eventClick)
    }
}

customElements.define('search-element', SearchCocktail)