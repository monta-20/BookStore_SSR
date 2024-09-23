const express = require('express');
const path =require("path")
const RouterHome = require('./routes/home.route')
const RouterBook = require('./routes/book.route')

const app = express();
app.use(express.static(path.join(__dirname,"assets")))

app.set('view engine','ejs')
app.set('views','views')

app.use('/',RouterHome)
app.get('/books',RouterBook)

app.get('/details',(req,res,next)=>{
    res.render('details')
})

app.get('/contact',(req,res,next)=>{
    res.render('contact')
})

app.get('/about',(req,res,next)=>{
    res.render('about')
})



app.get('/login',(req,res,next)=>{
    res.render('login')
})

app.get('/registre',(req,res,next)=>{
    res.render('registre')
})



app.listen(4000,()=>console.log("Server run in port 4000"))
