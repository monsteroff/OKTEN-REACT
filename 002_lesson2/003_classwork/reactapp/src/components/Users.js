import React, {useState, useEffect} from 'react'

import {getUsers} from '../services/user.service'
import User from './User'

function Users() {
    const [users, setUsers] = useState([])
    const [selectedUsers, setSelectedUsers] = useState([])

    useEffect(() => {
        getUsers().then(val => {
            setUsers(val.data)
            setSelectedUsers(val.data)
        })
    }, [])

    function filter(e){
        if(e.target.id === "nameInput") setSelectedUsers(users.filter(user => user.name.toLowerCase().includes(e.target.value.toLowerCase())))
        else if(e.target.id === "userNameInput") setSelectedUsers(users.filter(user => user.username.toLowerCase().includes(e.target.value.toLowerCase())))
        else if(e.target.id === "emailInput") setSelectedUsers(users.filter(user => user.email.toLowerCase().includes(e.target.value.toLowerCase())))
    }

    return (
        <div className='users'>
            <form id="form1" name="form1">
                <label htmlFor="nameInput">Name : </label>
                <input id="nameInput" type="text" placeholder="Name" name="input1_1" onKeyUp={filter} />
                <label htmlFor="userNameInput">Username : </label>
                <input id="userNameInput" type="text" placeholder="Username" name="input1_2" onKeyUp={filter} />
                <label htmlFor="emailInput">Email : </label>
                <input id="emailInput" type="text" placeholder="Email" name="input1_3" onKeyUp={filter} />
            </form>
            <hr />
            <div className='userWrapper'>
                {selectedUsers && selectedUsers.map(user => <User key={user.id} user={user}/>)}
            </div>
        </div>
    )
}

export default Users
