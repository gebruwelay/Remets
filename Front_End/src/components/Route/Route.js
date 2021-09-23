import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import UserProfile from '../UserProfile/UserProfile';
import Auth from '../../components/Auth/Auth';

import Admin from "../Admin/Admin";
import Reviews from '../../containers/Reviews/Reviews'

import Sellers from "../../containers/Sellers/Sellers";



import Registration from "../Registration/Registration";

import Products from "../../containers/Products/Products";
import AddProduct from "../AddProduct/AddProduct";
import Carts from "../../containers/Carts/Carts";
import Reciept from "../Reciept/Reciept";



const Routes = () => {

    return (
        <div>
            <Switch>

                <Route path='/login' component={Auth} />
                <Route path='/carts' component={Carts} />
                <Route path='/reciept' component={Reciept} />



                <Route path='/admin' component={Admin} />
                <Route path='/sellers' component={Sellers} />
                <Route path='/reviews' component={Reviews} />


                <Route path='/user' component={UserProfile} />
                <Route path='/registration' component={Registration} />
                <Route path="/products" component={Products} />

                <Route path="/newproduct" component={AddProduct} />

                <Redirect from="/" to='/login' />
            </Switch>
        </div>
    );
}

export default Routes;