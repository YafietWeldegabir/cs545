import React, {useState, useContext}  from 'react';
import axios from 'axios';

import './FullPost.css';
import { SelectedPostId } from '../../store/SelectedPostId';
import { FetchedPosts } from '../../store/FetchedPosts';

const FullPost = (props) => {
        const { fetchedPosts, setFetchedPosts } = useContext(FetchedPosts);
        const { selectedPostId, setSelectedPostId } = useContext(SelectedPostId);

        const selectedPost = fetchedPosts.find(post => post.id === selectedPostId)

        const {title, content} = selectedPost;
        const [confirmation, setConfirmation] = useState("");
      
        function deletePost(){
            const  headers = {"Access-Control-Allow-Origin": "*"};
            axios.delete(`http://localhost:9098/posts/${selectedPostId}`,{headers})
                .then(response => {
                    setConfirmation("Post is successfuly DELETED");
                    props.history.push('/'); 
                })
                .catch(err => console.log(err));
        }
        function updatePost(){
            const  headers = {"Access-Control-Allow-Origin": "*"};
            const data = {title:"C++",author:"Dean",content:"It is good prog language"};//for testing the update
            axios.put(`http://localhost:9098/posts/${selectedPostId}`,{...data},{headers})
                .then(response => setConfirmation("Post is successfuly UPDATED"))
                .catch(err => console.log(err));
        }

        let post = <p>Please select a Post!</p>;

        if(selectedPostId != null){
            post = (
                <div className="FullPost">
                    <h1>{title}</h1>
                    <p>{content}</p>
                    <div className="Edit">
                        <button className="Delete" onClick = {deletePost}>Delete</button>
                        <button id="Update" onClick = {updatePost}>Update</button>
                        <label className = "confirmation">{confirmation}</label>                        
                    </div>
                </div>
                 );
        }

       
        return post;
    }

export default FullPost;