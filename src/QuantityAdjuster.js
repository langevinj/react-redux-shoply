import React from 'react' 
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from './actions';

function QuantityAdjuster({ id }) {
    const cart = useSelector(st => st.cart)
    const dispatch = useDispatch();

    //handle addition or removal of targetted quantity of an item from a cart
    const handleChange = (evt) => {
        evt.preventDefault();
        if(evt.target.value > cart[id].qty){
            const x = evt.target.value - cart[id].qty
            for(let i=0; i<x; i++){
                dispatch(addToCart(id));
            }
        } else {
            const x = cart[id].qty - evt.target.value
            for (let i = 0; i < x; i++) {
                dispatch(removeFromCart(id));
            }
        }
    }

    return (
        <>
          <label htmlFor="productQuantity" className="form-label">QTY: </label>
          <input type="number" value={cart[id].qty} name="productQuantity" id="productQuantity" onChange={handleChange} className="form-control input-sm"></input>
        </>
    )
}

export default QuantityAdjuster;