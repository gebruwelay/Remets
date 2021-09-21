import React, { useContext } from 'react';
import { LikedPosts } from '../../store/LikedPosts';

import './Post.css';

const Post = (props) => {

    const { likedPosts, setLikedPosts } = useContext(LikedPosts);
    return (
        <article className="Post" onClick={props.clicked}>
            <h1>{props.title}</h1>
            <div className="Info">
                <div className="Author">{props.author}</div>

            </div>
            {
                likedPosts.includes(likedPosts.find(post=>post.id==props.id))
                    ?
                    <button onClick={() => {

                        //let index = likedPosts.indexOf(props.id);
                        let result = likedPosts.filter(post => post.id!=props.id);
                        setLikedPosts(result);
                        // delete likedPosts[index];

                    }}>
                        Unfollow </button>
                    :
                    <button onClick={() => {
                        setLikedPosts([...likedPosts, { "id": props.id, "title": props.title }])
                       // console.log(likedPosts);

                    }}>
                        Follow </button>}
        </article>
    );
}

export default Post;