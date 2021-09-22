
import React, { useState } from 'react';
import './Blog.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import { FetchedPosts } from '../../store/FetchedPosts';
import { SelectedPostId } from '../../store/SelectedPostId';
import Posts from '../posts/Posts';
import NewPost from '../../components/newPost/NewPost';
import Nav from '../../components/navigation/Nav';
import FullPost from '../../components/fullPost/FullPost';
import Login from '../../components/login/Login';
import { APIConfig } from '../../store/API-Config';

const Blog = () => {

    const [fetchedPosts, setFetchedPosts] = useState(null);
    const [selectedPostId, setSelectedPostId] = useState(null);

    return (
        <APIConfig.Provider value={
            {
                postAPI: 'http://localhost:9098/posts/'
            }
        }>
            <SelectedPostId.Provider value={{ selectedPostId, setSelectedPostId }}>
                <FetchedPosts.Provider value={{ fetchedPosts, setFetchedPosts }}>
                    <Router>
                        <div className="App">
                            <Nav />
                            <Switch>
                                <Route path="/posts" exact component={Posts} />
                                <Route path="/newposts" component={NewPost} />
                                <Route path="/signin" component={Login} />
                                <Route path="/posts/:id" component={FullPost} />
                                <Redirect from="/" to="/posts" />
                            </Switch>
                        </div>
                    </Router>
                </FetchedPosts.Provider>
            </SelectedPostId.Provider>
            </APIConfig.Provider>
            );
}


            export default Blog;