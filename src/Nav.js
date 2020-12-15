import React from 'react' 
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { calculateTotal, totalItems } from './helpers'
import './Nav.css'

function Nav() {
    const cart = useSelector(st => st.cart)

    return (
        <nav className="NavBar navbar">
                <NavLink exact to="/" className="navbar-brand">
                    Products
                </NavLink>
            
            <NavLink exact to="/cart">
                {/* <span>Cart  {totalItems(cart)}</span> */}
                <i className="fas fa-shopping-cart fa-2x"><span className="item-count">{totalItems(cart)}</span>
                <span className="cart-total rounded p-1">{calculateTotal(cart).total}</span></i>
                
            </NavLink>
        </nav>
    )
}

export default Nav;