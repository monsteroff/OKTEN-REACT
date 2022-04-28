import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {postService} from "../../services/post.service";

const SinglePostPage = () => {
    const [post, setPost] = useState(null);
    const {id} = useParams();
    const {state} = useLocation();
    const navigate = useNavigate();

    const goBack = () => navigate(-1)
    const goHome = () => navigate('/')

    useEffect(()=>{
        if (!state) postService.getById(id).then(value => setPost({...value}))
        else setPost(state)
    },[])

    return (
        <div>
            Single
            <button onClick={goHome}>Go Home</button>
            <button onClick={goBack}>Go Back</button>
            {post && (
                <div>
                    <div>id:{post.id}</div>
                    <div>userId:{post.userId}</div>
                    <div>title :{post.title}</div>
                    <div>body:{post.body}</div>
                </div>
            )}
        </div>
    );
};

export {SinglePostPage};