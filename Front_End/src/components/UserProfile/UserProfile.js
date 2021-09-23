import React from 'react';
import { useSelector } from 'react-redux';
import './UserProfile.module.css';
import axios from 'axios';
import Cookies from 'js-cookie';

const UserProfile = (props) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated); // put the name of the slice
  const counter = useSelector(state => state.counter.counter); // this will make a subscription

  // axios.interceptors.request.use(
  //   config => {
  //     config.headers.autorization = jwt;
  //     return config;
  //   },
  //   error => {
  //     return Promise.reject(error);
  //   }
  // );

  

  return (
    <React.Fragment>
      <main className="profile">
        {isAuthenticated ? null : props.history.push("/login")}
        <h2>My User Profile</h2>
        <p>Points: {counter}</p>
      </main>
    </React.Fragment>

  );
};

export default UserProfile;
