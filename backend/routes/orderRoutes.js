
const express = require('express')
const dbOrders = require('../src/db/crudOrdenes.js');
const routerOrders = express.Router();

/* Funciones para ordenes */

routerOrders.get('/', (req, res) => {
    dbOrders.getOrders((orders) => {
        res.send(orders);
    });
})

routerOrders.get('/:id',(req,res)=>{
    dbOrders.getOrder(req.params.id, (order) => {
        res.send(order);
    });
});

routerOrders.post('/', (req, res) => {
    const order = req.body;
    dbOrders.addOrder(order, (response) => {
        res.send(response);
    })
})

routerOrders.put('/:id', (req, res) => {
    const order = req.body;
    dbOrders.updateOrderTotal(req.params.id, order, (response) => {
        res.send(response);
    })
})

routerOrders.delete('/:id', (req, res) => {
    dbOrders.deleteOrder(req.params.id, (response) => {
        res.send(response);
    })
})

routerOrders.get('/search/:Destinatario', (req, res) => {
    const destinatario = String(req.params.Destinatario);
    dbOrders.searchOrderByUser(destinatario, (orders) => {
        res.send(orders);
    });
})

module.exports = routerOrders;