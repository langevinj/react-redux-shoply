import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from './actions';
import './ProductCard.css'

function ProductCard({ id, item }) {
    const dispatch = useDispatch();
    console.log(id)
    console.log(item)
    return (
        <div id={id} className="ProductCard">
            <p className="product-name">{item.name}</p>
            <img src={item.image_url} className="product-img" alt={item.name}></img>
            <p className="product-price">${item.price}</p>
            <p className="product-description">{item.description}</p>
        </div>
    )
}

export default ProductCard;