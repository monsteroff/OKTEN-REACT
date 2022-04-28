import React from 'react';

const User = ({user, getUserInfoById}) => {
    const salam = () => {getUserInfoById(user.id)}


    return (
        <div className="user">
            <h2>{user.id} {user.name}</h2>
            <button onClick={salam}>show user</button>
        </div>
    );
};

export default User;