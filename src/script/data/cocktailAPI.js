class CockTailAPI {
    static searchCoctailByName(keyword) {
        return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyword}`)
            .then(response => { return response.json() })
            .then(resposeJSON => {
                if (resposeJSON.drinks) {
                    return Promise.resolve(resposeJSON.drinks)
                } else {
                    return Promise.reject(`Cocktail dengan nama "${keyword}" tidak ditemukan`)
                }
            })
    }
}

export default CockTailAPI