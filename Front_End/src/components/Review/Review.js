import React from "react";
import axios from "axios";

import './Review.css';

const Review = (props) => {



    return (
        <article className="Review" >



            <div>{props.productReview}</div>

            <button onClick={() => {
                let buyerId = 1;
                let sellerid = props.id
                //call to the backend
                //let index = likedPosts.indexOf(props.id);
                axios.get("http://localhost:8080/review/" + sellerid + "/reviews")
                    .then(res => {
                        alert("successfully approved!")

                    })
                // delete likedPosts[index];

            }}>

                aprrove </button>

        </article>


    )
}

export default Review;