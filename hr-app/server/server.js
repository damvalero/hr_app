require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.nawqx.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)
const db= mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', ()=> console.log('Connected to database'));

app.use(express.urlencoded({extended: true}));
// this line substitude bodyParser, express already does that
app.use(express.json());

// Routes
const employeesRouter = require('./routes/employees-routes.js');

// app will go to the routes
app.use('/employees', employeesRouter);
// the url will be localhost:3001/employes
app.listen(process.env.PORT || 3001, ()=> console.log('Server started'));