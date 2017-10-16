export const INCREASE_LIKE = 'INCREASE_LIKE';
export const DECREASE_LIKE = 'DECREASE_LIKE';
export const RECEIVE_POSTS = 'ADD_POST';
export const ADD_POST = 'ADD_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const ADD_COMMENT = 'ADD_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

import * as APIUtil from '../utils/api';

const headers = new Headers({
    "Authorization": "blah"
});


export function addPost ({ post }) {
    return {
        type: ADD_POST,
        post
    }
};

export const receivePosts = posts => ({
    type: RECEIVE_POSTS,
    posts
});

export const fetchPosts = () => dispatch => {
    APIUtil.fetchPosts().then(posts => dispatch())
};

// export function increaseLike ({ day, recipe, meal }) {
//     return {
//         type: INCREASE_LIKE,
//         recipe,
//         day,
//         meal,
//     }
// };
//
// export function removeFromCalendar ({ day, meal }) {
//     return {
//         type: REMOVE_FROM_CALENDAR,
//         day,
//         meal,
//     }
// };