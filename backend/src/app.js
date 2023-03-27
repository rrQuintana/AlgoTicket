const express = require('express');
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);

// middlewares
app.use(express.json());
var bodyParser = require("body-parser")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Starting the server
app.get('/', (req, res) => {
  res.send("Bienvenido a la api de AlgoTicket")
});

// Routes
app.use('/api/usuarios', require('./routes/usuarios.routes'));

module.exports = app;
