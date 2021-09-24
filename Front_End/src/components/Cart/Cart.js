import React, { useContext, useEffect, useState, useRef } from 'react';
import { LikedProducts, LikedPosts } from '../../store/LikedPosts';
import './Cart.css'
import { totalActions } from '../../store';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { CheckedCart } from '../../store/CheckedCart';
import Reciept from '../Reciept/Reciept';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import Cookies from 'js-cookie';
import { carts } from '../../store/carts';


const Cart = (props) => {

    const { cart, setCart } = useContext(carts);
    const { likedPosts, setLikedPosts } = useContext(LikedPosts);
    const { checks, setChecks } = useContext(CheckedCart);
    const [isOrder, setIsOrder] = useState(false)
    let page = null;
    let history = useHistory();
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get('user')}`
    }
    const qty = useRef();

    
    const orderHandler = () => {
    setIsOrder(true);
    page = null;
    // let data = {
    //     "orderStatus" : "orderd",
    //     "order_buyer": props.buyerId,
    //     "billing_address_id" : 1,
    //     "products_id": props.id
    // }
    // axios.post("http://localhost:8080/orders",data)
    // .then(res=> {
       
    //     //history.push(page);
    //     //isAuthenticated? <BuyerProduct name= {props.name} seller = {props.seller} price = {props.seller}/>
    // })
 }

    const removeHandler = () => {
        
        let result = cart.filter(cart => cart.id!=props.id);
         setCart(result);
    }


    page = (<article className="Cart" >

        <h2>{props.name}</h2>
        <div className="Info">
            <div className="price">${props.price} </div>
            <div className="quantity">{props.quantity}</div>
            <div className="quantity"><h4>total price: ${props.totalprice}</h4></div>


        </div>



        <button onClick={removeHandler}>   remove </button>


        <button onClick={orderHandler}> make payment </button>

    </article>)


    return (

        isOrder ?

            <div> {history.push(
                {
                    pathname: "/reciept",
                    state: { id: props.id, name: props.name, quantity: props.quantity, price: props.price, totalprice:props.totalprice }
                }

            )}
            </div>
            : page

    );
}



export default Cart;