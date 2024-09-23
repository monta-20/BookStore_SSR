const express = require('express') ;
const path = require('path') ;
const app = express() ;
const RouterBook = require('./routes/book')

const Port = 4000;
app.use(express.static(path.join(__dirname,'assets'))) ;

app.set('view engine','ejs');
app.set('views','views');

app.use('/',RouterBook)

app.get('/contact',(req,res,next)=>{
    res.render('contact')
})


app.get('/about',(req,res,next)=>{
    res.render('about')
})

app.get('/books',(req,res,next)=>{
    res.render('books')
})

app.get('/login',(req,res,next)=>{
    res.render('login')
})

app.get('/register',(req,res,next)=>{
    res.render('register')
})

app.listen(Port,()=>{
    console.log(`My application is runing on port : ${Port}`) ;
})