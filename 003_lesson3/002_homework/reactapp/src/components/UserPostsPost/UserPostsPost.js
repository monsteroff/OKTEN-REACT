import React from 'react';

const UserPostsPost = ({post}) => {
    return (
        <div className="userPosts-Post">
            <h2>Post id : {post.id}</h2>
            <h2>Post title : {post.title}</h2>
            <h3>Post Body : {post.body}</h3>
        </div>
    );
};

export default UserPostsPost;