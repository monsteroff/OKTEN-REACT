import React, {useState, useEffect} from 'react'
import Post from "./Post";
import {getPosts} from "../services/user.service";

function Posts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {getPosts().then(val => setPosts(val.data))}, [])
    return (
        <div className='posts'>
            {posts.length? posts.map(post => <Post key={post.id} post={post}/>) : false}
        </div>
    )
}

export default Posts
