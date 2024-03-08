const express = require("express");
const path = require('path');
const expressSession = require("express-session")
const bodyParser = require('body-parser');
const indexRouter = require('./route/index');
const userRouter = require('./route/user');
const db = require('./db')

const app = express();
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: "ok ok ok"
}))

app.use('/', indexRouter);
app.use('/user', userRouter);

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});