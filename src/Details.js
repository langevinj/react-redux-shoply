import React from 'react'  
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'

function Details() {
    const { id } = useParams();
    const products = useSelector(st => st.inventory)

    return (
        <div>
            <ProductCard id={id} item={products[id]} details={true}/>
        </div>
    )
}

export default Details;