import React, { Component } from 'react';
// import axios from 'axios';
// import axios from '../../axios';
import {
    Route,
    NavLink,
    Switch,
    Redirect,
} from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
// import FullPost from './FullPost/FullPost';

class Blog extends Component {
    render() {
        return (
            <div>
                <header className='Blog'>
                    <nav>
                        <ul>
                            <li>
                                <NavLink
                                    to="/posts"
                                    exact
                                    activeClassName='my-active'
                                    activeStyle={{
                                        color: '#fa923f',
                                        textDecoration: 'underline'
                                    }}
                                >Home</NavLink></li>
                            <li><NavLink to="/new-post">New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>}/> Render can be used... but this will make the code messy for huge project. so its better to use component */}
                <Switch>
                    <Route path='/new-post' component={NewPost} />
                    <Route path='/posts/' component={Posts} />
                    <Redirect from='/' to='/posts/' />
                    {/* <Route path='/' component={Posts} /> */}

                </Switch>

            </div>
        );
    }
}

export default Blog;