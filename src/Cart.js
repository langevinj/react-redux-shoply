import React, { useState } from 'react' 
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard'

function Cart() {
    const cart = useSelector(st => st.cart)
    const [discountCode, setDiscountCode] = useState("")
    const [formCode, setFormCode] = useState("")
    const [error, setError] = useState(false)

    const calculateTotal = () => {
        const prices = Object.entries(cart).map(item => item[1].price * item[1].qty)
        if(!prices.length > 0){
            return 0
        }
        const reducer = (acc, currVal) => acc + currVal;
        let cartTotal = prices.reduce(reducer)
        if(discountCode === "REMOVE10"){
            return (cartTotal * 0.90).toFixed(2)
        } else if (discountCode === "REMOVE20"){
            return (cartTotal * 0.80).toFixed(2)
        } else if (discountCode === "REMOVE30") {
            return (cartTotal * 0.70).toFixed(2)
        } else {
            return cartTotal.toFixed(2)
        }
    }

    const handleChange = (evt) => {
        setFormCode(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if(!["REMOVE10", "REMOVE20", "REMOVE30"].includes(formCode)){
            setError(true)
        } else {
            setDiscountCode(formCode)
            setFormCode("")
            setError(false)
        }
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
                <div className="col">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="discount-field">Enter a discount code:</label>
                        <input type="text" name="discount-field" value={formCode} id="discount-field" onChange={handleChange}></input>
                        {error ? <p className="text-danger">Invalid discount code.</p> : null}
                        <button>Submit</button>
                    </form>
                </div>
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