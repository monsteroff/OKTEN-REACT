import React from 'react'

function UserForList({user, getUserInfoById}) {
    function salam(){getUserInfoById(user.id)}
    return (
        <div className='goDark userInList'>
            <h3>{user.id} - {user.name}</h3>
            <button onClick={salam}>About {user.name}</button>
        </div>
    )
}

export default UserForList