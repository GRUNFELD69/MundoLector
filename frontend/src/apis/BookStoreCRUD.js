import axios from 'axios';

const baseURL = 'http://localhost:5000';

export function getAllBooks(callback) {
  return axios.get(`${baseURL}/books`)
    .then(response => {
        callback(response.data);
    })
    .catch(error => {
        console.log(error);
    });
}

export function getBooksCategory(category, callback) {
    axios.get(baseURL + '/books/search/categoria/' + category)
    .then((response) => {
        callback(response.data);
    })
    .catch((error) => {
        console.log(error);
    });
}

export function getBooksTittle(tittle, callback) {
    axios.get(baseURL + '/books/search/titulo/' + tittle)
    .then((response) => {
        console.log(response.data);
        callback(response.data);
    })
    .catch((error) => {
        console.log(error);
    });
}

export function addBook(book, callback) {
    axios.post(baseURL + '/books', book)
    .then((response) => {
        callback(response);
    })
    .catch((error) => {
        console.log(error);
    });
}

export function deleteBook(id, callback) {
    axios.delete(baseURL + '/books/' + id)
    .then((response) => {
        callback(response);
    })
    .catch((error) => {
        console.log(error);
    });
}   