const db = require('./firebaseConnection.js');

function getOrders(callback){
    return db.collection('Ordenes').get()
    .then(snapshot => {
        //console.log('hola estoy en getBooks');
        const ordenes = [];
        snapshot.forEach(doc => {
            //console.log(doc.id, '=>', doc.data());
            ordenes.push(doc.data());
        });
        callback(ordenes);
    })
    .catch(err => {
        //console.log('Error getting documents', err);
        callback('Error getting documents', err);
    });
}

function getOrder(id, callback){
    return db.collection('Ordenes').doc(id).get()
    .then(docRef => {
        if (!docRef.exists) {
            callback('No such order!');
        }
        else {
            callback(docRef.data());
        }
    })
    .catch(err => {
        callback('Error getting order', err);
    });
}

function addOrder(order, callback){
    return db.collection('Ordenes').add(order)
    .then(newOrder => {
        callback('Success to create new order ',newOrder.id);
    })
    .catch(err => {
        callback('Error adding order', err);
    });
}

function updateOrderTotal(id, order, callback){
    return db.collection('Ordenes').doc(id).set(order)
    .then(() => {
        callback('Success to update order');
    })
    .catch(err => {
        callback('Error updating order', err);
    });
}

function deleteOrder(id, callback){
    return db.collection('Ordenes').doc(id).delete()
    .then(() => {
        callback('Success to delete order');
    })
    .catch(err => {
        callback('Error deleting order', err);
    });
}

function searchOrderByUser(destinatario, callback){
    return db.collection('Ordenes').where('Destinatario', '==', destinatario).get()
    .then(refDoc => {
        if (refDoc.empty) {
            callback('No find orders by this author!');
        }
        else {
            var arrayOrders = [];
            refDoc.forEach(doc => {                
                arrayOrders.push(doc.data());
            })          
            //callback(username.docs.map(doc => doc.data()));
            callback(arrayOrders);
        }
    })
    .catch(err => {
        callback('Error searching orders', err);
    });
}


module.exports = {
    getOrder,
    addOrder,
    updateOrderTotal,
    deleteOrder,
    getOrders,
    searchOrderByUser
}