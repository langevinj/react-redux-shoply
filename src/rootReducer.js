import { ADD, REMOVE } from './actionTypes'
const json_inventory = require('./data.json')

const INITIAL_STATE = { cart: [], inventory: json_inventory.products }

function rootReducer(state = INITIAL_STATE, action) {
    console.log("reducer ran; state & action:", state, action);

    switch(action.type) {
        case ADD:
            const item = json_inventory.products[action.payload]
            return { ...state, cart: [...state.cart, {...item, id: action.payload}]}
        
        case REMOVE: 
            return { ...state, cart: state.cart.filter(item => item.id !== action.payload)}

        default:
            return state;
    }
}

export default rootReducer;