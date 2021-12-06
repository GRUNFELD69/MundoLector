const db = require('./firebaseConnection.js');

function getUsers(callback){
    return db.collection('Usuarios').get()
    .then(refDoc => {
        const users = [];
        refDoc.forEach(doc => {
            tmpUser = doc.data();
            tmpUser.id = doc.id;
            users.push(tmpUser);
        });
        callback(users);
    })
    .catch(err => {
        callback('Error getting documents', err);
    });
}

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

function searchUser(nombreusuario, callback){
    return db.collection('Usuarios').where('nombreUsuario', '==', nombreusuario).get()
    .then(refDoc => {
        if (refDoc.empty) {
            callback('No such user! Probando la consulta');
        }
        else {
            var arrayUsers = [];
            refDoc.forEach(doc => {
                var tmpUser = doc.data(); 
                tmpUser.id = doc.id;
                arrayUsers.push(tmpUser);
            })          
            callback(arrayUsers[0]);
        }
    })
    .catch(err => {
        callback('Error searching user', err);
    });
}

module.exports = {
    getUsers,
    getUser,
    addUser,
    updateUserTotal,
    deleteUser,
    searchUser
}