import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import UserProfile from '../../components/UserProfile/UserProfile';
import Auth from '../../components/Auth/Auth';
import NewPost from '../../components/NewPost/NewPost';

import Posts from "../../containers/Posts/Posts";



const Routes = () => {

    return (
        <div>
            <Switch>
                <Route path='/login' component={Auth} />
                <Route path='/user' component={UserProfile} />
                {/* <Route path='/counter' component={Counter} /> */}
                <Route path='/posts' component={Posts} />
                <Route path="/newpost" component={NewPost} />
                <Redirect from="/" to='/login' />
            </Switch>
        </div>
    );
}

export default Routes;