import React, { useContext, useEffect, useMemo, useState, useCallback } from 'react';
import axios from 'axios';
import './Carts.css';
import { Link, Route } from 'react-router-dom';
import FullPost from '../../components/FullPost/FullPost';
import Cookies from 'js-cookie';
import Cart from '../../components/Cart/Cart';
import Reciept from '../../components/Reciept/Reciept'
import { CheckedCart } from '../../store/CheckedCart'
import { totalActions } from '../../store/index';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { LikedPosts } from '../../store/LikedPosts';
import { carts } from '../../store/carts';



const Carts = (props) => {

    const { cart, setCart } = useContext(carts);

    const cartList = [
        {
            "id": 1,
            "name": "laptop",

            "price": 123.0,
            "quantity": 7,

        },
        {
            "id": 2,
            "name": "smartphone",

            "price": 333.0,
            "quantity": 90,

        },
        {
            "id": 3,
            "name": "pen",

            "price": 1.0,
            "quantity": 909,

        },
        {
            "id": 4,
            "name": "Addidas",

            "price": 1.0,
            "quantity": 34,

        }

    ];
    // useEffect(() => {
    //     cartList.map(cart => {
    //         setLikedPosts([...likedPosts, { "id": cart.id, "name": cart.name, "price": cart.price, "quantity": cart.quantity }])
    //     });
    // }, []);

   
    const rposts = cart.map(cart => {
        // return <Link to={props.match.url + '/' + cart.id} key={cart.id}>
        return <Cart key={cart.id}
            name={cart.name}
            price={cart.price}
            quantity={cart.quantity}
            totalprice={cart.quantity*cart.price}
            buyerId= {cart.buyerid}


            //clicked={() => { postSelectedHandler(cart.id) }}
            id={cart.id} />
        // </Link>
    });


    let content = rposts

    return (
        <div>
            <h2> products in cart:({cart.length})</h2>

            <section className="Carts">
                {content}

            </section>


        </div>
    );
}


export default Carts;