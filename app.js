const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const pageRoute = require('./routes/pageRoute');
const courseRoute = require('./routes/courseRoute');


const app = express();

//Connect DB
mongoose.connect('mongodb://localhost/SmartEduDB');

//Template Engine   
app.set('view engine', 'ejs');

//Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Route
app.use('/', pageRoute);
app.use('/courses', courseRoute);



const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});