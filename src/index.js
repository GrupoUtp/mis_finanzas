const express = require('express');
const app = express();
const path = require('path');

//Setings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
// Middleweares

// Routes
app.use(require('./routes/index'));
// Static files
app.use(express.static(path.join(__dirname, 'public')));
// Server running
app.listen(app.get('port'), () => {
    console.log('Server is running on PORT', app.get('port'));
});