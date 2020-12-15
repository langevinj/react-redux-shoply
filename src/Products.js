import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard'
import './Products.css'

function Products() {
    const products = useSelector(st => st.inventory)

    return (
        <div className="container-fluid">
            <div className="row bg-white">
                <div className="col"><Link to="/cart">Cart</Link></div>
                <div className="col"><h2>The best deals guarantee!</h2></div>
                <div className="col"></div>
            </div>
            <div className="row bg-light">
                <div className="col"></div>
                <div className="col">
                <ul>
                    {products ? Object.entries(products).map(product => <li key={product[0]}><ProductCard id={product[0]} item={product[1]} /></li>) : null}
                </ul></div>
                <div className="col"></div>
            </div>
        </div>
    )
}

export default Products;