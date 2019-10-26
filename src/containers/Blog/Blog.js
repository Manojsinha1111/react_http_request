import React, { Component } from 'react';
// import axios from 'axios';
// import axios from '../../axios';
import {
    Route,
    NavLink
} from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
    render() {
        return (
            <div>
                <header className='Blog'>
                    <nav>
                        <ul>
                            <li><NavLink to="/" exact >Home</NavLink></li>
                            <li><NavLink to="/new-post">New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>}/> Render can be used... but this will make the code messy for huge project. so its better to use component */}
                <Route path='/' exact component={Posts} /> 
                <Route path='/new-post' exact component={NewPost} /> 
            </div>
        );
    }
}

export default Blog;