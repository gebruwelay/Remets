import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// import UserProfile from '../../components/UserProfile/UserProfile';
import Auth from '../../components/Auth/Auth';

import Admin from "../Admin/Admin";
import Reviews from "../Reviews/Reviews";
// import NewPost from '../../components/NewPost/NewPost';

import Sellers from "../Sellers/Sellers";
// import Posts from "../../containers/Posts/Posts";

import NewPost from '../../components/NewPost/NewPost';
import Registration from "../Registration/Registration";
import Posts from "../../containers/Posts/Posts";
import Products from "../../containers/Products/Products";
import AddProduct from "../AddProduct/AddProduct";


const Routes = () => {

    return (
        <div>
            <Switch>
                <Route path='/login' component={Auth} />

                <Route path='/admin' component={Admin} />
                <Route path='/sellers' component={Sellers} />
                <Route path='/reviews' component={Reviews} />
                {/* <Route path='/user' component={UserProfile} />
               
                <Route path='/posts' component={Posts} />
                <Route path="/newpost" component={NewPost} /> */}

                <Route path='/user' component={UserProfile} />
                <Route path='/registration' component={Registration} />
                <Route path="/products" component={Products} />
                <Route path='/posts' component={Posts} />
                <Route path="/newproduct" component={AddProduct} />

                <Redirect from="/" to='/login' />
            </Switch>
        </div>
    );
}

export default Routes;