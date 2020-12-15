import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'
import './Products.css'

function Products() {
    const products = useSelector(st => st.inventory)

    return (
        <ul>
            {products ? Object.entries(products).map(product => <li key={product[0]}><ProductCard id={product[0]} item={product[1]} /></li>) : null}
        </ul>
    )

}

export default Products;

// (product => <li><ProductCard item={product} /></li>)