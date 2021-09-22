import React from "react";
import { Link } from "react-router-dom";
import Reviews from "../Reviews/Reviews";
import Sellers from "../Sellers/Sellers";

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