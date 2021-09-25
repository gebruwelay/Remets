import axios from 'axios';
import React, { useContext, useMemo, useRef, useState } from 'react';
import { APIConfig } from '../../store/API-Config';
import Cookies from 'js-cookie';

import './EditProduct.css';
import { Redirect } from 'react-router';

const EditProduct = (props) => {

    const newPostForm = useRef();

    const titleVal = useRef();
    const [value, setValue] = useState();

    useMemo(() => {
        console.log(value);
    }, [value])
    const PostDataHandler = () => {
        const headers = {
            'Access-Control-Allow-Origin': '*',
            'Authorization': `Bearer ${Cookies.get('user')}`
        }
        const form = newPostForm.current
        const data = {
            name: form['name'].value,
            price: form['price'].value,
            quantity: form['qty'].value,
            category: form['category'].value,
        };




        axios.put("http://localhost:8080/products/" + props.location.state.id, data)
            .then(data => {
                console.log('Success:', data);
                props.history.push('/products'); // push will add it to the page stack, replace will just replace the component  // props.history.replace('/posts'); 
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }


    return (
        <div className="NewProduct">
            <form ref={newPostForm}>
                <h1>Add Product</h1>
                <label>Product Name</label>
                <input type="text" name={'name'} defaultValue={props.location.state.name} />

                <label>Price</label>
                <input type="number" name={'price'} defaultValue={props.location.state.price} />

                <label>Quantity</label>
                <input type="number" name={'qty'} defaultValue={props.location.state.quantity} required />

                <label>Category</label>
                <input type="text" name={'category'} defaultValue={props.location.state.category} required />
            </form>
            <button onClick={PostDataHandler}> Edit Product </button>




        </div>
    );
}
// if i didnt use a form, you will get a Chrome sendrequest error: TypeError: Converting circular structure to JSON
export default EditProduct;