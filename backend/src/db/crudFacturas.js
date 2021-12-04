const db = require('./firebaseConnection.js');

function getInvoices(callback){
    return db.collection('Facturas').get()
    .then(refDoc => {
        //console.log('hola estoy en getBooks');
        const facturas = [];
        refDoc.forEach(doc => {
            //console.log(doc.id, '=>', doc.data());
            facturas.push(doc.data());
        });
        callback(facturas);
    })
    .catch(err => {
        //console.log('Error getting documents', err);
        callback('Error getting invoices', err);
    });
}

function addInvoice(invoice, callback){
    return db.collection('Facturas').add(invoice)
    .then(newInvoice => {
        callback('Success to create new invoice ',newInvoice.id);
    })
    .catch(err => {
        callback('Error adding invoice', err);
    });
}



module.exports = {
    getInvoices,
    addInvoice,
}