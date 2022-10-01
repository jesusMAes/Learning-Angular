
const express = require('express');

//crear el servidor de expres
const app = express();

//peticion GET
app.get('/', (req, res) => {
  
  res.json({
    ok:true,
    msg: 'todo salio bien',
    uid: 1234
  })
})

app.listen( 4000, () => {
  console.log(`Servidor corriendo en puerto ${ 4000 }`)
});