const mongoose = require('mongoose');



const URI = 'mongodb://localhost/inventario';

mongoose.connect(URI, {
  useNewUrlParser: true,

})
const connection = mongoose.connection

connection.once('open', () => {
  console.log('DB esta conectado');
})
