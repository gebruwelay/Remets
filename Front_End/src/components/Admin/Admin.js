import React from "react";
import { Link } from "react-router-dom";
import Reviews from '../../containers/Reviews/Reviews';


import Sellers from "../../containers/Sellers/Sellers";

// import './Seller.css';

const Admin = (props) => {



    return (
        <div>
            <div>
                <h1>List of sellers:</h1>

                <Sellers />

                <button >Approve</button>
            </div>


        </div>


    )
}

export default Admin;