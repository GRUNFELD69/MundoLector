import React from 'react'
import { Navigate } from 'react-router-dom';
import AdminProfile from '../components/AdminProfile';

const HomeAdmin = () => {

  var user = JSON.parse(localStorage.getItem('user'));
  if (user === null) {
      return <Navigate to="/" />;
  } 
  return (
    <>
      <AdminProfile />
    </>
  )
}

export default HomeAdmin
