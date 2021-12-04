import React from 'react'
import { Navigate } from 'react-router-dom';
import InstantBooks from '../components/InstantBooks'

const BookSelect = () => {
  var user = JSON.parse(localStorage.getItem('user'));
  if (user === null) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <InstantBooks />
    </>
  )
}

export default BookSelect
