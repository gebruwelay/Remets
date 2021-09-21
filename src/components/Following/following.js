import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LikedPosts } from "../../store/LikedPosts";
import FullPost from "../FullPost/FullPost";
import { Route } from "react-router-dom";
import './following.css'

const Following = (props) => {

    const { likedPosts, setLikedPostst } = useContext(LikedPosts);
    const[content, setContent] = useState();
    const aposts =  ()=>{
        setContent(likedPosts.map(post => {
                    return <Link to={props.match.url+'/'+post.id}><div class="Child">{post.title}</div> </Link>
        }))
    }
    useEffect(aposts,[likedPosts])
    return (
        <div className="Following">
            <h1> Followed Posts</h1>

            {content}
            <Route path={props.match.url+"/:id"} component={FullPost}></Route>
        </div>
        
    )

}
export default Following;