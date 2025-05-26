require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./appRouter')

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

app.use('/', router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{console.log(`App listening on port ${PORT}`)});