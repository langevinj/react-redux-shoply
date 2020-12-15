import React, { useState } from 'react' 
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard'
import { calculateTotal } from './helpers'

function Cart() {
    const cart = useSelector(st => st.cart)
    const [discountCode, setDiscountCode] = useState("")
    const [formCode, setFormCode] = useState("")
    const [error, setError] = useState(false)

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
        <div className="container-fluid bg-light">
            <div className="row bg-light">
                <div className="col"></div>
                <div className="col"><h2>Your Cart:</h2></div>
                <div className="col"></div>
            </div>
            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <ul>
                        {cart ? Object.entries(cart).map(item => <li key={item[0]}><ProductCard id={item[0]} item={item[1]} /></li>) : null}
                    </ul></div>
                <div className="col"></div>
            </div>
            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="discount-field" className="form-label">Enter a discount code:</label>
                        <input type="text" name="discount-field" value={formCode} id="discount-field" onChange={handleChange} className="form-control"></input>
                        {error ? <p className="text-danger">Invalid discount code.</p> : null}
                        <button className="btn-primary rounded">Submit</button>
                    </form>
                </div>
                <div className="col"></div>
            </div>
            <div className="row">
                <div className="col"></div>
                <div className="col"><h2>Total: {calculateTotal(cart, discountCode)}</h2></div>
                <div className="col"></div>
            </div>
        </div>
    )
}

export default Cart;