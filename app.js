require('dotenv').config();
const express = require('express');
const app = express();
const path = require('node:path');

const groceryRouter = require('./groceryRouter');


app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

const assetsPath = path.join(__dirname, "public");

app.use(express.static(assetsPath));
app.get('/', (req,res) => {
    res.render("index.ejs")
})

app.use('/groceries', groceryRouter);


app.get('/calendar', (req, res) => {
    res.render("calendar", {URL:'https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=America%2FEdmonton&showPrint=0&showTitle=0&src=MDkxNGI4N2NmOWIyMTc4ZmZkOTJkYzJlMDliMzc0YTVkYTFhZjRiNmQ3MmRiZjk1N2Q2ZWZjNWM3MTNlNzk2OEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%238E24AA'})
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{console.log(`App listening on port http://localhost:${PORT}`)});