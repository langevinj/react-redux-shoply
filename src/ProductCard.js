import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from './actions';

function ProductCard({ id, item }) {
    const dispatch = useDispatch();
    console.log(id)
    console.log(item)
    return (
        <div id={id} className="ProductCard">
            <img src={item.image_url} className="product-img" alt={item.name}></img>
            <span className="product-name">{item.name}</span>
            <span className="product-price">{item.price}</span>
            <p className="product-description">{item.description}</p>
        </div>
    )
}

export default ProductCard;