import React from 'react'

function UserPosts({post}) {
    return (
        <div className='goDark post'>
            <h3>{post.id} - {post.title}</h3>
            <h3>{post.body}</h3>
        </div>
    )
}

export default UserPosts