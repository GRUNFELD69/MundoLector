import React from 'react'
import UserProfile from "../components/UserProfile";
import { Navigate } from 'react-router-dom';

const UserView = () => {
    var user = JSON.parse(localStorage.getItem('user'));
    if (user === null) {
        return <Navigate to="/" />;
    }
    return (
        <>
            <UserProfile />
        </>
    )
}

export default UserView
