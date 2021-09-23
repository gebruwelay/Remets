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

    const [incrementValue , setIncrementValue] = useState(1);

    function fetchProductsHandler() {
        const headers = {
            'Access-Control-Allow-Origin': '*',
            'Authorization':`Bearer ${Cookies.get('user')}`
        }
        setError(null); // this is to set the error to null, if there were any previous errors existing 
        
        setProducts([...products,
            {
                "id":1,
                "name":"laptop",
                "category":"Electronics",
                "price":123.0,
                "review":"ow so cool bro!",
                "quantity":50,
                "seller":"Adidas"
             },
             {
                "id":2,
                "name":"Rebok shoe",
                "category":"Shoe",
                "price":123.0,
                "review":"ow so cool bro!",
                "quantity":50,
                "seller":"Rebok"
             },
             {
                "id":3,
                "name":"T-shirt",
                "category":"cloth",
                "price":123.0,
                "review":"ow so cool bro!",
                "quantity":50,
                "seller":"addidas"
             },
             {
                "id":4,
                "name":"smartPhone",
                "category":"Electronics",
                "price":123.0,
                "review":"ow so cool bro!",
                "quantity":50,
                "seller":"Bic"
             },
    
    ])
        // axios.get("/posts", { headers:headers})
        //     .then(response => {
        //         setPosts(response.data);
        //     })
        //     .catch(error => {
        //         setError(error.message);
        //         setLoading(false);
        //     })

    }

    useEffect(fetchProductsHandler, []); // This will be fetched when mounted

    const productSelectedHandler = (id) => {
        setSelectedId(id);
    }

    // We can do this rather than this :: <Post title={{...posts[1]}.title} />
    const rposts = products.map(product => {
        return <Link to={props.match.url+"/"+ product.id} key={product.id}>
            <Buyer
                name={product.name}
                category={product.category}
                price = {product.price}
                quantity = {product.quantity}
                seller = {product.seller}
                review = {product.review}
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
            <Route path={props.match.url + '/:id'} component={FullPost} />
        </div>
    );
}

export default BuyerProducts;
