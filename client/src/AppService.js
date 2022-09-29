const baseCupboardURL = 'http://localhost:9000/api/cupboard'

export const getCupboard = () => {
    return fetch(baseCupboardURL)
        .then(res => res.json())
}