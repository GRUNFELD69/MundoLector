import React from 'react'
import { Navigate } from 'react-router-dom';
import BookList from '../components/BookList'

const ShoppingCart = () => {
    var user = JSON.parse(localStorage.getItem('user'));
    if (user === null) {
        return <Navigate to="/" />;
    }
    return (
        <>
            <BookList />
        </>
    )
}

export default ShoppingCart
