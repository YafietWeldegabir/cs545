import React, { useState } from 'react';
import { useEffect } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios';

const Blog = () => {


    const [posts, setPosts] = useState([]);
    const [flag, setFlag] = useState(true);

    const [selectedId, setSelectedId] = useState(null);


     const [selectedPost, setSelectedPost] = useState({ title: "", author: "", content: "" })
     const [deleteFlag,setDeleteFlag]=useState(true);

    const updateFlag = () => {
        setFlag(!flag);
    }

      const postSelectedHandler = (id) => {
        setSelectedId(id);
        setDeleteFlag(!deleteFlag)
    }


    useEffect(() => {
        axios.get('http://localhost:8088/posts')
            .then(response => {
                const sposts = response.data.slice(0, 5);  
                setPosts([...sposts]);
            });
    }, [flag]);


    const rposts = posts.map(post => {
        return <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => { postSelectedHandler(post.id) }} />
    });


    const postDeleteHandler = () => {
        if (window.confirm("Are you sure you want to delete")) {
            axios.delete(`http://localhost:8088/posts/${selectedId}`)
                .then(response => {
                    setPosts(posts.filter((post) => post.id != selectedId));
                    setSelectedId(null);
                });
        }
    };

    useEffect(() => {
        axios.get(`http://localhost:8088/posts/${selectedId}`)
            .then(response => {
                setSelectedPost(response.data);
            });

    },[deleteFlag])


    return (

        <div>
            <section className="Posts">
                {rposts}
            </section>
            <section>
                <FullPost
                    id={selectedId}
                    title={selectedPost.title}
                    content={selectedPost.content}
                    author={selectedPost.author}
                    deletePost={postDeleteHandler}
                />

            </section>
            <NewPost execute={updateFlag} />
        </div>
    );
}


export default Blog;

