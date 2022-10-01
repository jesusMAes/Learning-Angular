const express = require('express');
const cors = require ('cors');
const { dbConnection } = require('./db/config');
require('dotenv').config();
 

//crear el servidor de expres
const app = express();

//conexión a base de datos
dbConnection()

//Directorio público
app.use( express.static('public'))

//CORS
app.use( cors() );

//Parsear info del body
app.use( express.json() );

 //rutas
 app.use( '/api/auth', require('./routes/auth')); 

app.listen( process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${ 4000 }`)
});