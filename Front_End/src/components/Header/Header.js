import React from 'react';
import './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../../store/index';
import { Link, Redirect, useHistory } from 'react-router-dom';
import 'react-router';
import Cookies from 'js-cookie';

const Header = (props) => {

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated); // put the name of the slice
    const username = useSelector(state => state.auth.user);
    const dispatch = useDispatch();
    const history = useHistory();
    const logoutHandler = () => {
        dispatch(authActions.logout());
        history.push("/login");
        //<Redirect to='/login' />;
    }

    let signin = (username) ? "welcome, " + username : <Link to="/login"> Sign in </Link>

    return (
        <header className="header">

            {Cookies.get('role') && (<nav>
                <ul>
                    <li>
                        {(Cookies.get('role') == "seller") ? <Link to="/newproduct">New Product</Link> : null}
                    </li>
                    <li>
                        {(Cookies.get('role') == "seller") ? <Link to="/products">Products</Link> : null}
                    </li>
                    <li>
                        {(Cookies.get('role') == "admin") ? <Link to="/sellers">Sellers</Link> : null}
                    </li>
                    <li>
                        {(Cookies.get('role') == "admin") ? <Link to="/reviews">Reviews</Link> : null}
                    </li>
                    <li>
                        {(Cookies.get('role') == "buyer") ? <Link to="/buyerproducts">Products</Link> : null}
                    </li>
                    <li>
                        <Link to="/user"> Profile </Link>
                    </li>
                    <li>
                        <h3> welcome, {username}</h3>

                    </li>
                    <li>
                        <h3> <button onClick={logoutHandler}> Logout </button></h3>

                    </li>
                </ul>
            </nav>)}

        </header>
    );
}

export default Header;
