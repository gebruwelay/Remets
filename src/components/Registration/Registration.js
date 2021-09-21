import axios from 'axios';
import React, { useContext, useMemo, useRef, useState } from 'react';
import { APIConfig } from '../../store/API-Config';
import Cookies from 'js-cookie';

import './Registration.css';

const Registration = (props) => {

    const APIs = useContext(APIConfig);
    const postAPI = APIs.postAPI;

    const newPostForm = useRef();

    const titleVal = useRef();
    const [value,setValue] = useState();

    useMemo(()=>{
        console.log(value);
    },[value])
    const PostDataHandler = () => {
        const headers = {
            'Access-Control-Allow-Origin': '*',
            'Authorization':`Bearer ${Cookies.get('user')}`
        }
        const form = newPostForm.current
        const data = { title: form['title'].value, content: form['content'].value, author: form['author'].value };
        console.log(data);
        axios.post("/posts", data, {headers:headers})
            .then(data => {
                console.log('Success:', data);
                props.history.push('/posts'); // push will add it to the page stack, replace will just replace the component  // props.history.replace('/posts'); 
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }


    return (
        <div className="NewPost">
            <form ref={newPostForm}>
                <h1>Sign Up</h1>
                <label>First Name</label>
                <input type="text"  name={'fname'} />

                <label>Last Name</label>
                <input type="text" name={'lname'} />

                <label>Phone Number</label>
                <input type="number"  name={'pnumber'} />

                <label>Email</label>
                <input type="email"  name={'email'} />
                <label>Address</label>
                <input type="text" name={'address'} />

                <label>role</label>
                <select label={'author'} name={'role'} >
                    <option value="admin">Admin</option>
                    <option value="seller">Seller</option>
                    <option value = "buyer"> Buyer</option> 
                </select>
            </form>
            <button onClick={PostDataHandler}> Register </button>
   
        </div>
    );
}
// if i didnt use a form, you will get a Chrome sendrequest error: TypeError: Converting circular structure to JSON
export default Registration;