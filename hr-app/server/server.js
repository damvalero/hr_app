require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);
const db= mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', ()=> console.log('Connected to database'));

app.use(express.urlencoded({extended: true}));
// this line substitude bodyParser, express already does that
app.use(express.json());

const employeesRouter = require('./routes/employees-routes.js');
// the url will be localhost:300/employes
app.use('/employees', employeesRouter);
app.listen(3000, ()=> console.log('Server started'));