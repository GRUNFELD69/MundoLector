const express = require('express')
const dbCategories = require('../src/db/crudCategorias.js');
const routerCategory = express.Router();

/* Funciones para Libros */

routerCategory.get('/', (req, res) => {
    dbCategories.getCategories((categories) => {
        res.send(categories);
    });
})

routerCategory.get('/:id',(req,res)=>{
    dbCategories.getCategory(req.params.id, (category) => {
        res.send(category);
    });
});

routerCategory.post('/', (req, res) => {
    const category = req.body;
    dbCategories.addCategory(category, (response) => {
        res.send(response);
    })
})

routerCategory.put('/:id', (req, res) => {
    const category = req.body;
    const idCategory = req.params.id;
    dbCategories.updateCategory(idCategory, category, (response) => {
        res.send(response);
    })
})

routerCategory.delete('/:id', (req, res) => {
    const idCategory = req.params.id;
    dbCategories.deleteCategory(idCategory, (response) => {
        res.send(response);
    })
})

module.exports = routerCategory;