import React, { Fragment, useState } from 'react';
import Header from '../../components/Header/Header';
import Routes from '../../components/Route/Route';
import { CheckedCart } from '../../store/CheckedCart';
import { LikedProducts, LikedPosts } from '../../store/LikedPosts'
import { carts } from '../../store/carts';

const AuthBlock = () => {
    // let isAuthorizred=false;


    //     function a(){
    // // locql stor
    //     }
    // {(isAuthorizred)} 
    const [likedProducts, setLikedProducts] = useState([]);
    const [likedPosts, setLikedPosts] = useState([]);
    const [checks, setChecks] = useState(false);
    const [cart,setCart] = useState([]);


    return (
        <Fragment>
            <Header />
            <carts.Provider value ={{cart, setCart}}>
            <LikedPosts.Provider value={{ likedPosts, setLikedPosts }}>
                <CheckedCart.Provider value={{ checks, setChecks }}>
                    <LikedProducts.Provider value={{ likedProducts, setLikedProducts }}>
                        <Routes />
                    </LikedProducts.Provider>
                </CheckedCart.Provider>
            </LikedPosts.Provider>
            </carts.Provider>
        </Fragment>
    );
}

export default AuthBlock;