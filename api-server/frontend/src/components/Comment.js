import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FaThumbsOUp from 'react-icons/lib/fa/thumbs-o-up';
import FaThumbsODown from 'react-icons/lib/fa/thumbs-o-down';
import FaEdit from 'react-icons/lib/fa/edit';
import FaTimesCircleO from 'react-icons/lib/fa/times-circle-o';

class Comment extends Component {
    render() {
        const {
            id,
            title,
            body,
            author,
            category,
            voteScore,
            timestamp,
            deleted
        } = this.props;

        return (
            <section>
                <article>
                    <ul>
                        <li>
                            Author: { author }
                        </li>
                        <li>
                            Vote: { voteScore }
                        </li>
                        <li>
                            { (new Date(timestamp)).toDateString() }
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

            </section>
        );
    }
}

Comment.propTypes = {
    id: PropTypes.string,
    parentId: PropTypes.string,
    timestamp: PropTypes.number,
    body: PropTypes.string,
    author: PropTypes.string,
    voteScore: PropTypes.number,
    deleted: PropTypes.boolean,
    parentDeleted: PropTypes.boolean
};

export default Comment;
