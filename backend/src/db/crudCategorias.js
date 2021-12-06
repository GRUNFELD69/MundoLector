const db = require('./firebaseConnection.js');

function getCategories(callback){
    return db.collection('Categorias').get()
    .then(refDoc => {
        const categories = [];
        refDoc.forEach(doc => {
            var tmpCategory = doc.data();
            tmpCategory.id = doc.id;
            categories.push(tmpCategory);
        });
        console.log(categories);
        callback(categories);
    })
    .catch(err => {
        callback('Error getting documents', err);
    });
}

function getCategory(id, callback){
    return db.collection('Categorias').doc(id).get()
    .then(doc => {
        if (!doc.exists) {
            callback('No such category!');
        }
        else {
            callback(doc.data());
        }
    })
    .catch(err => {
        callback('Error getting category', err);
    });
}

function addCategory(category, callback){
    return db.collection('Categorias').add(category)
    .then(ref => {
        callback('Success to create new category ',ref.id);
    })
    .catch(err => {
        callback('Error adding category', err);
    });
}

function updateCategory(id, category, callback){
    return db.collection('Categorias').doc(id).set(category)
    .then(() => {
        callback('Success to update category');
    })
    .catch(err => {
        callback('Error updating category', err);
    });
}

function deleteCategory(id, callback){
    return db.collection('Categorias').doc(id).delete()
    .then(() => {
        callback('Success to delete category');
    })
    .catch(err => {
        callback('Error deleting category', err);
    });
}

module.exports = {
    getCategories,
    getCategory,
    addCategory,
    updateCategory,
    deleteCategory
}