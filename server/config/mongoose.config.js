const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/refact_man_prod', {})
    .then(res => console.log('Conexión con base de datos exitosa'))
    .catch(res => console.log('No pudo conectarse con la base de datos', err))