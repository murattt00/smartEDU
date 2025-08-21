const express = require('express');
const ejs = require('ejs');
const pageController = require('./controllers/pageController');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));



app.get('/',pageController.getHomePage);
app.get('/about',pageController.getAboutPage);



const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});