import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'

function Products() {
    const products = useSelector(st => st.inventory)

    return (
        <ul>
            {products ? products.map(product => <li><ProductCard item={product} /></li>) : null}
        </ul>
    )

}

export default Products;