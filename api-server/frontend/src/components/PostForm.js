import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal'

class PostForm extends Component {
    render() {
        const {
            id,
            title,
            body,
            author,
            category,
            voteScore,
            deleted,
            comments
        } = this.props;

        return (
            <section>
                <article>
                    <form>
                        <label for="title">Title</label>
                        <input id="title" type="text" value={title} />
                        <ul>
                            <li>
                                <label for="author">Author</label>
                                <input id="author" type="text" value={author} />
                            </li>
                            <li>
                                <label for="category">Category</label>
                                <input id="category" type="text" value={author} />
                            </li>
                        </ul>
                        <section>
                            <label for="body">Body</label>
                            <textarea id="body" value={body} />
                        </section>
                        <button type="submit">Submit</button>
                    </form>
                </article>
            </section>
        );
    }
}

PostForm.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
    voteScore: PropTypes.string,
    deleted: PropTypes.boolean,
    comments: PropTypes.array
};

export default PostForm;
