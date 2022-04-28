import React, {useState, useEffect} from 'react'

import {getUsers, getUserDescription, getUserPosts} from '../services/user.service'
import UserForList from './UserForList'
import UserDescription from './UserDescription'
import UserPosts from './UserPosts'

function Users() {
    const [users, setUsers] = useState([])
    const [user,setUser] = useState(null)
    const [userPosts , setUserPosts] = useState([])

    useEffect(() => {getUsers().then(val => setUsers(val.data))}, [])

    const getUserInfoById = (id) => {
        if(!user || user.id !== id) getUserDescription(id).then(val => setUser(val.data))
        else setUser(null)
        setUserPosts([])
    }

    const getUserPostsById = (id) => {
        if(!userPosts.length) getUserPosts(id).then(val => setUserPosts(val.data)) 
        else setUserPosts([])
    }
    
    return (
        <div className='usersContainer'>
            <div className='userForList'>{users.length? users.map(user => <UserForList key={user.id} user={user} getUserInfoById={getUserInfoById}/>) : false}</div>
            <div className='userDescription'>{user? <UserDescription user={user} getUserPostsById={getUserPostsById}/> : false}</div>
            <div className='userPosts'>{userPosts.length? userPosts.map(post => <UserPosts key={post.id} post={post}/>) : false}</div>
        </div>
    )
}

export default Users