const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const ejs = require('ejs');
const pageRoute = require('./routes/pageRoute');
const courseRoute = require('./routes/courseRoute');
const categoryRoute = require('./routes/categoryRoute');
const userRoute = require('./routes/userRoute');


const app = express();

global.userIN = null;

//Connect DB
mongoose.connect('mongodb://localhost/SmartEduDB');

//Template Engine   
app.set('view engine', 'ejs');

//Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
  secret: 'my_keyboard_cat',
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({ mongoUrl: 'mongodb://localhost/SmartEduDB' })
}));

//Route
app.use((req, res, next) => {
    userIN = req.session.userID;
    next();
});
app.use('/', pageRoute);
app.use('/courses', courseRoute);
app.use('/category', categoryRoute);
app.use('/user', userRoute);



const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});