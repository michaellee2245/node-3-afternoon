require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const session = require ('express-session');
const checkForSession = require('./middlewares/checkForSession');
const swag_controller = require('./controllers/swag_controller');

const app = express();

const { SESSION_PORT, SESSION_SECRET } = process.env

app.use(bodyParser.json());
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));
app.use(checkForSession);

app.get('/api/swag', swag_controller.read);

app.listen(SESSION_PORT, () => console.log(`Server connected and running on port ${SESSION_PORT}`))