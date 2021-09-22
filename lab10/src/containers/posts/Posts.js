import Post from '../../components/post/Post';
import { useContext, useEffect } from 'react';
import { Link, Route } from 'react-router-dom'
import axios from 'axios';
import { FetchedPosts } from '../../store/FetchedPosts';
import './Posts.css';
import { APIConfig } from '../../store/API-Config';

const Posts = (props) => {
    const APIs = useContext(APIConfig);

    const { fetchedPosts, setFetchedPosts } = useContext(FetchedPosts);    

    const headers = { "Access-Control-Allow-Origin": "*" };

    useEffect(() => {
        axios.get(APIs.postAPI, { headers })
            .then(response => {
                setFetchedPosts([...response.data])
            }).catch(err => console.log("Error::" + err));
    }, []);

    let rposts = null;
    if (fetchedPosts) {
        rposts = fetchedPosts.map(post => {
            return <Link to={props.match.url + '/' + post.id} key={post.id}>
                <Post
                    title={post.title}
                    author={post.author}
                    // clicked={() => { postSelectedHandler(post.id) }}
                    id={post.id} />
            </Link>
        });
    }
    return (
        <div>
            <section className="Posts">
                {rposts}
            </section>            
        </div>
    );
}


export default Posts;