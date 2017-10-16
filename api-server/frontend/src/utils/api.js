const headers = new Headers({
    "Authorization": "blah"
});

export function fetchCategories () {
    return fetch(`http://localhost:3001/categories`, { headers })
        .then((res) => res.json());
};

export function fetchPosts () {
    return fetch(`http://localhost:3001/posts`, { headers })
        .then((res) => res.json());
};

export function fetchComments (postId) {
    return fetch(`http://localhost:3001/posts/${postId}/comments`, { headers })
        .then((res) => res.json());
};