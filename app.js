const express=require('express');
const path=require('path');
const bodyParser=require('body-parser');
const flash=require('connect-flash');
const cookieParser=require('cookie-parser');
const routes=require('./routes/index');
const session=require('express-session');

const app=express();

//Set where will be views
app.set('views',path.join(__dirname,'views'));

app.set('view engine','pug');

//Static files css,image..
app.set(express.static(path.join(__dirname,'public')));

//Read form and cookies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());

//Flash response
app.use(session({
secret: 'Znajdziesz',
resave:false,
saveUninitialized:true,
cookie: {}
}));

app.use(flash());

//Routes support all question with '/'
app.use('/',routes);




module.exports=app;