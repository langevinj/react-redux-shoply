import { ADD, REMOVE } from './actionTypes'

export function addToCart() {
    return {
        type: ADD
    };
}

export function removeFromCart() {
    return {
        type: REMOVE
    };
}