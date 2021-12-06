const routerBooks = require('./bookRoutes.js');
const routerUsers = require('./userRoutes.js');
const routerOrders = require('./orderRoutes.js');
const routerInvoice = require('./invoiceRoutes.js');
const routerCategory = require('./categoryRoutes.js');

function routerAPI(app) {
    app.use('/books', routerBooks);
    app.use('/users', routerUsers);
    app.use('/orders', routerOrders);
    app.use('/invoices', routerInvoice);
    app.use('/category', routerCategory);
    //app.use('/invoices', routerInvoice);
}

module.exports = routerAPI;