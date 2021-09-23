import React, { useContext, useState, useRef } from 'react';

import './Receipt.css'

import { useReactToPrint } from 'react-to-print';

import Cart from '../Cart/Cart';

const Reciept = (props) => {
    const [price, setPrice] = useState(0);
    // const total=(props.price) => {
    //     setPrice(props.price);
    // }

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });


    //const { likedProducts, setLikedProducts } = useContext(LikedProducts);
    return (
        <article className="BuyerProduct" ref={componentRef} >
            <h2>Receipt</h2>
            <div className="Info">
                <div className="seller"><b>product name------</b>   {props.location.state.name}</div>

                <div className="seller"><b>Quantity----------</b> {props.location.state.quantity}</div>

                <div className="price"><b>Price------------</b>${props.location.state.price}</div>

            </div>
            <button onClick={handlePrint}>Print</button>

        </article>

    );
}

export default Reciept;