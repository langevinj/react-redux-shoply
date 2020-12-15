import React from 'react' 
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard'

function Cart() {
    const cart = useSelector(st => st.cart)

    const calculateTotal = () => {
        let sum = 0;
        const prices = Object.entries(cart).map(item => item[1].price * item[1].qty)
        const reducer = (acc, currVal) => acc + currVal;
        return prices.reduce(reducer).toFixed(2)
    }

    return (
        <div className="container-fluid">
            <div className="row bg-white">
                <div className="col"><Link to="/">Products</Link></div>
                <div className="col"><h2>Your Cart:</h2></div>
                <div className="col"></div>
            </div>
            <div className="row bg-light">
                <div className="col"></div>
                <div className="col">
                    <ul>
                        {cart ? Object.entries(cart).map(item => <li key={item[0]}><ProductCard id={item[0]} item={item[1]} /></li>) : null}
                    </ul></div>
                <div className="col"></div>
            </div>
            <div className="row bg-white">
                <div className="col"></div>
                <div className="col"><h2>Total: {calculateTotal()}</h2></div>
                <div className="col"></div>
            </div>
        </div>
    )
}

export default Cart;