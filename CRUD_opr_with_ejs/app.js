const express = require('express')
const app = express()
const path = require('path')
const userModel = require('./models/user')

app.set('view engine' , 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname, 'public')))

app.get('/' , (req,res)=>{
    res.render('index')
})

app.get('/delete/:id' , async (req,res)=>{
    let users = await userModel.findOneAndDelete({_id: req.params.id});
    res.redirect("/read")
})

app.get('/edit/:id' , async (req,res)=>{
    let user= await userModel.findOne({_id: req.params.id})
    res.render("edit", {user})
})

app.post('/update/:id' , async (req,res)=>{
    let {name,email,image} = req.body;
    let user= await userModel.findOneAndUpdate({_id: req.params.id} , {name,email,image})
    res.redirect("/read")
})

app.get('/read' , async (req,res)=>{
    let users = await userModel.find()
    res.render('read', {users})
})

app.post('/create' , async (req,res)=>{
    let {name , email , image} = req.body;
    let createduser  = await userModel.create({
        name:name,
        email:email,//if you have same vame on both side you can write it only one time
        image
    })

    res.redirect('/read');
})
app.listen(3000)