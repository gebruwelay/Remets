import axios from 'axios';
import React, { useContext, useMemo, useRef, useState } from 'react';
import { APIConfig } from '../../store/API-Config';
import Cookies from 'js-cookie';

import './NewPost.css';

const NewPost = (props) => {

    const APIs = useContext(APIConfig);
    const postAPI = APIs.postAPI;

    const newPostForm = useRef();

    const titleVal = useRef();
    const [value,setValue] = useState();

    useMemo(()=>{
        console.log(value);
    },[value])
    const PostDataHandler = () => {
        const headers = {
            'Access-Control-Allow-Origin': '*',
            'Authorization':`Bearer ${Cookies.get('user')}`
        }
        const form = newPostForm.current
        const data = { title: form['title'].value, content: form['content'].value, author: form['author'].value };
        console.log(data);
        axios.post("/posts", data, {headers:headers})
            .then(data => {
                console.log('Success:', data);
                props.history.push('/posts'); // push will add it to the page stack, replace will just replace the component  // props.history.replace('/posts'); 
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }


    return (
        <div className="NewPost">
            <form ref={newPostForm}>
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" label={'title'} name={'title'} />

                <label>Content</label>
                <textarea  rows="4" label={'content'} name={'content'} />

                <label>Author</label>
                <select label={'author'} name={'author'} >
                    <option value="Dean">Dean</option>
                    <option value="Moe">Moe</option>
                </select>
            </form>
            <button onClick={PostDataHandler}>Add Post </button>


            <input ref={titleVal} type="text" label={'i'} name={'i'} />
            <button onClick={
                ()=> {
                    setValue(titleVal.current.value);
                }
                 }>Print Val </button>
   
        </div>
    );
}
// if i didnt use a form, you will get a Chrome sendrequest error: TypeError: Converting circular structure to JSON
export default NewPost;