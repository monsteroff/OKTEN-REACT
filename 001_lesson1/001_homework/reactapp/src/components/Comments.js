import React, {useState, useEffect} from 'react'
import Comment from "./Comment";
import {getComments} from "../services/user.service";

function Comments() {
    const [comments, setComments] = useState([])
    useEffect(() => {getComments().then(val => setComments(val.data))}, [])
    return (
        <div className="comments">
            {comments.length? comments.map(comment => <Comment key={comment.id} comment={comment} />) : false}
        </div>
    )
}

export default Comments
