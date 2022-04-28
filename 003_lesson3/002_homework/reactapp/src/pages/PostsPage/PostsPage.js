import React, {useEffect, useState} from 'react';

import {postsService} from "../../services/posts.service";
import Posts from "../../components/Posts/Posts";
import PostDetails from "../../components/PostDetails/PostDetails";
import PostComments from "../../components/PostComments/PostComments";

const PostsPage = () => {
    const [posts, setPosts] = useState([])
    const [post, setPost] = useState(null)
    const [comments, setComments] = useState([])

    const getPostInfoById = (id) => {
        if(!post || post.id !== id) postsService.getById(id).then(val => setPost(val))
        else setPost(null)
        setComments([])
    }

    const getCommentsById = (id) => {
        if(!comments.length) postsService.getCommentsById(id).then(val => setComments(val))
        else setComments([])
    }

    useEffect(()=>{
        postsService.getAll().then(val => setPosts([...val]))
    },[])

    return (
        <div className="trioContainer">
            <div className="trio-left">
                <Posts posts={posts} getPostInfoById={getPostInfoById}/>
            </div>
            <div className="trio-right">
                <div className="trio-right-top">
                    <PostDetails post={post} getCommentsById={getCommentsById}/>
                </div>
                <div className="trio-right-bottom">
                    <PostComments comments={comments} />
                </div>
            </div>
        </div>
    );
};

export default PostsPage;