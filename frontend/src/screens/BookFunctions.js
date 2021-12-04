import React from 'react'
import BookDetails from '../components/BookDetails'

const BookFunctions = () => {
    var book = JSON.parse(localStorage.getItem('book'));
    localStorage.removeItem('book');
    var actionBook = "Editar";
    if (book === null) {
        book = {
            Titulo: "",
            Autor: "",
            Editorial: "",
            Categoria: "",
            Publicacion: "",
            unDisp: "",
            Precio: "",
            photoPortada: "",
            Descripcion: ""
        }
        actionBook = "Agregar";
    }

    return (
        <>
            <BookDetails book={book} actionBook={actionBook} />
        </>
    )
}

export default BookFunctions
