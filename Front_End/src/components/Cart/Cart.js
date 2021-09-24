import React, { useContext, useEffect, useState } from 'react';
import { LikedProducts, LikedPosts } from '../../store/LikedPosts';
import './Cart.css'
import { totalActions } from '../../store';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { CheckedCart } from '../../store/CheckedCart';
import Reciept from '../Reciept/Reciept';
import { useHistory } from "react-router-dom";
const Cart = (props) => {

    const { likedPosts, setLikedPosts } = useContext(LikedPosts);
    const { checks, setChecks } = useContext(CheckedCart);
    const [isOrder, setIsOrder] = useState(false)
    let page = null;
    let history = useHistory();
    const orderHandler = () => {
        setIsOrder(true);
        page = null;
        //history.push(page);
        //isAuthenticated? <BuyerProduct name= {props.name} seller = {props.seller} price = {props.seller}/>
    }



    const removeHandler = () => {

        setLikedPosts(likedPosts.filter(post => post.id != props.id));
    }


    page = (<article className="Cart" >

        <h2>{props.name}</h2>
        <div className="Info">
            <div className="price">${props.price} </div>
            <div className="quantity">{props.quantity}</div>


        </div>



        <button onClick={removeHandler}>   remove </button>


        <button onClick={orderHandler}> make payment </button>

    </article>)


    return (

        isOrder ?

            <div> {history.push(
                {
                    pathname: "/reciept",
                    state: { id: props.id, name: props.name, quantity: props.quantity, price: props.price }
                }

            )}
            </div>
            : page

    );
}



export default Cart;