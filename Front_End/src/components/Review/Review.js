import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";


import './Review.css';

const Review = (props) => {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setLoading] = useState(false); // indicates that is retreiving data
    const [error, setError] = useState();




    function fetchProductsHandler() {
        const headers = {
            'Access-Control-Allow-Origin': '*',
            'Authorization': `Bearer ${Cookies.get('user')}`
        }
        setError(null); // this is to set the error to null, if there were any previous errors existing 


        // ])
        axios.get("http://localhost:8080/review")
            .then(response => {
                setReviews(response.data);

            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            })

    }

    useEffect(fetchProductsHandler, []); // This will be fetched when mounted



    // We can do this rather than this :: <Post title={{...posts[1]}.title} />
    const rposts = reviews.map(review => {

        return review;
    });

    let content = rposts



    return (<article className="Review" >


        {content}

        <input type="checkbox" id="vehicle1" name="vehicle1" />
        <label for="vehicle1"> </label>
        <button>approve</button>

    </article>

    )
}

export default Review;