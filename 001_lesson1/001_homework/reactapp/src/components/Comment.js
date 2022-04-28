import React from 'react'

function Comment({comment}) {
    let {email, body} = comment
    return (
        <div className='comment goDark'>
           <h2>Comm writer name : {email.split("@")[0].split(".")[0].split("_")[0]}</h2> 
           <h3>Comment body : {body}</h3> 
        </div>
    )
}

export default Comment
