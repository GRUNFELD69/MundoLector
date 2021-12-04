const admin = require('firebase-admin');

var serviceAccount = require("./key/mundo-lector-bb946-firebase-adminsdk-xjr5k-5225ec244d.json");
admin.initializeApp({
    credential : admin.credential.cert(serviceAccount),
})

const db = admin.firestore();

module.exports = db;