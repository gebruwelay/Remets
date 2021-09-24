import React, { useContext, useEffect, useMemo, useState, useCallback } from 'react';
import axios from 'axios';
import './Products.css';
import { Link, Route } from 'react-router-dom';
import FullPost from '../../components/FullPost/FullPost';
import Cookies from 'js-cookie';
import Product from '../../components/Product/Product';

const Products = (props) => {


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
        
    //     setProducts([...products,
    //         {
    //             "id":1,
    //             "name":"laptop",
    //             "category":"Electronics",
    //             "price":123.0,
    //             "quantity":7,
    //             "status": "shipped"
    //          },
    //         {
    //             "id":2,
    //             "name":"smartphone",
    //             "category":"Electronics",
    //             "price":333.0,
    //             "quantity":90,
    //             "status":"onway",
    //         },
    //         {
    //             "id":3,
    //             "name":"pen",
    //             "category":"educational",
    //             "price":1.0,
    //             "quantity":909,
    //             "status":"dilivered"
    //         },
    //         {
    //             "id":4,
    //             "name":"Addidas",
    //             "category":"shoe",
    //             "price":1.0,
    //             "quantity":34,
    //             "status": ""
    //         }
    
    // ])
        axios.get("/products", { headers:headers})
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            })

    }

    useEffect(fetchProductsHandler, []); // This will be fetched when mounted

    const postSelectedHandler = (id) => {
        setSelectedId(id);
    }

    // We can do this rather than this :: <Post title={{...posts[1]}.title} />
    const rposts = products.map(product => {
        return <Link to={props.match.url + '/' + product.id} key={product.id}>
            <Product
                name={product.name}
                category={product.category}
                price = {product.price}
                quantity = {product.quantity}
                // status = {product.status}
                clicked={() => { postSelectedHandler(product.id) }}
                id={product.id} />
        </Link>
    });

    let content = rposts
    return (
        <div>
           
            <section className="Products">
                {content}
            </section>
            <Route path={props.match.url + '/:id'} component={FullPost} />


        </div>
    );
}

export default Products;
