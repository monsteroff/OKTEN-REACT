import React from 'react';
import User from "../User/User";

const Users = ({users, getUserInfoById}) => {
    return (
        <>
            {!users.length? false : users.map(user => <User key={user.id} user={user} getUserInfoById={getUserInfoById}/>)}
        </>
    );
};

export default Users;