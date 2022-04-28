import React from 'react'

function Post({post}) {
    let {title,body} = post
    return (
        <div className='post goDark'>
            <h2>Post Title : {title}</h2>
            <h3>Post Body : {body}</h3>
        </div>
    )
}

export default Post
