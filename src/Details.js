import React from 'react'  
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'

function Details() {
    //get id of product from query string
    const { id } = useParams();
    const products = useSelector(st => st.inventory)

    return (
        <div>
            <ProductCard id={id} item={products[id]} details={true} showQuantity={true}/>
        </div>
    )
}

export default Details;