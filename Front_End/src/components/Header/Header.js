import React from 'react';
import './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../../store/index';
import { Link, Redirect } from 'react-router-dom';
import 'react-router';

const Header = (props) => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated); // put the name of the slice
    const username = useSelector(state => state.auth.user);
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(authActions.logout());
        <Redirect to='/login' />;
    }

    let signin = (username) ? "welcome, " + username : <Link to="/login"> Sign in </Link>

    return (
        <header className="header">

            {isAuthenticated && (<nav>
                <ul>
                    <li>
                        <Link to="/newpost">New Post</Link>
                    </li>
                    <li>
                        <Link to="/posts"> Posts</Link>
                    </li>
                    <li>
                        <Link to="/user"> Profile </Link>
                    </li>

                    <li>
                        <Link to="/reviews">Reviews</Link>
                    </li>

                    <li>
                        <h3> welcome, {username}</h3>

                    </li>
                </ul>
            </nav>)}

        </header>
    );
};

export default Header;
