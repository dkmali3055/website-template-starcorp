
const express = require('express');
const app = express();
require('dotenv').config();
const web = require ('./routes/web.js');
const path = require('path');

//console.log(path.join(process.cwd(),'public'));
app.use(express.static(path.join(process.cwd(),'public')));

app.use('/',web);

app.listen((process.env.PORT || 3000),() => {
    console.log( process.env.PORT);
});