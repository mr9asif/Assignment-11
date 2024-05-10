import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const AllBlogs = () => {
    const {user}= useContext(AuthContext)
    console.log(user)
    return (
        <div>
            <h1>All blogs</h1>
        </div>
    );
};

export default AllBlogs;