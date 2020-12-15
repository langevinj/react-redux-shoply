import { ADD, REMOVE } from './actionTypes'

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