import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from './actions';
import { Link } from 'react-router-dom'
import QuantityAdjuster from './QuantityAdjuster'
import './ProductCard.css'

function ProductCard({ id, item, details=false}) {
    const dispatch = useDispatch();
 
    const add = (evt) => {
        evt.preventDefault();
        dispatch(addToCart(evt.target.parentNode.id))
    }

    const remove = (evt) => {
        evt.preventDefault();
        dispatch(removeFromCart(evt.target.parentNode.id))
    }

    return (
        <>
        <Link to={`/products/${id}`}>
        <div id={id} className="ProductCard">
            <p className="product-name">{item.name}</p>
            <img src={item.image_url} className="product-img" alt={item.name}></img>
            <p className="product-price">${item.price}</p>
            {details ? <p className="product-description">{item.description}</p> :  null}
            <button className="add-button btn-primary rounded" onClick={add}>Add to cart</button>
            <button className="remove-button btn-primary rounded" onClick={remove}>Remove from cart</button>
        </div>
        </Link>
            {item.qty ? <div className="form-group row"><div className="col"></div><div className="col-xs-2"><QuantityAdjuster id={id} /></div><div className="col"></div></div> : null}
        </>
    )
}

export default ProductCard;