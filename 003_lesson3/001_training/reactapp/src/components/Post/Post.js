import React from 'react';
import {Link} from "react-router-dom";

const Post = ({post}) => {
    const {id, title, userId, body} = post;
    return (
        <div>
            <div>id:{id}</div>
            <div>userId:{userId}</div>
            <div>title :{title}</div>
            <div>body:{body}</div>
            <Link to={id.toString()} state={post}>go to post</Link>
        </div>
    );
};

export default Post;