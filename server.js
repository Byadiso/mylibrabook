if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express =require('express');
const app =express();
const expresslayouts = require('express-ejs-layouts');
const indexRouter = require('./routes/index');


app.set('view engine' );

app.set('view engine','ejs');
app.set('views',__dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expresslayouts);
app.set(express.static('public'));

// connection to the datatabase

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true , useUnifiedTopology: true});
    const db = mongoose.connection;
    db.on('error', error=>console.log(error));
    db.once('open', ()=> console.log('connected to mongose'));

// routers

app.use('/', indexRouter);

app.listen(process.env.Port || 3000);