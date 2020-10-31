import { createStore, compose, applyMiddleware } from 'redux';
import thunk from "react"
import cartReducer from '../store/reducers/index.js';
import throttle from "lodash.throttle";
function loadState() {
    const state = localStorage.getItem('cart');
    if (state !== null) {
        return JSON.parse(state);
    }
    return {
        cart: []
    };
}
function saveState(state){
    console.log("Savign")
    localStorage.setItem('cart' , JSON.stringify(state));
}
const store = createStore(cartReducer, loadState());
store.subscribe( throttle(() => {
    saveState(store.getState());
}));
export default store;