const express = require('express');
const cors = require('cors');
const app = express();

//configuracion
app.set('port', process.env.PORT || 4000);

//middlewares
app.use(cors());
app.use(express.json());

//routes
//app.use('/api/Crear',(req,res) => res.send('CrearProducto'));
app.get('/api/Crear',(req, res) => res.send("Crear Procucto"));
//app.use('/api/Editar', require('./routes/EditProducto'))
//app.use('/api/Eliminar', require('./routes/EliminarProducto'))


module.exports = app;
