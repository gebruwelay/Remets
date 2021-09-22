import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import './FullPost.css';
import Cookies from 'js-cookie';
import { LikedProducts } from '../../store/LikedPosts';

const FullPost = (props) => {

    const { likedProducts, setLikedProducts} = useContext(LikedProducts);

    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${Cookies.get('user')}`
    }

    const [productCall, setProductCall] = useState({});
    const [renderedId, setRenderedId] = useState(null); // remove this one

    useEffect(() => {
        setRenderedId(props.match.params.id);
    }, []);

    useEffect(() => {
        // if (renderedId !== props.match.params.id) {
        //     axios("/products/" + props.match.params.id, { headers })
        //         .then(response => {
                 //   setPostCall(response.data);
                //     setRenderedId(props.match.params.id);
                // })
       // }
        // return () =>{
        //     console.log('post was unmounted')
        // };
    }, [props]);  // if I leave this empty here, it will update twice.  



    const deleteProduct = () => {
    //     axios.delete("/posts" + "/"+props.match.params.id, { headers })
    //         .then(response => {
                   // let index = likedPosts.indexOf(parseInt(props.match.params.id))
                   let result = likedProducts.filter(product=>product.id!=parseInt(props.match.params.id));
                   setLikedProducts(result);
                   // delete likedPosts[index]
            //     props.history.push('/posts');
            // });
    };

     const editProduct = () => {
         //axios.patch() 
     }
     const changeStatus = () =>{
         //axios.patch()
     }

    let post = <p style={{ justifyContent: 'space-around' }}> Please select a Post!</p>;
    if (props.match.params.id != null) {
        post = (
            <div className="FullPost">
                <h1>{productCall.name}</h1>
                <p>{productCall.price}</p>
                <p>{productCall.quantity}</p>
                <p>{productCall.category}</p>

                <div className="Edit">
                    <button onClick={deleteProduct} className="Delete">Delete</button>
                    <button onClick={editProduct} className="edit">Edit</button>
                   <label> Change Status </label>
                    <select onChange= {changeStatus}>
                        <option> Shipped</option>
                        <option> On Way</option>
                        <option> Delivered </option>
                    </select>
                </div>
            </div>
        );
    }


    return post;
}

export default FullPost;