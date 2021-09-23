import React, { useEffect, useRef, useState } from 'react';
import './Auth.module.css';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/index';
import { Link, useHistory, Redirect} from 'react-router-dom';
import Cookies from 'js-cookie';

const Auth = (props) => {

    const dispatch = useDispatch();
    const formData = useRef();
  
    const loginHandler = () => {
        const form = formData.current
        const userCredentials = { username: form['user'].value, password: form['password'].value };
        dispatch(authActions.login(userCredentials));
    
        // if(Cookies.get('role'))
        // {
        // let paths = [
        //     { path: "/Products", role: "seller" },
        //     { path: "/admin", role: "admin" },
        //     { path: "/buyerproducts", role: "buyer" }
        // ]
        // let redirect = paths.find(item => item.role == Cookies.get('role'))
        // console.log(redirect.path);
        // //<Redirect to={redirect.path}/>
        //  props.history.push( {pathname:redirect.path});
        // }
        props.history.push('/user');
    }

    return (
        <main className="auth">
            <section>
                <form ref={formData} onSubmit={loginHandler}>
                    <div >
                        <label htmlFor='user'>User</label>
                        <input type='text' id='user' />
                    </div>
                    <div >
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' />
                    </div>
                    <button>Login</button>
                </form>
                <Link to="/registration">Sign Up</Link>
            </section>
        </main>
    );
};

export default Auth;
