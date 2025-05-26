require('dotenv').config();
const express = require('express');
const app = express();
const groceryRouter = require('./appRouter')
const path = require('node:path')


app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use('/', groceryRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{console.log(`App listening on port http://localhost:${PORT}`)});