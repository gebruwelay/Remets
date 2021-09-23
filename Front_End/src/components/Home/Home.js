import React, { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { LikedProducts } from '../../store/LikedPosts';
import BuyerProduct from '../BuyerProduct/BuyerProduct';
import { useHistory } from "react-router-dom";
import Cookies from 'js-cookie';
import './Home.css'
const Home = (props) => {
   const isAuthenticated = useSelector(state => state.auth.isAuthenticated); // put the name of the slice
    const { likedProducts, setLikedProducts } = useContext(LikedProducts);
    const [isOrder, setIsOrder] = useState(false)
    let history = useHistory();
    const user = Cookies.get('user');
    const orderHandler = ()=> {
        console.log(isAuthenticated)
        user? <div>{history.push( {pathname:"/buyerproduct"})}</div>:setIsOrder(true);
     //<BuyerProduct name= {props.name} seller = {props.seller} price = {props.seller}/>
    }

    let product = (<article className="Home" onClick={props.clicked}>
    <h1>{props.name}</h1>
    <div className="Info">
        <div className="price">${props.price}</div>
        <div className="quantity">{props.quantity}</div>
        <div className="seller">{props.seller}</div>
        <div className="review">{props.review}</div>
    </div>
     {
        likedProducts.includes(likedProducts.find(product=>product.id==props.id))
            ?
            <button onClick={() => {
                //call to the backend
                //let index = likedPosts.indexOf(props.id);
                let result = likedProducts.filter(product => product.id!=props.id);
                setLikedProducts(result);
                // delete likedPosts[index];

            }}>
                Unfollow </button>
            :
            <button onClick={() => {
                setIsOrder(true);
                setLikedProducts([...likedProducts, 
                    { 
                        "id": props.id, 
                        "name": props.name,
                        "price":"$"+props.price,
                        "quantity":props.quantity,
                        "seller": props.seller,
                        "review": props.review
                    }])
                    // here call the backend 
               // console.log(likedPosts);

            }}>
                Follow </button>
                }
            <button onClick={orderHandler}> order </button> 
</article>)
    return (
       isOrder ? <div> {history.push("/login")}</div>:product
    );
}

export default Home;