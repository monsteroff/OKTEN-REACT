import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";

import {postService} from "../../services/post.service";
import Post from "../../components/Post/Post";

const PostsPage = () => {
    const [posts, setPosts] = useState([]);
    const [query, setQuery] = useSearchParams();
    const submit = (e) => {
        e.preventDefault()
        setQuery({title:e.target.search.value})
    };

    useEffect(()=>{
        postService.getAll().then(value => {
            const title = query.get('title')
            let filter = [...value]
            if (title) filter = value.filter(post => post.title.includes(title))
            setPosts(filter)
        })
    },[query]);

    return (
        <div>
            <h1>Posts</h1>
            <form onSubmit={submit}>
                <input type={"search"} name={"search"} placeholder={"Search by title"}/>
                <button>Search</button>
            </form>
            {posts.map(post => <Post key={post.id} post={post} />)}
        </div>
    );
};

export {PostsPage};