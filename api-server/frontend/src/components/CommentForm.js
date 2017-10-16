import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal'

class CommentForm extends Component {
    render() {
        const {
            postId
            // id,
            // title,
            // body,
            // author,
            // category,
            // voteScore,
            // deleted,
            // comments
        } = this.props;

        return (
            <section>
                <article>
                    <form>
                        <label for="title">Title</label>
                        <input id="title" type="text" placeholder="[Title goes here]" />
                        <ul>
                            <li>
                                <label for="author">Author</label>
                                <input id="author" type="text" placeholder="[Author goes here]" />
                            </li>
                        </ul>
                        <section>
                            <label for="body">Body</label>
                            <textarea id="body" placeholder="[Body goes here]" />
                        </section>
                        <button type="submit">Submit</button>
                    </form>
                </article>
            </section>
        );
    }
}

CommentForm.propTypes = {
    postId: PropTypes.string
    // id: PropTypes.string,
    // title: PropTypes.string,
    // body: PropTypes.string,
    // author: PropTypes.string,
    // category: PropTypes.string,
    // voteScore: PropTypes.string,
    // deleted: PropTypes.boolean
};

export default CommentForm;
