import React, {useEffect, useState} from 'react';

import {usersService} from "../../services/users.service";
import Users from "../../components/Users/Users";
import UserDetails from "../../components/UserDetails/UserDetails";
import UserPosts from "../../components/UserPosts/UserPosts";

const UsersPage = () => {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState(null)
    const [userPosts, setUserPosts] = useState([])

    const getUserInfoById = (id) => {
        if(!user || user.id !== id) usersService.getById(id).then(val => setUser(val))
        else setUser(null)
        setUserPosts([])
    }

    const getUserPostsById = (id) => {
        if(!userPosts.length) usersService.getPostsById(id).then(val => setUserPosts(val))
        else setUserPosts([])
    }

    useEffect(()=>{
        usersService.getAll().then(val => setUsers([...val]))
    },[])

    return (
        <div className="trioContainer">
            <div className="trio-left">
                <Users users={users} getUserInfoById={getUserInfoById}/>
            </div>
            <div className="trio-right">
                <div className="trio-right-top">
                    <UserDetails user={user} getUserPostsById={getUserPostsById}/>
                </div>
                <div className="trio-right-bottom">
                    <UserPosts userPosts={userPosts} />
                </div>
            </div>
        </div>
    );
};

export default UsersPage;