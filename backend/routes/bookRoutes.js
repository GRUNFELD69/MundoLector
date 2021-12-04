const express = require('express')
const dbBooks = require('../src/db/crudLibros.js');
const routerBooks = express.Router();

/* Funciones para Libros */

routerBooks.get('/', (req, res) => {
    dbBooks.getBooks((books) => {
        res.send(books);
    });
})

routerBooks.get('/:id',(req,res)=>{
    dbBooks.getBook(req.params.id, (book) => {
        res.send(book);
    });
});

routerBooks.post('/', (req, res) => {
    const book = req.body;
    dbBooks.addBook(book, (response) => {
        res.send(response);
    })
})

routerBooks.put('/:id', (req, res) => {
    const book = req.body;
    const idBook = req.params.id;
    dbBooks.updateBookTotal(idBook, book, (response) => {
        res.send(response);
    })
})

routerBooks.patch('/:id', (req, res) => {
    const book = req.body;
    const idBook = req.params.id;
    dbBooks.updateBookPartial(idBook, book, (response) => {
        res.send(response);
    })
})

routerBooks.delete('/:id', (req, res) => {
    const idBook = req.params.id;
    dbBooks.deleteBook(idBook, (response) => {
        res.send(response);
    })
})

routerBooks.get('/search/categoria/:Categoria', (req, res) => {
    const categoria = req.params.Categoria;
    dbBooks.searchBookByCategory(categoria, (books) => {
        res.send(books);
    });
})

routerBooks.get('/search/autor/:Autor', (req, res) => {
    const author = req.params.Autor;
    dbBooks.searchBookByAuthor(author, (books) => {
        res.send(books);
    });
})

routerBooks.get('/search/titulo/:Titulo', (req, res) => {
    const tittle = req.params.Titulo;
    dbBooks.searchBookByTittle(tittle, (book) => {
        res.send(book);
    });
})

module.exports = routerBooks;