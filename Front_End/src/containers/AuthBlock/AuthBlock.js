import React, { Fragment,useState} from 'react'
import Header from '../../components/Header/Header';
import Routes from '../../components/Route/Route';
import { LikedPosts } from '../../store/LikedPosts';


const AuthBlock = () => {
// let isAuthorizred=false;

//     function a(){
// // locql stor
//     }
// {(isAuthorizred)} 
const [likedPosts, setLikedPosts] = useState([]);

    return (
        <Fragment>
            <Header />
        <LikedPosts.Provider value={{ likedPosts, setLikedPosts }}>
           <Routes/>
           </LikedPosts.Provider>
        </Fragment>
    );
}

export default AuthBlock;