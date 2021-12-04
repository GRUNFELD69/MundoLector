import React from 'react'
import LandingView from '../components/LandingView'
import LandingCards from '../components/LandingCards'
import { Navigate } from 'react-router-dom'
import {getBooksCategory} from '../apis/BookStoreCRUD'

const Landing = () => {

  getBooksCategory("Novela",(data)=>{
    console.log(data)
    });

  var user = JSON.parse(localStorage.getItem('user'));
  console.log(user);
  if (user !== null) {
    return <Navigate to="/userhome" />;
  }

  return (
    <>
      <LandingView />
      <h1>Nuestros Recomendados</h1>
      <br />
      <LandingCards />
    </>
  )
}

export default Landing
