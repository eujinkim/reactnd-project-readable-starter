import { combineReducers } from 'redux';

import {
    ADD_POST,
    UPDATE_POST,
    REMOVE_POST,
    ADD_COMMENT,
} from '../actions'

const posts = (state = [], action) => {
    const { post } = action;

    switch (action.type) {
        case ADD_POST :
            return [
                ...state,
                post
            ];
        default :
            return state;
    }
};

const comments = (state = [], action) => {
    const { comment } = action;

    switch (action.type) {
        case ADD_COMMENT :
            return [
                ...state,
                comment
            ];
        default :
            return state;
    }
};

export default combineReducers({
    posts,
    comments
});