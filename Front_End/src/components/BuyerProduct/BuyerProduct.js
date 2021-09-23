import axios from 'axios';
import React, { useContext, useRef } from 'react';
import { LikedProducts } from '../../store/LikedPosts';
import './BuyerProduct.css'
const BuyerProduct = (props) => {

    const qty = useRef();
    const review = useRef();
    const addCart = () =>{
        // <Carts name={props.name} price = {props.price} quantity= {qty.current.value}/>
        // send the review to the backend including the product id
        // let data {id: props.id, review = review.current.value}
        //axios.patch()
    }
    const makePayment = () => {
        //user from store redux
        //call receipt api here
        const totalPrice= qty.current.value*props.price;
        // <Receipt name = {productname}, user= {user}, totalPrice = {totalPrice} seller = {props.seller}>
         // send the review to the backend including the product id
        // let data {id: props.id, review = review.current.value}
    }
    return (
        <article className="BuyerProduct" onClick={props.clicked}>
            <div className="Info">
              <div className="seller">{props.location.state.name}</div>
               <div className="seller">{props.location.state.seller}</div>
                <div className="price">${props.location.state.price}</div>
                <div className="quantity"> Quantity:<input ref = {qty} type = "number" /></div>
                <div className="review"> Review<textarea ref = {review} rows= "4"/></div>
            </div>
            <button onClick={addCart}>Add to Cart</button> <button onClick = {makePayment}> Make Payment</button>
            
        </article>
    );
}

export default BuyerProduct;