import React, { useContext, useEffect, useMemo, useState, useCallback } from 'react';
import axios from 'axios';
import './BuyerProducts.css';
import { Link, Route } from 'react-router-dom';
import FullPost from '../../components/FullPost/FullPost';
import Cookies from 'js-cookie';
import Buyer from '../../components/Buyer/Buyer';

const BuyerProducts = (props) => {


    //=================EXPLANATION====================
    const [value, setValue] = useState(0);  // click button , sends textInput
    const [textInput, setTextInput] = useState(0);  // synced input field

    const [count, setCount] = useState(0);
    //=================EXPLANATION====================

    const [products, setProducts] = useState([]);
    const [isLoading, setLoading] = useState(false); // indicates that is retreiving data
    const [error, setError] = useState();
    const [selectedId, setSelectedId] = useState(null);
    const [show, setVisibility] = useState(false);  // Just for demonstration 

    const [incrementValue, setIncrementValue] = useState(1);

    function fetchProductsHandler() {
        const headers = {
            'Access-Control-Allow-Origin': '*',
            'Authorization': `Bearer ${Cookies.get('user')}`
        }
        setError(null); // this is to set the error to null, if there were any previous errors existing 


        // ])
        axios.get("http://localhost:8080/products")
            .then(response => {
                setProducts(response.data);
                console.log(products)
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            })

    }

    useEffect(fetchProductsHandler, []); // This will be fetched when mounted

    const productSelectedHandler = (id) => {
        setSelectedId(id);
    }

    // We can do this rather than this :: <Post title={{...posts[1]}.title} />
    const rposts = products.map(product => {
        return <Link to={props.match.url + "/" + product.id} key={product.id}>
            <Buyer
                name={product.name}
                category={product.category}
                price={product.price}
                quantity={product.quantity}
                seller={product.sellers.length > 0 ? product.sellers[0].firstName : null}
                sellerId={product.sellers.length > 0 ? product.sellers[0].id : null}
               // review={product.reviews.length > 0 ? product.reviews[0].productReview : null}

                clicked={() => { productSelectedHandler(product.id) }}
                id={product.id} />
        </Link>
    });

    let content = rposts
    return (
        <div>

            <section className="BuyerProducts">
                {content}
            </section>
            {/* <Route path={props.match.url + '/:id'} component={FullPost} /> */}
        </div>
    );
}

export default BuyerProducts;
