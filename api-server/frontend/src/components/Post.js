import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FaThumbsOUp from 'react-icons/lib/fa/thumbs-o-up';
import FaThumbsODown from 'react-icons/lib/fa/thumbs-o-down';
import FaEdit from 'react-icons/lib/fa/edit';
import FaTimesCircleO from 'react-icons/lib/fa/times-circle-o';

import Comment from './Comment';
import CommentForm from './CommentForm';

class Post extends Component {
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
                    <header>{ title }</header>
                    <ul>
                        <li>
                            Author: { author }
                        </li>
                        <li>
                            Category: { category }
                        </li>
                        <li>
                            Vote: { voteScore }
                        </li>
                    </ul>
                    <section>
                        { body }
                    </section>
                    <section>
                        <FaThumbsOUp size={30} />
                        <FaThumbsODown size={30} />
                    </section>
                    <section>
                        <FaEdit size={30} />
                        <FaTimesCircleO size={30} />
                    </section>
                </article>
                { comments.length &&
                    comments.map(commentProps => <Comment {...commentProps}/>)
                }
                <CommentForm postId={id} />
            </section>
        );
    }
}

Post.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
    voteScore: PropTypes.number,
    deleted: PropTypes.boolean,
    comments: PropTypes.array
};

export default Post;
