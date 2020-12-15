import React from 'react' 
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Nav() {
    const cart = useSelector(st => st.cart)
    return (
        <nav className="NavBar">
            <NavLink exact to="/">
                Products
            </NavLink>
            <Navlink exact to="/cart">

            </Navlink>
        </nav>
    )
}