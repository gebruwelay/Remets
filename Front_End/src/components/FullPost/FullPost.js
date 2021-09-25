import React, { useContext, useEffect, useState, useRef } from 'react';
import axios from 'axios';
import './FullPost.css';
import Cookies from 'js-cookie';
import { LikedProducts } from '../../store/LikedPosts';
import { useHistory } from 'react-router-dom';

const FullPost = (props) => {


    // const { likedProducts, setLikedProducts } = useContext(LikedProducts);
    const [p, setP] = useState([]);
    const [del, setdel] = useState([]);
    const [isLoading, setLoading] = useState(false); // indicates that is retreiving data
    const [error, setError] = useState();

    const history = useHistory();
    const status = useRef();

    const [sell, setsell] = useState([]);


    function fetchProductsHandler() {
        const headers = {
            'Access-Control-Allow-Origin': '*',
            'Authorization': `Bearer ${Cookies.get('user')}`
        }
        setError(null); // this is to set the error to null, if there were any previous errors existing 


        axios.get("http://localhost:8080/products")
            .then(response => {
                setP(response.data);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
        axios.get("http://localhost:8080/sellers")
            .then(response => {
                setsell(response.data);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            })

    }

    useEffect(fetchProductsHandler, []); // This will be fetched when mounted

    const deleteProduct = () => {
        //  http://localhost:8080/sellers/1/products/1
        axios.delete("http://localhost:8080/products/" + props.match.params.id)
            .then(response => {
                
                // let index = likedPosts.indexOf(parseInt(props.match.params.id))
                console.log(props.match.params.id);
                let result = p.filter(product => product.id != parseInt(props.match.params.id));
                setP(result);
                props.history.push('/products');
                console.log("I am in products");
                

                // delete likedPosts[index]
                //     props.history.push('/posts');
                // });
            });
    }


    const editProduct = () => {
       let item = p.find(item=> item.id == parseInt(props.match.params.id));
        <div> {history.push(
            {
                pathname: "/editproduct",
                state: { id: parseInt(props.match.params.id), name: item.name, quantity: item.quantity, price: item.price, category:item.category}
            }

        )} </div>
        //axios.patch() 
    }
    const changeStatus = () => {
        //axios.patch()
        console.log(status.current.value)
    }


    let post = <p style={{ justifyContent: 'space-around' }}> Please select a Post!</p>;
    if (props.match.params.id != null) {
        post = (
            <div className="FullPost">
                <h1>{p.name}</h1>
                <p>{p.price}</p>
                <p>{p.quantity}</p>
                <p>{p.category}</p>

                <div className="Edit">
                    <button onClick={deleteProduct} className="Delete">Delete</button>
                    <button onClick={editProduct} className="edit">Edit</button>




                    <label> Change Status </label>
                    <select onChange={changeStatus} ref={status}>
                        <option value="shipped"> Shipped</option>
                        <option value="onway"> On Way</option>
                        <option value="delivered"> Delivered </option>
                        <option value="canceled"> Canceled</option>

                    </select>
                </div>
            </div>
        );
    }


    return post;
}

export default FullPost;