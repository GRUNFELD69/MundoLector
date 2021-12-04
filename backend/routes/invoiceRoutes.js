
const express = require('express')
const dbInvoices = require('../src/db/crudFacturas.js');
const routerInvoices = express.Router();

routerInvoices.get('/', (req, res) => {
    dbInvoices.getInvoices((invoices) => {
        res.send(invoices);
    });
})

routerInvoices.post('/', (req, res) => {
    const invoice = req.body;
    dbInvoices.addInvoice(invoice, (response) => {
        res.send(response);
    })
})

module.exports = routerInvoices;