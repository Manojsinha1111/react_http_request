import React, { Component } from 'react';
import {
    withRouter,
    // Link,
    Route,
} from 'react-router-dom';

import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {
    state = {
        posts: [],
    }

    clickSelectedHandler = (id) => {
        this.props.history.push({pathname: '/' + id});
        // this.props.history.push('/' + id);
    }

    componentDidMount() {
        console.log(this.props);
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                })
                this.setState({ posts: updatedPosts })
                // console.log(response);
            })
            .catch(error => {
                // console.log(error);
                this.setState({ error: true });
            });

    }

    render() {
        console.log(this.props);
        let posts = <p style={{ textAlign: 'center' }}> Something went wrong!</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    // <Link to={ '/post/' + post.id } key={post.id}>
                    <Post key={post.id}
                        title={post.title}
                        author={post.author}
                        clicked={() => this.clickSelectedHandler(post.id)}
                    />
                    // </Link>
                );
            });
        }

        return (
            <div>
                <section className='Posts'>
                    {posts}
                </section>
                <Route to="/:id" exact component={FullPost} />
            </div>

        );
    }
}

export default withRouter(Posts);