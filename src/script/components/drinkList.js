import './drinkItem.js'
class DrinkList extends HTMLElement {
    set drinks(drinks) {
        this._drinks = drinks;
        this.render()
    }


    renderError(message) {
        this.innerHTML = `
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>${message}!</strong> refresh again.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      `;
    }

    render() {
        this.innerHTML = '';
        this._drinks.forEach(drink => {
            const drinkItem = document.createElement('drink-item')
            drinkItem.drink = drink;
            this.appendChild(drinkItem)
        });
    }
}

customElements.define('drink-list', DrinkList)