import axios from 'axios';
import React, { Component, useState } from 'react';

import './NewPost.css';

const NewPost = (props) => {

    const [post, setPost] = useState({
        title: '',
        content: '',
        author: 'Dean'
    })


    const handlePost = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/posts', post)
            .then(response => {
                console.log('Success', response.data)
                props.execute();
                console.log(response.data)
            });
    }



    return (
        <div className="NewPost">
            <h1>Add a Post</h1>
            <label>Title</label>
            <input type="text" value={post.title} onChange={(event) => setPost({ ...post, title: event.target.value })} />
            <label>Content</label>
            <textarea rows="4" value={post.content} onChange={(event) => setPost({ ...post, content: event.target.value })} />
            <label>Author</label>
            <select value={post.author} onChange={(event) => setPost({ ...post, author: event.target.value })}>
                <option value="Dean">Dean</option>
                <option value="Zaineh">Zaineh</option>
                <option value="Yasmeen">Yasmeen</option>
            </select>
            <button onClick={handlePost}>Add Post</button>
        </div>
    );



}

export default NewPost;