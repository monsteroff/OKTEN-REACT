import React from 'react';

const PostDetails = ({post, getCommentsById}) => {

    const salam = () => {getCommentsById(post.id)}

    return (
        <>
            {!post ? false : <div className="postDetail">
                <h2>Post id : {post.id}</h2>
                <h2>Post title : {post.title}</h2>
                <h3>Post body : {post.body}</h3>
                <button onClick={salam}>Show post comments</button>
            </div>}
        </>
    );
};

export default PostDetails;