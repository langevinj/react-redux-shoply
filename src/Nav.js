import React, { useEffect } from 'react' 
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { calculateTotal, totalItems } from './helpers'
import useLocalStorage from './hooks'
import './Nav.css'

//renders the navbar
function Nav() {
    const cart = useSelector(st => st.cart)
    const [storedCart, setStoredCart] = useLocalStorage("cart")

    //whenever the cart is updated by redux, also update the locally stored cart
    useEffect(() => {
        function updateLocalCart(){
            setStoredCart(storedCart => cart)
        }
        updateLocalCart()
    }, [cart])

    return (
        <nav className="NavBar navbar">
                <NavLink exact to="/" className="navbar-brand">
                    Products
                </NavLink>
            
            <NavLink exact to="/cart">
                <i className="fas fa-shopping-cart fa-2x"><span className="item-count">{totalItems(cart)}</span>
                <span className="cart-total rounded p-1">{calculateTotal(cart).total}</span></i>
            </NavLink>
        </nav>
    )
}

export default Nav;