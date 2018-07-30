const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const morgan = require('morgan');

const router = require('./config/routes');
const { port, DB_URI } = require('./config/environment');

mongoose.connect(DB_URI);

// Layouts
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('views', `${__dirname}/views`); // This is the default

app.use(morgan('dev'));

app.use(router);

app.listen(port, () => console.log(`Express is listening on port ${port}`));
