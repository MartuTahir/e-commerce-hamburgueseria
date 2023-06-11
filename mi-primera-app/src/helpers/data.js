import data from "../data/data.json"

export const requestData = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(()=> {
            resolve(data)
        },2000)
    })
}

export const requestItemId = (id) => {
    return new Promise((resolve,reject) => {
        const item = data.find((el) => el.id === id)
        item ? resolve(item) : reject({error: "No se encontro el producto"})
    })
}