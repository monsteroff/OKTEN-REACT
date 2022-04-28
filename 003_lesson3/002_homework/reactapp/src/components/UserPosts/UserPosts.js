import React from 'react';
import UserPostsPost from "../UserPostsPost/UserPostsPost";

const UserPosts = ({userPosts}) => {
    return (
        <div className="userPosts">
            {!userPosts.length? false : userPosts.map(post => <UserPostsPost key={post.id} post={post}/>)}
        </div>
    );
};

export default UserPosts;