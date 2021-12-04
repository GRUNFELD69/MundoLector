const routerBooks = require('./bookRoutes.js');
const routerUsers = require('./userRoutes.js');
const routerOrders = require('./orderRoutes.js');
const routerInvoice = require('./invoiceRoutes.js');

function routerAPI(app) {
    app.use('/books', routerBooks);
    app.use('/users', routerUsers);
    app.use('/orders', routerOrders);
    app.use('/invoices', routerInvoice);
    //app.use('/invoices', routerInvoice);
}

module.exports = routerAPI;