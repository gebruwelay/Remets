import React, { useContext } from 'react';
import { LikedProducts } from '../../store/LikedPosts';
import './Product.css'
const Product = (props) => {

    const { likedProducts, setLikedProducts } = useContext(LikedProducts);
    return (
        <article className="Product" onClick={props.clicked}>
            <h1>{props.name}</h1>
            <div className="Info">

                <div className="price">${props.price}</div>
                <div className="quantity">{props.quantity}</div>
                <div className="status">{props.status}</div>

            </div>
            {/* {
                likedProducts.includes(likedProducts.find(product=>product.id==props.id))
                    ?
                    <button onClick={() => {

                        //let index = likedPosts.indexOf(props.id);
                        let result = likedProducts.filter(product => product.id!=props.id);
                        setLikedProducts(result);
                        // delete likedPosts[index];

                    }}>
                        Unfollow </button>
                    :
                    <button onClick={() => {
                        setLikedProducts([...likedProducts, 
                            { 
                                "id": props.id, 
                                "name": props.name,
                                "category":props.category,
                                "price":"$"+props.price,
                                "quantity":props.quantity 
                            }])
                            // here call the backend 
                       // console.log(likedPosts);

                    }}>
                        Follow </button>
                        }
                    <label>{props.status}</label> */}
        </article>
    );
}

export default Product;