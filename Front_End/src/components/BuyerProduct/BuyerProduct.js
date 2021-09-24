import axios from 'axios';
import React, { useContext, useRef, useState } from 'react';
import { LikedProducts } from '../../store/LikedPosts';
import './BuyerProduct.css'
import { useHistory } from "react-router-dom";
const BuyerProduct = (props) => {

    const qty = useRef();
    const review = useRef();
    const [isOrder, setIsOrder] = useState(false);
    let page = null;
    let history = useHistory();
    const orderHandler = () => {
        setIsOrder(true);
        page = null;
        //history.push(page);
        //isAuthenticated? <BuyerProduct name= {props.name} seller = {props.seller} price = {props.seller}/>
    }
    const addCart = () => {
        // <Carts name={props.name} price = {props.price} quantity= {qty.current.value}/>
        // send the review to the backend including the product id
        // let data {id: props.id, review = review.current.value}
        //axios.patch()
    }
    const makePayment = () => {
        //user from store redux
        //call receipt api here
        const totalPrice = qty.current.value * props.price;
        // <Receipt name = {productname}, user= {user}, totalPrice = {totalPrice} seller = {props.seller}>
        // send the review to the backend including the product id
        // let data {id: props.id, review = review.current.value}
    }
    page = (<article className="BuyerProduct" onClick={props.clicked}>
        <div className="Info">
            <div className="seller">{props.location.state.name}</div>
            <div className="seller">{props.location.state.seller}</div>
            <div className="price">${props.location.state.price}</div>
            <div className="quantity"> Quantity:<input ref={qty} type="number" /></div>
            <div className="review"> Review<textarea ref={review} rows="4" /></div>
        </div>
        <button onClick={addCart}>Add to Cart</button> 

    </article>)
    return (
        isOrder ?

            <div> {history.push(
                {
                    pathname: "/reciept",
                    state: { id: props.location.state.id, name: props.location.state.name, seller: props.location.state.seller, quantity: qty.current.value, price: props.location.state.price }
                }

            )}
            </div>
            : page
    );
}

export default BuyerProduct;