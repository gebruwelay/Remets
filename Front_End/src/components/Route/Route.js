import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Auth from '../../components/Auth/Auth';
import Admin from "../Admin/Admin";
import Reviews from "../Reviews/Reviews";
import Sellers from "../Sellers/Sellers";
import Registration from "../Registration/Registration";
import Products from "../../containers/Products/Products";
import AddProduct from "../AddProduct/AddProduct";
import UserProfile from "../UserProfile/UserProfile";
import BuyerProduct from "../BuyerProduct/BuyerProduct";
import Homes from "../../containers/Homes/Homes";
import Home from "../Home/Home";
import BuyerProducts from "../../containers/BuyerProducts/BuyerProducts";
import EditProduct from "../EditProduct/EditProduct";

                        
  


const Routes = () => {
  

    return (
        <div>
            <Switch>
                <Route path='/login' component={Auth} />
                <Route path='/admin' component={Admin} />
                <Route path='/sellers' component={Sellers} />
                <Route path='/reviews' component={Reviews} />
                 <Route path='/user' component={UserProfile} />
                <Route path='/registration' component={Registration} />
                <Route path="/products" component={Products} />
                <Route path="/newproduct" component={AddProduct} />
                <Route path="/buyerproducts" component={BuyerProducts}/>
                <Route path="/homes" component={Homes}/> 
                <Route path="/buyerproduct" component={BuyerProduct}/>
                <Route path="/editproduct" component={EditProduct}/>
                <Redirect from="/" to='/homes' />
            </Switch>
        </div>
    );
}

export default Routes;