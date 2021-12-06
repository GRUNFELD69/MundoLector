import axios from 'axios';

const baseURL = 'http://localhost:5000';

export function getAllCategories(callback) {
  return axios.get(`${baseURL}/category`)
    .then(response => {
        callback(response.data);
    })
    .catch(error => {
        console.log(error);
    });
}

export function addCategory(category, callback) {
    axios.post(baseURL + '/category', category)
    .then((response) => {
        callback(response);
    })
    .catch((error) => {
        console.log(error);
    });
}

export function updateCategory(id, category, callback) {
    axios.put(baseURL + '/category/' +id, category)
    .then((response) => {
        callback(response);
    })
    .catch((error) => {
        console.log(error);
    });
}

export function deleteCategory(id, callback) {
    axios.delete(baseURL + '/category/' + id)
    .then((response) => {
        callback(response);
    })
    .catch((error) => {
        console.log(error);
    });
}