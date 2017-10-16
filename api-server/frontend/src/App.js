import React, { Component } from 'react';
import _ from 'lodash';
import logo from './logo.svg';
import './App.css';

import {
    fetchCategories,
    fetchPosts,
    fetchComments
} from './utils/api';

import Post from './components/Post';
import PostForm from './components/PostForm';
import FaAngleUp from 'react-icons/lib/fa/angle-up';
import FaAngleDown from 'react-icons/lib/fa/angle-down';

let store = {
    categories: [
        {
            "name": "react",
            "path": "react"
        },
        {
            "name": "redux",
            "path": "redux"
        },
        {
            "name": "udacity",
            "path": "udacity"
        }
    ],
    posts: [
        {
            "id": "8xf0y6ziyjabvozdd253nd",
            "timestamp": 1467166872634,
            "title": "Udacity is the best place to learn React",
            "body": "Everyone says so after all.",
            "author": "thingtwo",
            "category": "react",
            "voteScore": 6,
            "deleted": false
        },
        {
            "id": "6ni6ok3ym7mf1p33lnez",
            "timestamp": 1468479767190,
            "title": "Learn Redux in 10 minutes!",
            "body": "Just kidding. It takes more than 10 minutes to learn technology.",
            "author": "thingone",
            "category": "redux",
            "voteScore": -5,
            "deleted": false
        }
    ],
    comments: [
        {
            "id": "894tuq4ut84ut8v4t8wun89g",
            "parentId": "8xf0y6ziyjabvozdd253nd",
            "timestamp": 1468166872634,
            "body": "Hi there! I am a COMMENT.",
            "author": "thingtwo",
            "voteScore": 6,
            "deleted": false,
            "parentDeleted": false
        },
        {
            "id": "8tu4bsun805n8un48ve89",
            "parentId": "8xf0y6ziyjabvozdd253nd",
            "timestamp": 1469479767190,
            "body": "Comments. Are. Cool.",
            "author": "thingone",
            "voteScore": -5,
            "deleted": false,
            "parentDeleted": false
        }
    ]
};

class App extends Component {
    componentDidMount() {
        return Promise.all([
            fetchCategories(),
            fetchPosts()
        ]).then(([categories, posts]) => {
            console.log(categories);
            console.log(posts);
            return Promise.all(posts.map(post => Promise.resolve(fetchComments(post.id))));
        }).then((postsWithComments) => {
            console.log('postsWithComments', _.flatten(postsWithComments));
        });
    }
  render() {
    return (
      <div className="App">
        <section>
            <span>Listing all categories</span>
            <section>
                <ul>
                    { store.categories.length && store.categories.map(c =>
                        <li>{c.name}</li>
                    )}
                </ul>
            </section>
        </section>
        <section>
            <span>Listing all posts</span>
          <section>
            <ul>
                <FaAngleUp size={30} />
                <FaAngleDown size={30} />
            </ul>
          </section>
          <section className="App-intro">
              { store.posts.length &&
                store.posts.map(postProps =>
                    <Post
                        comments={store.comments.filter(c => c.parentId === postProps.id)}
                        {...postProps}
                    />
                )
              }
          </section>
            <PostForm/>
        </section>
      </div>
    );
  }
}

export default App;
