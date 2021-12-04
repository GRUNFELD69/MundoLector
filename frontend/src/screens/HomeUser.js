import React from 'react';
import { Navigate } from 'react-router-dom';
import UserProfile from '../components/UserProfile';

const HomeUser = () => {
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

export default HomeUser
