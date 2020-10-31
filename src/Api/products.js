import Products from '../Api/products.json';

export function getAll(){
    return Promise.resolve(Products);
}
export function getElementByID(id){
    const product = Products.find(item => item.id === id);

    return Promise.resolve(product);
}
export default {
    getAll , getElementByID
}