import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import './FullPost.css';
import { APIConfig } from '../../store/API-Config';
import { LikedPosts } from '../../store/LikedPosts';
import Cookies from 'js-cookie';

const FullPost = (props) => {

    const APIs = useContext(APIConfig);
    const postAPI = APIs.postAPI;
    const { likedPosts, setLikedPosts } = useContext(LikedPosts);

    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${Cookies.get('user')}`
    }

    const [postCall, setPostCall] = useState({});
    const [renderedId, setRenderedId] = useState(null); // remove this one

    useEffect(() => {
        setRenderedId(props.match.params.id);
    }, []);

    useEffect(() => {
        if (renderedId !== props.match.params.id) {
            axios("/posts/" + props.match.params.id, { headers })
                .then(response => {
                    setPostCall(response.data);
                    setRenderedId(props.match.params.id);
                })
        }
        // return () =>{
        //     console.log('post was unmounted')
        // };
    }, [props]);  // if I leave this empty here, it will update twice.  



    const deletePost = () => {
        axios.delete("/posts" + "/"+props.match.params.id, { headers })
            .then(response => {
                   // let index = likedPosts.indexOf(parseInt(props.match.params.id))
                   let result = likedPosts.filter(post=>post.id!=parseInt(props.match.params.id));
                   setLikedPosts(result);
                   // delete likedPosts[index]
                props.history.push('/posts');
            });
    };


    let post = <p style={{ justifyContent: 'space-around' }}> Please select a Post!</p>;
    if (props.match.params.id != null) {
        post = (
            <div className="FullPost">
                <h1>{postCall.title}</h1>
                <p>{postCall.content}</p>
                <div className="Edit">
                    <button onClick={deletePost} className="Delete">Delete</button>
                </div>
            </div>
        );
    }


    return post;
}

export default FullPost;