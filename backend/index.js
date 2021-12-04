// aqui se escribe el codigo de la aplicacion

const routerAPI = require('./routes');
const app = require('./app.js');
const cors = require('cors');
const axios = require('axios').default;
const port = process.env.PORT || 8080;
app.use(cors());

routerAPI(app);

 
app.get('/', function (req, res) {
  res.send('Backend mundolector MiNTIC')
})




