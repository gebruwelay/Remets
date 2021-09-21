import React from "react";
import { Route,Switch,Redirect} from "react-router-dom";
import UserProfile from '../../components/UserProfile/UserProfile';
import Auth from '../../components/Auth/Auth';
import NewPost from '../../components/NewPost/NewPost';
import Counter from '../../components/Counter/Counter';
import Posts from "../../containers/Posts/Posts";
import Registration from "../Registration/Registration";



const Routes = () => {

    return (
        <div>
        <Switch>
        <Route path='/login' component={Auth} />
        <Route path='/user' component={UserProfile} />
        <Route path='/counter' component={Counter} />
        <Route path='/posts' component = {Posts}/>
        <Route path = "/register" component={Registration}/>
        <Redirect from="/" to='/posts' />
    </Switch>
    </div>
    );
}

export default Routes;