import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from './actions';
import './ProductCard.css'

function ProductCard({ id, item }) {
    const dispatch = useDispatch();

    const add = (evt) => dispatch(addToCart(evt.target.parentNode.id))
    const remove = (evt) => dispatch(removeFromCart(evt.target.parentNode.id))

    return (
        <div id={id} className="ProductCard">
            <p className="product-name">{item.name}</p>
            <img src={item.image_url} className="product-img" alt={item.name}></img>
            <p className="product-price">${item.price}</p>
            {/* <p className="product-description">{item.description}</p> */}
            <button className="add-button btn-primary rounded" onClick={add}>Add to cart</button>
            <button className="remove-button btn-primary rounded" onClick={remove}>Remove from cart</button>
        </div>
    )
}

export default ProductCard;