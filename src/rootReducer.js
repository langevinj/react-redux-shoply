import { ADD, REMOVE, INITIALUPDATE } from './actionTypes'
const json_inventory = require('./data.json')

const INITIAL_STATE = { cart: {}, inventory: json_inventory.products }

function rootReducer(state = INITIAL_STATE, action) {
    // uncomment the line below to view reducer running as actios are taken
    // console.log("reducer ran; state & action:", state, action);

    switch(action.type) {
        case ADD:
            const item = json_inventory.products[action.payload]
            if(!state.cart){
                return { ...state, cart: { ...state.cart, [action.payload]: { qty: 1, ...item } } }
            }
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
        
        case INITIALUPDATE:
            return { ...state, cart: action.payload }

        default:
            return state;
    }
}

export default rootReducer;