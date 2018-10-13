require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const session = require ('express-session');

const app = express();

const { SESSION_PORT, SESSION_SECRET } = process.env

app.use(bodyParser.json());
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

app.listen(SESSION_PORT, () => console.log(`Server connected and running on port ${SESSION_PORT}`))