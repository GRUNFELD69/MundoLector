const express = require('express')
const dbUsers = require('../src/db/crudUsuarios.js');
const routerUser = express.Router();

/* Funciones para usuarios */

routerUser.get('/', (req, res) => {
    dbUsers.getUsers((users) => {
        console.log("voy aqui");
        console.log(users);
        res.send(users);
    });
})

routerUser.get('/:id',(req,res)=>{
    dbUsers.getUser(req.params.id, (user) => {
        res.send(user);
    });
});

routerUser.post('/', (req, res) => {
    const user = req.body;
    dbUsers.addUser(user, (response) => {
        res.status(201).send(response);
    })
})

routerUser.put('/:id', (req, res) => {
    const user = req.body;
    dbUsers.updateUserTotal(req.params.id, user, (response) => {
        res.send(response);
    })
})

routerUser.delete('/:id', (req, res) => {
    dbUsers.deleteUser(req.params.id, (response) => {
        res.send(response);
    })
})

routerUser.get('/search/:nombreUsuario', (req, res) => {  
    const name = String(req.params.nombreUsuario);
    dbUsers.searchUser(name, (response) => {
        res.send(response);
    })
})

module.exports = routerUser;
