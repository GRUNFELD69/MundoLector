const db = require('./firebaseConnection.js');

// getting all books

function getBooks(callback){
    return db.collection('Libros').get()
    .then(refDoc => {
        const books = [];
        refDoc.forEach(doc => {
            tmpBook = doc.data();
            tmpBook.id = doc.id;
            books.push(tmpBook);
        });
        console.log(books);
        callback(books);
    })
    .catch(err => {
        callback('Error getting documents', err);
    });
}

function getBook(id, callback){
    return db.collection('Libros').doc(id).get()
    .then(doc => {
        if (!doc.exists) {
            callback('No such document!');
        }
        else {
            callback(doc.data());
        }
    })
    .catch(err => {
        callback('Error getting document', err);
    });
}

function addBook(book, callback){
    return db.collection('Libros').add(book)
    .then(ref => {
        callback('Success to create new book ',ref.id);
    })
    .catch(err => {
        callback('Error adding document', err);
    });
}

function updateBookTotal(id, book, callback){
    return db.collection('Libros').doc(id).set(book)
    .then(() => {
        callback('Success to update book');
    })
    .catch(err => {
        callback('Error updating document', err);
    });
}

function updateBookPartial(id, book, callback){
    return db.collection('Libros').doc(id).update(book)
    .then(() => {
        callback('Success to update book');
    })
    .catch(err => {
        callback('Error updating document', err);
    });
}

function deleteBook(id, callback){
    return db.collection('Libros').doc(id).delete()
    .then(() => {
        callback('Success to delete book');
    })
    .catch(err => {
        callback('Error deleting document', err);
    });
}

function searchBookByCategory(categoria, callback){
    return db.collection('Libros').where('Categoria', '==', categoria).get()
    .then(refDoc => {
        var arrayBooks = [];
        if (refDoc.empty) {
            callback(arrayBooks);
        }
        else {
            refDoc.forEach(doc => {  
                var tmpBook = doc.data();
                tmpBook.id = doc.id;              
                arrayBooks.push(tmpBook);
            })          
            //callback(username.docs.map(doc => doc.data()));
            callback(arrayBooks);
        }
    })
    .catch(err => {
        callback('Error searching books', err);
    });
}

function searchBookByAuthor(autor, callback){
    return db.collection('Libros').where('Autor', '==', autor).get()
    .then(refDoc => {
        if (refDoc.empty) {
            callback('No find book!');
        }
        else {
            var arrayBooks = [];
            refDoc.forEach(doc => {                
                arrayBooks.push(doc.data());
            })          
            //callback(username.docs.map(doc => doc.data()));
            callback(arrayBooks);
        }
    })
    .catch(err => {
        callback('Error searching books', err);
    });
}

function searchBookByTittle(tittle, callback){
    return db.collection('Libros').where('Titulo', '==', tittle).get()
    .then(refDoc => {
        if (refDoc.empty) {
            callback('No find book!');
        }
        else {
            var arrayBooks = [];
            refDoc.forEach(doc => {
                var tmpBook = doc.data(); 
                tmpBook.id = doc.id;
                arrayBooks.push(tmpBook);
            })          
            callback(arrayBooks);
        }
    })
    .catch(err => {
        callback('Error searching books', err);
    });
}


module.exports = {
    getBooks,
    getBook,
    addBook,
    updateBookTotal,
    updateBookPartial,
    deleteBook,
    searchBookByCategory,
    searchBookByAuthor,
    searchBookByTittle
}