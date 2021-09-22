import axios from 'axios';
import React, { useContext, useMemo, useRef, useState } from 'react';
import { APIConfig } from '../../store/API-Config';
import Cookies from 'js-cookie';

import './Registration.css';
import { Redirect } from 'react-router';

const Registration = (props) => {

    const APIs = useContext(APIConfig);
    const postAPI = APIs.postAPI;

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
            fname: form['fname'].value,
            lname: form['lname'].value,
            uname: form['uname'].value,
            password: form['password'].value,
            pnumber: form['pnumber'].value,
            email: form['email'].value,
            address: form["address"].value,
            role: form['role'].value
        };

        let users = [];
        users.push(data);
        let paths = [
            { path: "/Products", role: "seller" },
            { path: "/admin", role: "admin" },
            { path: "/buyer", role: "buyer" }
        ]
        let redirect = paths.find(item => item.role == data.role)
        props.history.push(redirect.path);

        // axios.post("/posts", data, { headers: headers })
        //     .then(data => {
        //         console.log('Success:', data);
        //         props.history.push('/redirect.path'); // push will add it to the page stack, replace will just replace the component  // props.history.replace('/posts'); 
        //     })
        //     .catch((error) => {
        //         console.error('Error:', error);
        //     });
    }


    return (
        <div className="NewUser">
            <form ref={newPostForm}>
                <h1>Sign Up</h1>
                <label>First Name</label>
                <input type="text" name={'fname'} />

                <label>Last Name</label>
                <input type="text" name={'lname'} />

                <label>User Name</label>
                <input type="text" name={'uname'} required />

                <label>Password</label>
                <input type="password" name={'password'} required />

                <label>Phone Number</label>
                <input type="number" name={'pnumber'} />

                <label>Email</label>
                <input type="email" name={'email'} />
                <label>Address</label>
                <input type="text" name={'address'} />
                <label>role</label>
                <select label={'author'} name={'role'} >
                    <option value="admin">Admin</option>
                    <option value="seller">Seller</option>
                    <option value="buyer"> Buyer</option>
                </select>
            </form>
            <button onClick={PostDataHandler}> Register </button>




        </div>
    );
}
// if i didnt use a form, you will get a Chrome sendrequest error: TypeError: Converting circular structure to JSON
export default Registration;