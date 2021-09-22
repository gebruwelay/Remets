import React from 'react'
import Review from '../Review/Review';

import './Reviews.css';



function Reviews() {
    const reviewList = [
        {
            id: "111",
            buyerName: "Meti",
            sellerName: "helina",
            review: "i am not sure"
        },
        {
            id: "112",
            buyerName: "momi",
            sellerName: "helina",
            review: "i dont like the product"
        },
        {
            id: "113",
            buyerName: "heran",
            sellerName: "selena",
            review: "it is a good product"
        }
    ];
    const processedReviewList = reviewList.map((review) => <Review id={review.id} buyerName={review.buyerName} sellerName={review.sellerName} review={review.review} ></Review>);
    return (

        <div>
            <h1>Reviews to be approved:</h1>
            <section className="Reviews">
                {processedReviewList}

            </section>
            <button >Approve</button>

        </div>
    )
}

export default Reviews;
