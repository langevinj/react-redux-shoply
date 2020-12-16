import { ADD, REMOVE, INITIALUPDATE } from './actionTypes'

export function addToCart(id) {
    return {
        type: ADD,
        payload: id
    };
}

export function removeFromCart(id) {
    return {
        type: REMOVE,
        payload: id
    };
}

export function updateInitialCart(cart) {
    return {
        type: INITIALUPDATE,
        payload: cart
    }
}