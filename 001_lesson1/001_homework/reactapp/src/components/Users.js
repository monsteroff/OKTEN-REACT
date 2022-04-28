import React, {useState, useEffect} from 'react'
import User from "./User";
import {getUsers} from "../services/user.service";

function Users() {
    const [users, setUsers] = useState([])
    useEffect(() => {getUsers().then(val => setUsers(val.data))}, [])
    
    return (
        <div className='users'>
            {users.length? users.map(user => <User key={user.id} user={user}/>) : false}
        </div>
    )
}

export default Users
