const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const morgan = require('morgan');
const multer = require('multer');

const app = express();

app.set('port', process.env.PORT || 1818);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
	defaultLayout: 'main',
	layoutsDir: path.join(app.get('views'), 'layouts'),
	partialsDir: path.join(app.get('views'), 'partials'),
	extname: '.hbs',
}));
app.set('view engine', 'hbs');

app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));

app.use(require('./routes/index.routes'));
app.use(require('./routes/files.routes'));

app.use(express.static( path.join(__dirname, 'public')));

module.exports = app;