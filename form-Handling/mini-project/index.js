const express = require('express')
const app = express()
const path = require('path')

//these two command are for to read the incoming data one for json format 
// other for urlencoded data
app.use(express.json())
app.use(express.urlencoded({ extended  : true }))

//it means find the static file in this path
app.use(express.static(path.join(__dirname, 'public')))

//to use ejs and render ejs pages
app.set('view engine' , 'ejs');


app.get('/' , function(req , res){
    res.render("index")//it will always find page in views folder
})

//Dynamic routing as anything after ':' is taken as vairiable
//so you can put any thing after profile and this route will 
//be triggered
app.get('/profile/:name' , function(req , res){
    res.send(`chal rha h  ${req.params.name}`)
})

app.get('/autor/:username/:age' , function(req , res){
    res.send(`kya chal rha h ${req.params.username} age = ${req.params.age }`) 

})

app.listen(3000 , function(){
    console.log('its running');
})