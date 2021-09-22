import React from "react";


import './Review.css';

const Review = (props) => {



    return (
        <article className="Review" >


            <p>Buyer name:{props.buyerName}</p>
            <p>seller name:{props.sellerName}</p>
            <p> Review:{props.review}</p>

            <input type="checkbox" id="vehicle1" name="vehicle1" />
            <label for="vehicle1"> </label>

        </article>


    )
}

export default Review;