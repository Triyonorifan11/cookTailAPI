import './drinkItem.js'
class DrinkList extends HTMLElement {
    set drinks(drinks) {
        this._drinks = drinks;
        this.render()
    }


    renderError(message) {
        this.innerHTML = `
            <style>
                placeholder {
                    font-weight: lighter;
                    color: rgba(0, 0, 0, 0.5);
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                }
            </style>
        `;
        this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
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