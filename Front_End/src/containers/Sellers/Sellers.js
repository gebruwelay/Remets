import React, { useState, useEffect } from 'react'
import axios from 'axios';

import Seller from '../../components/Seller/Seller';

import './Sellers.css';
import { Link, Route } from 'react-router-dom';
import Cookies from 'js-cookie';



function Sellers() {
    const [isLoading, setLoading] = useState(false); // indicates that is retreiving data
    const [error, setError] = useState();
    const [sell, setsell] = useState([]);

    function fetchProductsHandler() {
        const headers = {
            'Access-Control-Allow-Origin': '*',
            'Authorization': `Bearer ${Cookies.get('user')}`
        }
        setError(null);



        axios.get("http://localhost:8080/sellers")
            .then(response => {
                setsell(response.data);
                console.log("lets see", sell)

            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }
    useEffect(fetchProductsHandler, []);

    const processedSellerList = sell.map(sel => {
        // <Link to={props.match.url + "/" + sel.id} key={sel.id}>
        return <Seller
            id={sel.id}
            firstName={sel.firstName}
            lastName={sel.lastName}
            phoneNumber={sel.phoneNumber} />
        // </Link>
    });
    let content = processedSellerList;

    return (
        <div>
            <section className="Sellers">
                {content}
            </section>
        </div>

    )
}

export default Sellers;
