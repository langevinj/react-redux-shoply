import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'
import './Products.css'

//renders the list of products
function Products() {
    const products = useSelector(st => st.inventory)

    return (
        <div className="bg-light text-center products">
            <div className="row">
                <div className="col"></div>
                <div className="col"><h2 className="title">The best deals guaranteed!</h2></div>
                <div className="col"></div>
            </div>
            <div className="row">
                <div className="col"></div>
                <div className="col">
                <ul>
                    {products ? Object.entries(products).map(product => <li key={product[0]}><ProductCard id={product[0]} item={product[1]} /></li>) : null}
                </ul></div>
                <div className="col"></div>
            </div>
            <div className="row">
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"></div>
            </div>
        </div>
    )
}

export default Products;