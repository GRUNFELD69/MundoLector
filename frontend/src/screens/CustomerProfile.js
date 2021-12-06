import React from 'react'
import ProfileForm from '../components/ProfileForm'

const CustomerProfile = () => {
  var euser = JSON.parse(localStorage.getItem('eUser'));
  var user = JSON.parse(localStorage.getItem('user'));
  var adminRequest = localStorage.getItem('adminRequest');
  //localStorage.removeItem('user');
  var actionUser = "Editar";
  
  if(euser !== null){
    euser.email = euser.nombreUsuario;
    user = euser;
    //localStorage.removeItem('eUser');
  }
  else if (user === null || adminRequest === "newUser") {
      user = {
          Nombre: "",
          nombreUsuario: "",
          Direccion: "",
          Telefono: "",
          Edad: "",
          Rol: "",
          UrlPhoto: "",
          Biografia: ""
      }
      actionUser = "Agregar";
      localStorage.removeItem('adminRequest');
  }

    return (
    <>
       <ProfileForm user={user} actionUser={actionUser} /> 
    </>
  )
}

export default CustomerProfile
