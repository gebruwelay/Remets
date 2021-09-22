import React, { Fragment, useState } from 'react';
import Header from '../../components/Header/Header';
import Routes from '../../components/Route/Route';
import { LikedProducts } from '../../store/LikedPosts';

const AuthBlock = () => {
    // let isAuthorizred=false;


    //     function a(){
    // // locql stor
    //     }
    // {(isAuthorizred)} 
    const [likedProducts, setLikedProducts] = useState([]);


    return (
        <Fragment>
            <Header />


            <LikedProducts.Provider value={{ likedProducts, setLikedProducts }}>
                <Routes />
            </LikedProducts.Provider>

        </Fragment>
    );
}

export default AuthBlock;