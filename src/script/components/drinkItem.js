class DrinkItem extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    set drink(drink) {
        this._drink = drink
        this.render()
    }

    get valueID() {
        return this.getAttribute('data-id')
    }

    render() {
        this.innerHTML = `
        
            <div class="col-lg-12">
                <div class="card mb-3 shadow-sm">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${this._drink.strDrinkThumb}"
                                class="img-fluid rounded-start" height="100%" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${this._drink.strDrink}</h5>
                                <p class="card-text">Instruction: ${this._drink.strInstructions}</p>
                                <p class="card-text">
                                    <small class="text-muted">Last updated on ${this._drink.dateModified}</small>
                                    <button type="button" class="btn btn-primary btn-sm ms-3 showmodalInfo" id="showmodalInfo" data-bs-toggle="modal"
                                        data-bs-target="#example" data-id="${this._drink.idDrink}">info</button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        `

    }
}

customElements.define('drink-item', DrinkItem)