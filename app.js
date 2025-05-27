require('dotenv').config();
const express = require('express');
const app = express();
const path = require('node:path');

const groceryRouter = require('./groceryRouter');


app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

const assetsPath = path.join(__dirname, "public");

app.use(express.static(assetsPath));
app.use('/groceries', groceryRouter);

app.get('/', (req,res) => {
    res.render("index.ejs")
})

app.get('/calendar', (req, res) => {
    res.render("calendar")
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{console.log(`App listening on port http://localhost:${PORT}`)});