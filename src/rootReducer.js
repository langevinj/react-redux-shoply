import { ADD, REMOVE } from './actionTypes'
const json_inventory = require('./data.json')

const INITIAL_STATE = { cart: {}, inventory: json_inventory.products }

function rootReducer(state = INITIAL_STATE, action) {
    console.log("reducer ran; state & action:", state, action);

    switch(action.type) {
        case ADD:
            const item = json_inventory.products[action.payload]
            if(state.cart[action.payload]){
                return { ...state, cart: {...state.cart, [action.payload]: {qty: state.cart[action.payload].qty + 1, ...item}}}
            } else {
                return { ...state, cart: { ...state.cart, [action.payload]: {qty: 1, ...item}}}
            }
        
        case REMOVE: 
            if(state.cart[action.payload]){
                if(state.cart[action.payload].qty === 1){
                    let {[action.payload]: omit, ...updatedCart} = state.cart
                    return { ...state, cart: { ...updatedCart}}
                }
                return { ...state, cart: { ...state.cart, [action.payload]: {...state.cart[action.payload], qty: state.cart[action.payload].qty - 1}}}
            } else {
                return state;
            }

            //could add an else here to throw error when item not in cart

        default:
            return state;
    }
}

export default rootReducer;

// return { ...state, cart: state.cart.filter(item => item.id !== action.payload) }