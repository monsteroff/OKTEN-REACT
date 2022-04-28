import React from 'react'

function User({user}) {
    let {name , email} = user
    return (
        <div className='user goDark'>
            <h2>User Name : {name}</h2>
            <h3>User Email : {email}</h3>
        </div>
    )
}

export default User
