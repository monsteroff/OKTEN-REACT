import React from 'react';

const PostComment = ({comment}) => {
    return (
        <div className="postComment">
            <h2>Comment id : {comment.id}</h2>
            <h2>Comment name : {comment.name}</h2>
            <h2>Comment email : {comment.email}</h2>
            <h2>Comment body : {comment.body}</h2>
        </div>
    );
};

export default PostComment;