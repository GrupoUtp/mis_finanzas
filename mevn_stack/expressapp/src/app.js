const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
const indexRoutes = require('./routes/index')

//configuraciones++++++++++++
mongoose.connect('mongodb+srv://root:toor@cluster0.1i4ph.mongodb.net/Cluster0?retryWrites=true&w=majority')
.then(db => console.log('Connected'))
.catch(err => console.log(err));
const port = 3000;

//middlewares++++++++++++++++
app.use(morgan('dev')); //utiliza morgan si se esta en dev, ve url solicitadas
app.use(express.urlencoded({extended: false})); //garantiza envío de archivos pequeños

//rutas++++++++++++++++++++++
app.use('/', indexRoutes);

//inicializacion del servidor
app.listen(port, ()=>{
    console.log('Server sarted');
});