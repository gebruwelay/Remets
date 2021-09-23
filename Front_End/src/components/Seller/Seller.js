import React from "react";

import './Seller.css';

const Seller = (props) => {



    return (
        <article className="Seller" >


            <h1>{props.name}</h1>

            <p>  {props.phone}</p>




            <input type="checkbox" id="vehicle1" name="vehicle1" />
            <label for="vehicle1"> </label>

        </article>

    )
}

export default Seller;