const express = require('express');

const { engine } = require('express-handlebars');
const myconnection = require('express-myconnection');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const tasksRoutes = require('./routes/tasks');

//SERVIDOR
const app = express();
app.set('port',4000);

app.set('views', __dirname + "/views");
app.engine('.hbs', engine({
    extname: '.hbs'
}));
app.set('view engine','hbs');

//MYSQL DB CONNECTION
app.use(myconnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crudnodejs'
}))

//SERVIDOR
app.listen(app.get('port'), () => {
    console.log('Listening on port', app.get('port'));
});

app.use('/',tasksRoutes)

app.get('/',(req, res) => {
    res.render('home');
})