import React from "react";

import './Seller.css';

const Seller = (props) => {



    return (
        <article className="Seller" >


            <div>{props.firstName}</div>
            <div>{props.lastName}</div>

            <div> {props.phoneNumber}</div>




            <input type="checkbox" id="vehicle1" name="vehicle1" />
            <label for="vehicle1"> </label>

        </article>

    )
}

export default Seller;