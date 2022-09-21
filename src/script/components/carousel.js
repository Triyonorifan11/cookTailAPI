class Carousel extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://www.carousel-bars.co.uk/wp-content/uploads/2022/03/CarouselCocktails-13-e1646238947481-700x450.jpg"
                        class="d-block w-100 img-max-height" alt="1">
                </div>
                <div class="carousel-item">
                    <img src="https://www.carousel-bars.co.uk/wp-content/uploads/2022/02/CarouselImages-32-700x450.jpg"
                        class="d-block w-100 img-max-height" alt="2">
                </div>
                <div class="carousel-item">
                    <img src="https://www.carousel-bars.co.uk/wp-content/uploads/2022/03/CarouselImages-19-700x450.jpg"
                        class="d-block w-100 img-max-height" alt="3">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        `
    }
}

customElements.define('img-carousel', Carousel)