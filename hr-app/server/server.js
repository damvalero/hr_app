// require('dotenv').config();

const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.nawqx.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)
const db= mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', ()=> console.log('Connected to database'));

app.use(express.urlencoded({extended: true}));
// this line substitude bodyParser, express already does that
app.use(express.json());

//to make work the heroku deploy
app.use(express.static(path.join('public')))

// Routes
const employeesRouter = require('./routes/employees-routes.js');

// passing build folder of the client to the public in server
app.use((req, res, next) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

// app will go to the routes
app.use('/employees', employeesRouter);
// the url will be localhost:3001/employes
app.listen(process.env.PORT || 3001, ()=> console.log('Server started'));