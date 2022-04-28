import React from 'react';

const UserDetails = ({user, getUserPostsById}) => {

    const salam = () => {getUserPostsById(user.id)}

    return (
        <>
            {!user ? false : <div className="userDetail">
                <h2>{user.id} - {user.name}</h2>
                <h2>Email: {user.email}</h2>
                <h2>Phone: {user.phone}</h2>
                <h2>Website: {user.website}</h2>
                <h2>City: {user.address.city}</h2>
                <h2>Company: {user.company.name}</h2>
                <button onClick={salam}>Get User Posts</button>
            </div> }
        </>
    );
};

export default UserDetails;