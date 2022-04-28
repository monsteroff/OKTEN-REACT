import React from 'react';
import Post from "../Post/Post";

const Posts = ({posts, getPostInfoById}) => {
    return (
        <>
            {!posts.length? false : posts.map(post => <Post key={post.id} post={post} getPostInfoById={getPostInfoById} />)}
        </>
    );
};

export default Posts;