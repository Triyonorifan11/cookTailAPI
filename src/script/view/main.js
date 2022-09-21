import '../components/drinkList.js'
import '../components/search.js'
import CocktailAPI from '../data/cocktailAPI.js'

const main = () => {
    const searchInputUser = document.querySelector('search-element')
    const drinkList = document.querySelector('drink-list')

    const renderResult = result => {
        drinkList.drinks = result
    }

    const fallBackResult = messageResult => {
        drinkList.renderError(messageResult)
    }

    const onButtonSearchClicked = async () => {
        try {
            const resultCocktail = await CocktailAPI.searchCoctail(searchInputUser.value)
            renderResult(resultCocktail)
        } catch (message) {
            fallBackResult(message)
        }
    }

    searchInputUser.eventClick = onButtonSearchClicked;
}


export default main