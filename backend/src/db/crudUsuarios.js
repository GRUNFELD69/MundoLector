const db = require('./firebaseConnection.js');

function getUser(id, callback){
    return db.collection('Usuarios').doc(id).get()
    .then(doc => {
        if (!doc.exists) {
            callback('No such user!');
        }
        else {
            callback(doc.data());
        }
    })
    .catch(err => {
        callback('Error getting user', err);
    });
}

function addUser(user, callback){
    return db.collection('Usuarios').add(user)
    .then(ref => {
        callback('Success to create new user ',ref.id);
    })
    .catch(err => {
        callback('Error adding user', err);
    });
}

function updateUserTotal(id, user, callback){
    return db.collection('Usuarios').doc(id).set(user)
    .then(() => {
        callback('Success to update user');
    })
    .catch(err => {
        callback('Error updating user', err);
    });
}

function deleteUser(id, callback){
    return db.collection('Usuarios').doc(id).delete()
    .then(() => {
        callback('Success to delete user');
    })
    .catch(err => {
        callback('Error deleting user', err);
    });
}

function searchUser(username, callback){
    return db.collection('Usuarios').where('username', '==', username).get()
    .then(userName => {
        if (userName.empty) {
            callback('No such user!');
        }
        else {
            //console.log(userName.docs[0].data());
            /*var arrayUsers = [];
            userName.forEach(doc => {                
                arrayUsers.push(doc.data());
            })    */        
            //callback(username.docs.map(doc => doc.data()));
            callback(userName.docs[0].data());
        }
    })
    .catch(err => {
        callback('Error searching user', err);
    });
}

module.exports = {
    getUser,
    addUser,
    updateUserTotal,
    deleteUser,
    searchUser
}