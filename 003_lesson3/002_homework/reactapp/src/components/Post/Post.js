import React from 'react';

const Post = ({post, getPostInfoById}) => {

    const salam = () => {getPostInfoById(post.id)}

    return (
        <div className="post">
            <h2>{post.id} {post.title}</h2>
            <button onClick={salam}>Post Details</button>
        </div>
    );
};

export default Post;