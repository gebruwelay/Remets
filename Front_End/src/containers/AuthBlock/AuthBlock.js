import React, { Fragment, useState } from 'react';
import Header from '../../components/Header/Header';
import Routes from '../../components/Route/Route';
import { LikedProducts } from '../../store/LikedPosts';

const AuthBlock = () => {
    // let isAuthorizred=false;

<<<<<<< HEAD
    //     function a(){
    // // locql stor
    //     }
    // {(isAuthorizred)} 
    const [likedPosts, setLikedPosts] = useState([]);
=======
//     function a(){
// // locql stor
//     }
// {(isAuthorizred)} 
const [likedProducts, setLikedProducts] = useState([]);
>>>>>>> 918dc3196371541d611232fbb0590194fd43f8f7

    return (
        <Fragment>
            <Header />
<<<<<<< HEAD
            <LikedPosts.Provider value={{ likedPosts, setLikedPosts }}>
                <Routes />
            </LikedPosts.Provider>
=======
        <LikedProducts.Provider value={{ likedProducts, setLikedProducts }}>
           <Routes/>
           </LikedProducts.Provider>
>>>>>>> 918dc3196371541d611232fbb0590194fd43f8f7
        </Fragment>
    );
}

export default AuthBlock;