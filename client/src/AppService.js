const baseCupboardURL = 'http://localhost:9000/api/cupboard'
const baseRecipesURL = 'http://localhost:9000/api/recipes'

export const getCupboard = () => {
    return fetch(baseCupboardURL)
        .then(res => res.json())
}

export const getRecipes = () => {
    return fetch(baseRecipesURL)
        .then(res => res.json())
}

export const postIngredient = (payload) => {
    return fetch(baseCupboardURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        header: { 'Content-Type': 'application/json' }
    })
        .then(res => res.json())
}

const RecipeService = {
    getIngredients() {
        return fetch(baseCupboardURL)
            .then(res => res.json())
    },

    postIngredient(payload) {
        return fetch(baseCupboardURL, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
    },

    deleteIngredient(id) {
        return fetch(baseCupboardURL + id, {
            method: 'DELETE'
        })
    }
}

export default RecipeService
