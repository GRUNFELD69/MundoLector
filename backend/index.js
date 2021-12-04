// aqui se escribe el codigo de la aplicacion

const routerAPI = require('./routes');
const app = require('./app.js');
const cors = require('cors');
const axios = require('axios').default;
app.use(cors());

routerAPI(app);

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
 
app.get('/', function (req, res) {
  res.send('Backend mundolector MiNTIC')
})




