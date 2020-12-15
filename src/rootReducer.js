import { ADD, REMOVE } from './actionTypes'

const INITIAL_STATE = { cart: [] }

function rootReducer(state = INITIAL_STATE, action) {
    console.log("reducer ran; state & action:", state, action);

    switch(action.type) {
        case ADD:
            return { ...state, cart: [...state.cart, action.payload]}
        
        case REMOVE: 
            return { ...state, cart: state.cart.filter(item => item.id !== action.payload)}

        default:
            return state;
    }
}

export default rootReducer;