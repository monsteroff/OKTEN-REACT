import React from 'react';
import PostComment from "../PostComment/PostComment";

const PostComments = ({comments}) => {
    return (
        <div className="postComments">
            {!comments.length? false : comments.map(comment => <PostComment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default PostComments;