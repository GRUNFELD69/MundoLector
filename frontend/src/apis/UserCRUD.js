import axios from 'axios';

const baseURL = 'http://localhost:5000';

export function getAllUsers(callback) {
    return axios.get(`${baseURL}/users`)
      .then(response => {
          callback(response.data);
      })
      .catch(error => {
          console.log(error);
      });
  }

export function addUser(user, callback) {
    axios.post(baseURL + '/users', user)
    .then((response) => {
        callback(response);
    })
    .catch((error) => {
        console.log(error);
    });
}

export function updateUser(id, user, callback) {
    axios.put(baseURL + '/users/' +id, user)
    .then((response) => {
         callback(response);
    })
    .catch((error) => {
        console.log(error);
    });
}

export function getUser(nombreUsuario, callback) {

    return axios.get(`${baseURL}/users/search/` + nombreUsuario)
      .then(response => {
          callback(response.data);
      })
      .catch(error => {
          console.log(error);
      });
  }

  export function deleteUser(id, callback) {
    axios.delete(baseURL + '/users/' + id)
    .then((response) => {
        callback(response);
    })
    .catch((error) => {
        console.log(error);
    });
}